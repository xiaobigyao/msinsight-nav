// Embedding API - 硅基流动 BGE-M3

import { cosineSimilarity } from './knowledge';

/**
 * 使用硅基流动 BGE-M3 生成查询向量
 * API 文档：https://docs.siliconflow.cn/
 */
export async function embedQuery(text: string): Promise<Float32Array> {
  // 从 localStorage 获取 API Key
  const getApiKey = () => {
    const prefs = JSON.parse(localStorage.getItem('preferences') || '{}');
    return prefs.siliconflowApiKey;
  };

  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error('请先在设置中配置硅基流动 API Key');
  }

  const response = await fetch('https://api.siliconflow.cn/v1/embeddings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'BAAI/bge-m3', // BGE-M3 模型
      input: text,
      encoding_format: 'float',
    }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('硅基流动 API Key 无效，请检查配置');
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
