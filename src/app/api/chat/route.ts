import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * POST /api/chat
 * 处理聊天请求，转发到 SiliconFlow API
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
    // 从环境变量获取 API Key
    const apiKey = process.env.SILICONFLOW_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { stream } = body;

    // 转发请求到 SiliconFlow
    const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `API error (${response.status}): ${errorText}` },
        { status: response.status }
      );
    }

    // 处理流式响应
    if (stream) {
      return new NextResponse(response.body, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // 非流式响应
    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
