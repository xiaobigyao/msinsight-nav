// 知识库加载和检索

import type { KnowledgeChunk, MetadataIndex, SearchResult } from '@/types';

// 知识库缓存
let knowledgeDB: {
  chunks: KnowledgeChunk[];
  embeddings: Float32Array;
  metadata: MetadataIndex;
} | null = null;

/**
 * 加载知识库（运行时一次）
 */
export async function loadKnowledgeBase() {
  if (knowledgeDB) {
    return knowledgeDB;
  }

  console.log('📚 加载知识库...');

  try {
    // 并行加载所有文件
    const [chunksResp, embeddingsResp, metadataResp] = await Promise.all([
      fetch('/knowledge/chunks.json'),
      fetch('/knowledge/embeddings.npy'),
      fetch('/knowledge/metadata.json'),
    ]);

    if (!chunksResp.ok) throw new Error('Failed to load chunks.json');
    if (!embeddingsResp.ok) throw new Error('Failed to load embeddings.npy');
    if (!metadataResp.ok) throw new Error('Failed to load metadata.json');

    const chunks = await chunksResp.json();

    // 解析 numpy 数组
    const embeddingsBuffer = await embeddingsResp.arrayBuffer();
    const embeddingsArray = new Float32Array(
      embeddingsBuffer,
      0,
      embeddingsBuffer.byteLength / Float32Array.BYTES_PER_ELEMENT
    );

    const metadata = await metadataResp.json();

    knowledgeDB = {
      chunks,
      embeddings: embeddingsArray,
      metadata,
    };

    console.log(`✓ 知识库加载完成：${chunks.length} 个块，${embeddingsArray.length / chunks.length} 维向量`);

    return knowledgeDB;
  } catch (error) {
    console.error('知识库加载失败:', error);
    throw error;
  }
}

/**
 * 语义检索
 */
export async function searchKnowledge(
  query: string,
  queryEmbedding: Float32Array,
  options: {
    topK?: number;
    minSimilarity?: number;
    pageFilter?: string;
    typeFilter?: string;
  } = {}
): Promise<SearchResult[]> {
  const {
    topK = 5,
    minSimilarity = 0.6,
    pageFilter,
    typeFilter,
  } = options;

  const db = await loadKnowledgeBase();

  // 计算相似度
  const similarities: SearchResult[] = [];
  const embeddingDim = db.embeddings.length / db.chunks.length;

  for (let i = 0; i < db.chunks.length; i++) {
    const chunk = db.chunks[i];

    // 应用过滤条件
    if (pageFilter && chunk.metadata.page !== pageFilter) continue;
    if (typeFilter && chunk.type !== typeFilter) continue;

    // 计算余弦相似度
    const chunkEmbedding = db.embeddings.slice(
      i * embeddingDim,
      (i + 1) * embeddingDim
    );
    const score = cosineSimilarity(queryEmbedding, chunkEmbedding);

    if (score >= minSimilarity) {
      similarities.push({ chunk, score });
    }
  }

  // 排序并返回 topK
  return similarities
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/**
 * 按页面类型快速检索
 */
export async function searchByPage(pageType: string): Promise<KnowledgeChunk[]> {
  const db = await loadKnowledgeBase();
  return db.chunks.filter((chunk) => chunk.metadata.page === pageType);
}

/**
 * 按问题类型检索
 */
export async function searchByProblemType(problemType: string): Promise<KnowledgeChunk[]> {
  const db = await loadKnowledgeBase();
  const chunkIds = db.metadata.problem_type_index[problemType] || [];
  return chunkIds
    .map((id) => db.chunks.find((c) => c.id === id))
    .filter((c): c is KnowledgeChunk => c !== undefined);
}

/**
 * 余弦相似度计算（向量已归一化）
 */
function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  let dotProduct = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
  }
  return dotProduct;
}

// 导出给其他模块使用
export { cosineSimilarity };
