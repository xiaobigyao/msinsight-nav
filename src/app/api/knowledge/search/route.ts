import { NextRequest, NextResponse } from 'next/server';

// 注意：不使用 edge runtime，因为需要较大的内存来加载向量数据
// EdgeOne Pages 的 nodeFunctionsConfig 已配置 maxDuration: 120

import chunksData from '@/data/knowledge/chunks.json';
import embeddingsData from '@/data/knowledge/embeddings.json';

import type { KnowledgeChunk, SearchResult } from '@/types';

const chunks = chunksData as unknown as KnowledgeChunk[];
const embeddings = embeddingsData as number[][];
const EMBEDDING_DIM = embeddings[0]?.length || 1024;

// 内存缓存：查询向量
const queryCache = new Map<string, number[]>();

/**
 * L2 归一化
 */
function normalize(vector: number[]): number[] {
  const norm = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  return vector.map((v) => v / (norm + 1e-8));
}

/**
 * 余弦相似度（向量已归一化）
 */
function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
  }
  return dotProduct;
}

/**
 * 调用 SiliconFlow BGE-M3 生成查询向量
 */
async function embedQuery(text: string): Promise<number[]> {
  const cached = queryCache.get(text);
  if (cached) return cached;

  const apiKey = process.env.SILICONFLOW_API_KEY;
  if (!apiKey) {
    throw new Error('SILICONFLOW_API_KEY not configured');
  }

  const response = await fetch('https://api.siliconflow.cn/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'BAAI/bge-m3',
      input: text,
      encoding_format: 'float',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SiliconFlow embeddings API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const raw = data.data[0].embedding as number[];
  const normalized = normalize(raw);

  // 缓存查询向量（最多 100 条）
  if (queryCache.size < 100) {
    queryCache.set(text, normalized);
  }

  return normalized;
}

/**
 * POST /api/knowledge/search
 *
 * 请求体:
 *   { query: string, topK?: number, minSimilarity?: number }
 *
 * 响应:
 *   { results: SearchResult[] }
 *   SearchResult = { chunk: KnowledgeChunk, score: number }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, topK = 5, minSimilarity = 0.6 } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Missing required field: query (string)' },
        { status: 400 }
      );
    }

    // 1. 生成查询向量
    const queryEmbedding = await embedQuery(query);

    // 2. 计算相似度
    const results: SearchResult[] = [];

    for (let i = 0; i < chunks.length; i++) {
      const chunkEmbedding = embeddings[i];
      if (!chunkEmbedding || chunkEmbedding.length !== EMBEDDING_DIM) continue;

      const score = cosineSimilarity(queryEmbedding, chunkEmbedding);

      if (score >= minSimilarity) {
        results.push({ chunk: chunks[i], score });
      }
    }

    // 3. 排序并返回 topK
    results.sort((a, b) => b.score - a.score);

    return NextResponse.json({
      results: results.slice(0, topK),
      total: chunks.length,
    });
  } catch (error) {
    console.error('Knowledge search error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
