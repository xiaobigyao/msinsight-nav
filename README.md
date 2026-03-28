# MindStudio Insight 智能助手

基于 AI 的 MindStudio Insight 截图分析工具，帮助你快速理解性能指标、诊断瓶颈并获得优化建议。

## 🌐 在线访问

**生产环境**：https://msinsight-nav-dt8zoa2mzl.zh-cn.edgeone.cool/

## ✨ 主要功能

- 📸 **智能截图识别**：上传 MindStudio Insight 界面截图，AI 自动识别当前页面和可见面板
- 📊 **性能指标提取**：自动提取关键性能指标（SM 利用率、内存使用、带宽等）
- 🔍 **瓶颈诊断**：基于截图内容智能分析可能的性能瓶颈
- 💡 **优化建议**：根据分析结果提供针对性的优化建议
- 📚 **知识库增强**：结合 MindStudio 官方文档提供准确的技术指导
- 💬 **对话式交互**：支持多轮对话，深入分析问题

## 🚀 快速开始

### 在线使用

直接访问 [https://msinsight-nav-dt8zoa2mzl.zh-cn.edgeone.cool/](https://msinsight-nav-dt8zoa2mzl.zh-cn.edgeone.cool/) 即可使用，无需安装。

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/xiaobigyao/msinsight-nav.git
cd msinsight-nav

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env.local
# 编辑 .env.local，填入你的 SiliconFlow API Key

# 启动开发服务器
npm run dev

# 打开浏览器访问 http://localhost:3000
```

## 📦 环境变量配置

创建 `.env.local` 文件：

```bash
# SiliconFlow API Key（服务端使用，安全）
SILICONFLOW_API_KEY=your-api-key-here
```

获取 API Key：
1. 访问 [SiliconFlow 控制台](https://cloud.siliconflow.cn/account/ak)
2. 注册/登录账号
3. 创建新的 API Key
4. 复制 API Key 到 `.env.local` 文件

**安全说明**：
- ✅ API Key 只在服务端使用，不会暴露给客户端
- ✅ 所有 API 调用都通过 API Routes（服务端）转发
- ✅ 客户端代码无法访问 API Key

## 🛠️ 技术栈

- **前端框架**：Next.js 16 + React 19
- **UI 组件**：Ant Design 6
- **状态管理**：Dexie (IndexedDB)
- **AI 模型**：SiliconFlow Kimi-K2.5
- **向量检索**：BGE-M3 嵌入模型
- **部署平台**：EdgeOne Pages (腾讯云)

## 📁 项目结构

```
msinsight-nav/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API Routes
│   │   ├── page.tsx      # 首页
│   │   └── layout.tsx    # 布局
│   ├── components/       # React 组件
│   │   ├── ChatInterface.tsx
│   │   └── SettingsModal.tsx
│   └── lib/              # 工具库
│       ├── analyzer.ts   # 截图分析引擎
│       ├── embedding.ts  # 向量嵌入
│       ├── knowledge.ts  # 知识库检索
│       ├── siliconflow.ts # AI API 客户端
│       └── db.ts         # IndexedDB 封装
├── data/
│   └── scripts/          # 知识库构建脚本
└── public/               # 静态资源
```

## 🔧 知识库构建

如果需要更新知识库：

```bash
cd data/scripts
npm install
python 04_generate_embeddings.py
```

## 📝 部署指南

### EdgeOne Pages 部署

详细步骤请参考 [DEPLOY_EDGEONE.md](./DEPLOY_EDGEONE.md)

快速部署：
1. 访问 [EdgeOne Pages](https://pages.edgeone.ai)
2. 从 GitHub 导入仓库
3. 配置环境变量 `NEXT_PUBLIC_API_KEY`
4. 自动部署完成

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关资源

- [MindStudio 官方文档](https://www.hiascend.com/document)
- [SiliconFlow API 文档](https://docs.siliconflow.cn/)
- [EdgeOne Pages 文档](https://pages.edgeone.ai/zh/document/framework-nextjs)

---

**注意**：本项目使用 SiliconFlow API，需要有效的 API Key 才能正常使用。新用户通常有免费额度。
