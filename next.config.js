/** @type {import('next').NextConfig} */
const nextConfig = {
  // 移除 output: 'export' 以支持 API Routes
  // Vercel 会自动处理 Next.js 的服务端渲染和 API Routes

  // 图片优化
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
