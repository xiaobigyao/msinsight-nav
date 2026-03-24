/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出
  output: 'export',

  // 图片优化
  images: {
    unoptimized: true,
  },

  // Turbopack 配置（Next.js 16+ 默认）
  turbopack: {},
};

module.exports = nextConfig;
