// 知识库检索 - 通过服务端 API 调用

import type { SearchResult } from '@/types';

/**
 * 结合知识库检索的完整流程（服务端执行）
 */
export async function searchWithQuery(
  query: string,
  options?: {
    topK?: number;
    minSimilarity?: number;
    pageFilter?: string;
    typeFilter?: string;
  }
): Promise<SearchResult[]> {
  const { topK = 5, minSimilarity = 0.6 } = options || {};

  const response = await fetch('/api/knowledge/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, topK, minSimilarity }),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('API Key 未配置，请联系管理员');
    } else if (response.status === 429) {
      throw new Error('请求过快，请稍后再试');
    } else {
      const errorText = await response.text();
      throw new Error(`知识库检索错误 (${response.status}): ${errorText}`);
    }
  }

  const data = await response.json();
  return data.results as SearchResult[];
}
