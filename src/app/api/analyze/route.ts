import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * POST /api/analyze
 * 处理截图分析请求，转发到 SiliconFlow API（支持流式响应）
 */
export async function POST(request: NextRequest) {
  // 处理 CORS 预检请求
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    // 从环境变量获取 API Key（服务端，安全）
    const apiKey = process.env.SILICONFLOW_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { imageBase64, prompt, model = 'Pro/moonshotai/Kimi-K2.5' } = body;

    if (!imageBase64 || !prompt) {
      return NextResponse.json(
        { error: 'Missing required fields: imageBase64, prompt' },
        { status: 400 }
      );
    }

    console.log('🚀 服务端调用 SiliconFlow API...');
    console.log('📝 Prompt 长度:', prompt.length);
    console.log('🖼️ 图片大小:', imageBase64.length, '字符');

    // 转发请求到 SiliconFlow（流式）
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
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
        temperature: 0.3,
        max_tokens: 8192,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API 响应错误:', response.status, errorText);

      if (response.status === 401) {
        return NextResponse.json(
          { error: '硅基流动 API Key 无效，请检查配置' },
          { status: 401 }
        );
      } else if (response.status === 429) {
        return NextResponse.json(
          { error: '请求过快，请稍后再试' },
          { status: 429 }
        );
      } else {
        return NextResponse.json(
          { error: `API error (${response.status}): ${errorText}` },
          { status: response.status }
        );
      }
    }

    console.log('✅ API 响应成功，开始处理流式数据...');

    // 返回流式响应
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('❌ Analyze API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
