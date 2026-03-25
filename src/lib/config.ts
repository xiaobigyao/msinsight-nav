/**
 * API 配置
 *
 * 使用 Next.js API Routes 部署在 Cloudflare Pages
 * - 生产环境：使用 Next.js API Routes（/api/chat, /api/embeddings）
 * - 开发环境：可选择性直连 SiliconFlow API
 */

export const API_CONFIG = {
  // Next.js API Routes 基础路径（相对路径）
  API_BASE: '/api',

  // SiliconFlow API Key（可选，仅开发环境直连使用）
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',

  // 是否使用直连模式（仅开发环境）
  USE_DIRECT: !!process.env.NEXT_PUBLIC_API_KEY,
};
