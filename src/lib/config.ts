/**
 * API 配置
 *
 * 本地开发模式：使用 NEXT_PUBLIC_API_KEY 直连 SiliconFlow API
 */

export const API_CONFIG = {
  // SiliconFlow API Key（从环境变量获取）
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',

  // 是否配置了 API Key
  HAS_API_KEY: !!process.env.NEXT_PUBLIC_API_KEY,
};
