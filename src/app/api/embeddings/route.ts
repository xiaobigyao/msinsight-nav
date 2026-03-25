import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

/**
 * POST /api/embeddings
 * 处理嵌入请求，转发到 SiliconFlow API
 */
export async function POST(request: NextRequest) {
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

    // 转发请求到 SiliconFlow
    const response = await fetch('https://api.siliconflow.cn/v1/embeddings', {
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

    const data = await response.json();
    return NextResponse.json(data, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Embeddings API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}
