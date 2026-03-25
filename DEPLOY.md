# 部署指南

本文档介绍如何使用 **Cloudflare Pages + Next.js API Routes** 部署 MindStudio Insight。

## 架构说明

```
用户浏览器 → Cloudflare Pages (Next.js) → SiliconFlow API
                     ↑
              API Routes (/api/chat, /api/embeddings)
                     ↑
              环境变量（API Key）
```

**优势：**
- ✅ 一体化部署：前端和 API 在同一个项目中
- ✅ 免费额度：无限请求、无限带宽
- ✅ API Key 安全存储在服务端
- ✅ 用户无需配置任何东西
- ✅ 全球 CDN 加速

---

## 部署方式

### 方式 A：通过 Git 集成部署（推荐）

#### 1. 连接 Git 仓库

访问：https://dash.cloudflare.com/

#### 2. 创建 Pages 项目

- 点击 "Workers & Pages"
- 点击 "Create application"
- 选择 "Pages" 标签
- 点击 "Connect to Git"
- 选择你的 GitHub 仓库 `xiaobigyao/msinsight-nav`

#### 3. 配置构建设置

```
Project name: msinsight-nav
Production branch: main
Framework preset: Next.js
Build command: npm run build
Build output directory: .next
```

#### 4. 配置环境变量（重要！）

在 "Environment variables" 部分添加：

```
Name: SILICONFLOW_API_KEY
Value: sk-epzsfseecngaefhtpnulbwbypefrovhamwdpnfayituznipi
```

（替换为你自己的 SiliconFlow API Key）

#### 5. 保存并部署

点击 "Save and Deploy"，等待 2-3 分钟。

#### 6. 访问网站

部署成功后，Cloudflare 会提供域名：
```
https://msinsight-nav.pages.dev
```

---

### 方式 B：通过命令行部署

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 使用适配器构建
npx @cloudflare/next-on-pages

# 4. 部署到 Cloudflare Pages
npx wrangler pages deploy .vercel/output/static --project-name=msinsight-nav
```

或使用部署脚本：

```bash
./deploy-cloudflare.sh
```

---

## 本地开发

### 配置环境变量

创建 `.env.local` 文件：

```bash
# 本地开发：直连 SiliconFlow API
NEXT_PUBLIC_API_KEY=sk-xxxxxxxxxxxxx
```

### 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

---

## 验证部署

### 1. 访问网站

打开你的 Cloudflare Pages 域名（如 `https://msinsight-nav.pages.dev`）

### 2. 测试功能

- 上传或粘贴一张 MindStudio Insight 截图
- 输入问题，例如："分析一下性能瓶颈"
- 查看是否正常返回分析结果

### 3. 检查控制台

打开浏览器控制台（F12），应该看到：
```
✅ 使用 Next.js API Routes: /api
🚀 开始调用 API...
```

---

## 常见问题

### Q1: Pages 部署失败

**错误：** `Build failed`

**解决：**
- 本地运行 `npm run build` 测试
- 检查 Cloudflare Pages 构建日志
- 确认 Next.js 版本是 15.x（使用 `npm list next` 查看）

### Q2: API 调用失败

**错误：** `API key not configured`

**解决：**
- 确认在 Cloudflare Pages 中配置了 `SILICONFLOW_API_KEY` 环境变量
- 确认 API Key 格式正确（以 `sk-` 开头）
- 重新部署 Pages 项目

### Q3: 加载知识库很慢

**原因：** 知识库文件约 5.8MB

**解决：**
- 使用 Cloudflare Pages 部署（已解决，CDN 加速）
- 或考虑减小知识库大小

---

## 费用说明

### Cloudflare 免费套餐

**Pages：**
- 无限带宽
- 无限请求
- 500 次构建/月

**总费用：完全免费** ✅

### SiliconFlow API 费用

- Kimi-K2.5：按 token 计费
- 具体价格：https://cloud.siliconflow.cn/price

---

## 更新部署

代码更新后，只需推送到 GitHub，Cloudflare Pages 会自动重新部署：

```bash
git add .
git commit -m "feat: xxx"
git push origin main
```

---

## 技术支持

如有问题，请检查：
1. Cloudflare Dashboard 中的日志
2. 浏览器控制台的错误信息
3. 环境变量是否正确配置
