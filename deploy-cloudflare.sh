#!/bin/bash

# MindStudio Insight - Cloudflare Pages 部署脚本

set -e

echo "🚀 开始部署到 Cloudflare Pages..."

# 检查是否安装了 Wrangler
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI 未安装"
    echo "请运行: npm install -g wrangler"
    exit 1
fi

# 构建 Next.js 应用
echo "📦 构建 Next.js 应用..."
npm run build

# 使用 @cloudflare/next-on-pages 适配器
echo "🔧 使用 Cloudflare 适配器构建..."
npx @cloudflare/next-on-pages

# 部署到 Cloudflare Pages
echo "☁️  部署到 Cloudflare Pages..."
npx wrangler pages deploy .vercel/output/static --project-name=msinsight-nav

echo "✅ 部署完成！"
echo "🌐 访问你的网站: https://msinsight-nav.pages.dev"
