/**
 * Cloudflare Worker - SiliconFlow API 代理
 * 隐藏 API Key，提供安全的 API 访问
 */

export default {
  async fetch(request, env, ctx) {
    // 处理 CORS 预检请求
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    // 只处理 POST 请求
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      // 路由：/api/chat
      if (path === '/api/chat') {
        return handleChat(request, env);
      }

      // 路由：/api/embeddings
      if (path === '/api/embeddings') {
        return handleEmbeddings(request, env);
      }

      return new Response('Not found', { status: 404 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  },
};

/**
 * 处理聊天请求
 */
async function handleChat(request, env) {
  if (!env.SILICONFLOW_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const body = await request.json();

  // 转发请求到 SiliconFlow
  const response = await fetch('https://api.siliconflow.cn/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.SILICONFLOW_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  // 流式响应处理
  if (body.stream) {
    // 返回流式响应
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();

    const reader = response.body.getReader();
    const pump = async () => {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          await writer.write(value);
        }
      } finally {
        writer.close();
      }
    };

    ctx.waitUntil(pump());

    return new Response(readable, {
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
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

/**
 * 处理嵌入请求
 */
async function handleEmbeddings(request, env) {
  if (!env.SILICONFLOW_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const body = await request.json();

  const response = await fetch('https://api.siliconflow.cn/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.SILICONFLOW_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
