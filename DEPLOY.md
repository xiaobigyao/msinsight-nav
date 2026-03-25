# 部署指南

本文档介绍如何使用 Cloudflare Workers + Pages 部署 MindStudio Insight。

## 架构说明

```
用户浏览器 → Cloudflare Pages → Cloudflare Worker → SiliconFlow API
                              ↑
                        环境变量（API Key）
```

**优势：**
- ✅ 免费额度：100,000 次/天
- ✅ API Key 安全存储在服务端
- ✅ 用户无需配置任何东西
- ✅ 全球 CDN 加速

## 部署步骤

### 第一步：部署 Cloudflare Worker

#### 1. 安装 Wrangler CLI

```bash
npm install -g wrangler
```

#### 2. 登录 Cloudflare

```bash
wrangler login
```

这会打开浏览器，授权 Wrangler 访问你的 Cloudflare 账户。

#### 3. 配置环境变量

编辑 `cloudflare-worker/wrangler.toml`，或通过命令行设置：

```bash
wrangler secret put SILICONFLOW_API_KEY
```

输入你的 SiliconFlow API Key（从 https://cloud.siliconflow.cn/account/ak 获取）

#### 4. 部署 Worker

```bash
cd cloudflare-worker
wrangler deploy
```

部署成功后，会显示 Worker 的 URL，例如：
```
https://msinsight-nav-api.your-subdomain.workers.dev
```

**记住这个 URL！** 后面部署 Cloudflare Pages 时需要用到。

---

### 第二步：部署 Cloudflare Pages

#### 方式 A：通过 Git 集成部署（推荐）

1. **连接 Git 仓库**

   访问：https://dash.cloudflare.com/

2. **创建 Pages 项目**

   - 点击 "Workers & Pages"
   - 点击 "Create application"
   - 选择 "Pages" 标签
   - 点击 "Connect to Git"
   - 选择你的 GitHub 仓库 `xiaobigyao/msinsight-nav`

3. **配置构建设置**

   ```
   Project name: msinsight-nav
   Production branch: main
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: out
   ```

4. **配置环境变量**

   在 "Environment variables" 部分添加：

   ```
   Name: NEXT_PUBLIC_WORKER_URL
   Value: https://msinsight-nav-api.your-subdomain.workers.dev
   ```

   （替换为你的 Worker URL）

5. **保存并部署**

   点击 "Save and Deploy"，等待 2-3 分钟。

6. **访问网站**

   部署成功后，Cloudflare 会提供域名：
   ```
   https://msinsight-nav.pages.dev
   ```

#### 方式 B：通过 Wrangler 部署

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 部署到 Cloudflare Pages
npx wrangler pages deploy out --project-name=msinsight-nav
```

---

### 第三步：验证部署

1. **访问网站**

   打开你的 Cloudflare Pages 域名

2. **上传截图测试**

   - 粘贴或上传一张 MindStudio Insight 截图
   - 输入问题，例如："分析一下性能瓶颈"
   - 查看是否正常返回分析结果

3. **检查控制台**

   打开浏览器控制台（F12），应该看到：
   ```
   ✅ 使用 Worker API: https://your-worker.workers.dev
   🚀 开始调用 API...
   ```

---

## 本地开发

### 配置环境变量

创建 `.env.local` 文件：

```bash
# 方式一：使用 Worker（需要先部署 Worker）
NEXT_PUBLIC_WORKER_URL=https://your-worker.workers.dev

# 或方式二：直连 SiliconFlow API（开发环境）
NEXT_PUBLIC_API_KEY=sk-xxxxxxxxxxxxx
```

### 运行开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

---

## 常见问题

### Q1: Worker 部署失败

**错误：** `Error: Invalid API key`

**解决：**
- 确认 API Key 格式正确（以 `sk-` 开头）
- 使用 `wrangler secret list` 查看已配置的密钥
- 重新设置密钥：
  ```bash
  wrangler secret put SILICONFLOW_API_KEY
  ```

### Q2: Pages 部署失败

**错误：** `Build failed`

**解决：**
- 确认 `next.config.js` 中 `output: 'export'` 已配置
- 本地运行 `npm run build` 测试
- 检查 Cloudflare Pages 构建日志

### Q3: 网站可以访问，但调用 API 报错

**错误：** `请配置 NEXT_PUBLIC_WORKER_URL 或 NEXT_PUBLIC_API_KEY 环境变量`

**解决：**
- 确认 Cloudflare Pages 的环境变量已配置
- 确认变量名是 `NEXT_PUBLIC_WORKER_URL`（注意前缀 `NEXT_PUBLIC_`）
- 重新部署 Pages 项目

### Q4: 加载知识库很慢

**原因：** 知识库文件约 5.8MB，GitHub Pages 下载慢

**解决：**
- 使用 Cloudflare Pages 部署（已解决，CDN 加速）
- 或考虑减小知识库大小

---

## 费用说明

### Cloudflare 免费套餐

**Workers：**
- 100,000 请求/天
- 无限项目

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
3. Worker 的实时日志（Wrangler CLI）
