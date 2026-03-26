// Embedding API - 通过 API Routes 调用（安全）

import { cosineSimilarity } from './knowledge';

/**
 * 使用硅基流动 BGE-M3 生成查询向量（通过 API Routes）
 * API 文档：https://docs.siliconflow.cn/
 */
export async function embedQuery(text: string): Promise<Float32Array> {
  console.log('✅ 通过 API Route 生成嵌入向量');

  // 调用自己的 API Route（服务端会安全地调用 SiliconFlow）
  const response = await fetch('/api/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'BAAI/bge-m3',
      input: text,
      encoding_format: 'float',
    }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('硅基流动 API Key 无效，请联系管理员');
    } else if (response.status === 429) {
      throw new Error('请求过快，请稍后再试');
    } else {
      const errorText = await response.text();
      throw new Error(`API 错误 (${response.status}): ${errorText}`);
    }
  }

  const data = await response.json();
  const embedding = data.data[0].embedding;

  // L2 归一化（与构建时一致）
  const normalized = normalize(new Float32Array(embedding));

  return normalized;
}

/**
 * L2 归一化
 */
function normalize(vector: Float32Array): Float32Array {
  const norm = Math.sqrt(
    vector.reduce((sum, val) => sum + val * val, 0)
  );
  return vector.map((v) => v / (norm + 1e-8)) as any;
}

/**
 * 结合知识库检索的完整流程
 */
export async function searchWithQuery(
  query: string,
  options?: {
    topK?: number;
    minSimilarity?: number;
    pageFilter?: string;
    typeFilter?: string;
  }
) {
  // 1. 生成查询向量
  const queryEmbedding = await embedQuery(query);

  // 2. 动态导入 knowledge 模块（避免循环依赖）
  const { searchKnowledge } = await import('./knowledge');

  // 3. 检索
  return await searchKnowledge(query, queryEmbedding, options);
}
