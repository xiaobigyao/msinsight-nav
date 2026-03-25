# 本地开发指南

本文档介绍如何在本地运行 MindStudio Insight。

## 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn

---

## 安装与运行

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

创建 `.env.local` 文件：

```bash
# SiliconFlow API Key（从 https://cloud.siliconflow.cn/account/ak 获取）
NEXT_PUBLIC_API_KEY=sk-xxxxxxxxxxxxx
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问：http://localhost:3000

---

## 项目结构

```
msinsight-nav2/
├── src/
│   ├── app/
│   │   ├── api/          # Next.js API Routes
│   │   │   ├── chat/     # 聊天 API
│   │   │   └── embeddings/ # 嵌入 API
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/       # React 组件
│   ├── lib/             # 工具函数和 API 客户端
│   └── types/           # TypeScript 类型定义
├── data/                # 知识库数据
├── public/              # 静态资源
└── .env.local          # 环境变量（本地开发，不提交到 Git）
```

---

## API Routes

项目包含两个 API 端点：

### `/api/chat`
处理聊天请求，转发到 SiliconFlow Kimi-K2.5 API

### `/api/embeddings`
处理嵌入请求，转发到 SiliconFlow BGE-M3 API

---

## 本地开发模式

### 直连模式（推荐）

使用 `.env.local` 中的 `NEXT_PUBLIC_API_KEY` 直接调用 SiliconFlow API：

```bash
NEXT_PUBLIC_API_KEY=sk-xxxxxxxxxxxxx
npm run dev
```

**优点：**
- 简单直接，无需后端服务
- 适合开发和调试

**缺点：**
- API Key 暴露在客户端（仅用于本地开发）

---

## 构建生产版本

```bash
npm run build
npm start
```

---

## 常见问题

### Q1: 如何获取 SiliconFlow API Key？

访问：https://cloud.siliconflow.cn/account/ak

### Q2: 本地开发时 API 调用失败

检查：
1. `.env.local` 文件是否存在
2. API Key 是否正确
3. 是否重启了开发服务器（修改 .env.local 后需要重启）

### Q3: 图片上传失败

检查：
1. 图片大小是否过大（建议 < 10MB）
2. 浏览器控制台是否有错误信息

---

## 技术栈

- **框架**: Next.js 16.2.1
- **UI**: Ant Design 6.3.3
- **语言**: TypeScript 5.9.3
- **AI**: SiliconFlow Kimi-K2.5
- **向量**: BGE-M3 嵌入模型

---

## 许可证

MIT
