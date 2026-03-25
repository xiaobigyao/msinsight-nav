/**
 * API 配置
 *
 * 环境变量配置：
 * - NEXT_PUBLIC_WORKER_URL: Cloudflare Worker 地址
 * - NEXT_PUBLIC_API_KEY: SiliconFlow API Key（可选，开发环境使用）
 */

export const API_CONFIG = {
  // Cloudflare Worker 地址（必填）
  WORKER_URL: process.env.NEXT_PUBLIC_WORKER_URL || '',

  // SiliconFlow API Key（可选，仅开发环境直连使用）
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',

  // 是否使用 Worker API
  USE_WORKER: !!process.env.NEXT_PUBLIC_WORKER_URL,
};
