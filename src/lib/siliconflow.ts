// SiliconFlow API 客户端 - 多模态模型

import type { ScreenshotAnalysis } from '@/types';
import { API_CONFIG } from './config';

interface SiliconFlowStreamOptions {
  onDelta: (chunk: string) => void;
  onComplete: (fullResponse: string) => void;
  onError: (error: Error) => void;
}

interface ApiConfig {
  url: string;
  headers: Record<string, string>;
}

/**
 * 获取 API 配置
 */
function getApiConfig(): ApiConfig {
  // 生产环境：使用 Next.js API Routes
  if (!API_CONFIG.USE_DIRECT) {
    console.log('✅ 使用 Next.js API Routes:', API_CONFIG.API_BASE);
    return {
      url: `${API_CONFIG.API_BASE}/chat`,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  // 开发环境：使用环境变量中的 API Key 直连
  if (!API_CONFIG.API_KEY) {
    throw new Error('请配置 NEXT_PUBLIC_API_KEY 环境变量（开发环境）');
  }

  console.log('✅ 使用直连模式（开发环境）');
  return {
    url: 'https://api.siliconflow.cn/v1/chat/completions',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_CONFIG.API_KEY}`,
    },
  };
}

/**
 * 调用 SiliconFlow Kimi-K2.5 进行截图分析（流式）
 */
export async function analyzeScreenshot(
  imageBase64: string,
  prompt: string,
  options: SiliconFlowStreamOptions
): Promise<void> {
  const apiConfig = getApiConfig();

  console.log('🚀 开始调用 API...');
  console.log('📝 Prompt 长度:', prompt.length);
  console.log('🖼️ 图片大小:', imageBase64.length, '字符');

  try {
    const response = await fetch(apiConfig.url, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        model: 'Pro/moonshotai/Kimi-K2.5',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'image_url', image_url: { url: imageBase64 } },
              { type: 'text', text: prompt },
            ],
          },
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 8192,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API 响应错误:', response.status, errorText);

      if (response.status === 401) {
        throw new Error('硅基流动 API Key 无效，请检查配置');
      } else if (response.status === 429) {
        throw new Error('请求过快，请稍后再试');
      } else if (response.status === 400) {
        throw new Error(`请求参数错误: ${errorText}`);
      } else {
        throw new Error(`API 错误 (${response.status}): ${errorText}`);
      }
    }

    console.log('✅ API 响应成功，开始处理流式数据...');

    // 处理流式响应
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let fullContent = '';
    let chunkCount = 0;
    const maxChunks = 1000; // 最多接收 1000 个数据块（防止无限循环）
    const startTime = Date.now();
    const timeout = 120000; // 120 秒超时

    while (true) {
      // 检查超时
      if (Date.now() - startTime > timeout) {
        console.log(`⏱️ 超时 (${timeout}ms)，强制结束`);
        break;
      }

      const { done, value } = await reader.read();

      if (done) {
        console.log(`✅ 流式数据接收完成，共 ${chunkCount} 个数据块`);
        console.log(`📄 最终内容长度: ${fullContent.length} 字符`);
        console.log(`📝 内容预览:`, fullContent.substring(0, 200));

        // 即使没有收到 [DONE]，也返回已有内容
        if (fullContent.length > 0) {
          console.log('🔔 调用 onComplete 回调...');
          options.onComplete(fullContent);
          return;
        }
        break;
      }

      const chunk = decoder.decode(value, { stream: true });
      chunkCount++;

      // 检查数据块数量
      if (chunkCount > maxChunks) {
        console.log(`⚠️ 已接收 ${maxChunks} 个数据块，强制结束`);
        break;
      }

      for (const line of chunk.split('\n')) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('data: ')) {
          const data = trimmedLine.slice(6); // 去掉 "data: " 前缀

          if (data === '[DONE]') {
            console.log('✅ 收到 [DONE] 标记');
            console.log(`📄 最终内容长度: ${fullContent.length} 字符`);
            console.log('🔔 调用 onComplete 回调...');
            options.onComplete(fullContent);
            return;
          }

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta;
            // Kimi-K2.5 使用 reasoning_content 或 content 字段
            const content = delta?.content || delta?.reasoning_content;

            if (content) {
              fullContent += content;
              if (chunkCount % 50 === 0) {
                console.log(`✨ 已接收 ${fullContent.length} 字符...`);
              }
              options.onDelta(content);
            }
          } catch (e) {
            // 忽略解析错误
          }
        }
      }
    }

    // 循环结束后，如果有内容就返回
    if (fullContent.length > 0) {
      console.log('🔔 调用 onComplete 回调...');
      options.onComplete(fullContent);
      return;
    }
  } catch (error) {
    console.error('❌ SiliconFlow API 调用异常:', error);
    options.onError(error as Error);
  }
}

/**
 * 调用 SiliconFlow Kimi-K2.5 进行对话（流式）
 */
export async function chat(
  messages: Array<{ role: string; content: string }>,
  options: SiliconFlowStreamOptions
): Promise<void> {
  const apiConfig = getApiConfig();

  try {
    const response = await fetch(apiConfig.url, {
      method: 'POST',
      headers: apiConfig.headers,
      body: JSON.stringify({
        model: 'Pro/moonshotai/Kimi-K2.5',
        messages,
        stream: true,
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      throw new Error(`API 错误 (${response.status})`);
    }

    // 处理流式响应
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let fullContent = '';

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(7);

          if (data === '[DONE]') {
            options.onComplete(fullContent);
            return;
          }

          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices[0]?.delta?.content;

            if (delta) {
              fullContent += delta;
              options.onDelta(delta);
            }
          } catch (e) {
            // 忽略解析错误
          }
        }
      }
    }
  } catch (error) {
    options.onError(error as Error);
  }
}

/**
 * 解析 SiliconFlow 响应为结构化数据
 */
export function parseSiliconFlowResponse(response: string): ScreenshotAnalysis {
  console.log('🔍 开始解析响应，长度:', response.length);

  try {
    // 尝试直接解析 JSON
    return JSON.parse(response);
  } catch (error) {
    console.warn('⚠️ 直接解析 JSON 失败，尝试提取:', error);

    // 如果响应不是纯 JSON，提取 JSON 部分
    const jsonMatch = response.match(/```json\n([\s\S]*?)\n```/);
    if (jsonMatch) {
      console.log('✅ 找到 markdown JSON 块');
      return JSON.parse(jsonMatch[1]);
    }

    // 或者尝试找 {...} 块
    const objectMatch = response.match(/\{[\s\S]*\}/);
    if (objectMatch) {
      console.log('✅ 找到 JSON 对象块');
      try {
        return JSON.parse(objectMatch[0]);
      } catch (e) {
        console.warn('⚠️ 解析对象块失败，尝试修复');

        // 尝试修复不完整的 JSON
        const jsonStr = objectMatch[0];
        // 移除末尾不完整的部分
        const fixedStr = fixIncompleteJSON(jsonStr);
        console.log('🔧 尝试修复后的 JSON:', fixedStr.substring(0, 200));

        return JSON.parse(fixedStr);
      }
    }

    console.error('❌ 无法解析 AI 响应');
    throw new Error('无法解析 AI 响应');
  }
}

/**
 * 尝试修复不完整的 JSON
 */
function fixIncompleteJSON(jsonStr: string): string {
  // 尝试找到最后一个完整的对象
  let braceCount = 0;
  let lastCompleteIndex = -1;

  for (let i = 0; i < jsonStr.length; i++) {
    if (jsonStr[i] === '{') braceCount++;
    if (jsonStr[i] === '}') braceCount--;
    if (braceCount === 0 && i > 0) {
      lastCompleteIndex = i + 1;
    }
  }

  if (lastCompleteIndex > 0) {
    return jsonStr.substring(0, lastCompleteIndex);
  }

  // 如果无法修复，返回空对象
  console.error('❌ 无法修复 JSON，返回空对象');
  return '{}';
}
