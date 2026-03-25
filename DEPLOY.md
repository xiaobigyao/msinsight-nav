# 部署指南

本文档介绍如何使用 **Vercel** 部署 MindStudio Insight。

## 架构说明

```
用户浏览器 → Vercel (Next.js) → SiliconFlow API
                     ↑
              API Routes (/api/chat, /api/embeddings)
                     ↑
              环境变量（API Key）
```

**优势：**
- ✅ Vercel 是 Next.js 官方平台，完美支持
- ✅ 一体化部署：前端和 API 在同一个项目中
- ✅ 免费额度充足
- ✅ API Key 安全存储在服务端
- ✅ 全球 CDN 加速
- ✅ 零配置，自动部署

---

## 部署步骤

### 方式 A：通过 Vercel Dashboard 部署（推荐）

#### 1. 访问 Vercel

访问：https://vercel.com

#### 2. 导入项目

- 点击 "Add New" → "Project"
- 选择 "Import Git Repository"
- 选择你的 GitHub 仓库 `xiaobigyao/msinsight-nav`
- 点击 "Import"

#### 3. 配置项目

Vercel 会自动检测 Next.js 项目，使用默认配置即可：

```
Project Name: msinsight-nav
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

#### 4. 配置环境变量（重要！）

在 "Environment Variables" 部分添加：

```
Name: SILICONFLOW_API_KEY
Value: sk-epzsfseecngaefhtpnulbwbypefrovhamwdpnfayituznipi
```

（替换为你自己的 SiliconFlow API Key）

#### 5. 部署

点击 "Deploy" 按钮，等待 1-2 分钟即可完成部署。

#### 6. 访问网站

部署成功后，Vercel 会提供域名：
```
https://msinsight-nav.vercel.app
```

---

### 方式 B：通过 Vercel CLI 部署

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel
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

打开你的 Vercel 域名

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

## 费用说明

### Vercel 免费套餐

**Hobby 计划（免费）：**
- 100GB 带宽/月
- 无限项目
- 自动 HTTPS
- 全球 CDN
- 10000 次构建/月

**总费用：完全免费** ✅

### SiliconFlow API 费用

- Kimi-K2.5：按 token 计费
- 具体价格：https://cloud.siliconflow.cn/price

---

## 更新部署

代码推送到 GitHub 后，Vercel 会自动重新部署：

```bash
git add .
git commit -m "feat: xxx"
git push origin main
```

无需任何手动操作！

---

## 常见问题

### Q1: 部署失败

**错误：** `Build failed`

**解决：**
- 本地运行 `npm run build` 测试
- 检查 Vercel 构建日志
- 确认 Node.js 版本（建议 18.x 或 20.x）

### Q2: API 调用失败

**错误：** `API key not configured`

**解决：**
- 确认在 Vercel 项目设置中配置了 `SILICONFLOW_API_KEY` 环境变量
- 确认 API Key 格式正确（以 `sk-` 开头）
- 重新部署项目

### Q3: 如何添加自定义域名？

在 Vercel Dashboard：
1. 进入项目设置
2. 点击 "Domains"
3. 添加你的域名
4. 配置 DNS 记录

---

## 技术支持

如有问题，请检查：
1. Vercel Dashboard 中的部署日志
2. 浏览器控制台的错误信息
3. 环境变量是否正确配置

