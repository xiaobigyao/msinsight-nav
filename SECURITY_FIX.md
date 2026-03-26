# 🔒 安全修复说明

## 问题描述

之前的架构存在**严重的安全漏洞**：

### ❌ 旧架构（不安全）

```
浏览器客户端 → 直接调用 SiliconFlow API
                ↑
           暴露 API Key！
```

**问题**：
- 客户端代码使用 `NEXT_PUBLIC_API_KEY` 直接调用 SiliconFlow API
- API Key 会被打包到客户端 JavaScript 中
- 任何人打开浏览器控制台就能看到 API Key
- 任何人都可以盗用你的 API 额度

### ✅ 新架构（安全）

```
浏览器客户端 → API Routes (/api/analyze, /api/embeddings) → SiliconFlow API
                ↑                                            ↑
           不暴露 API Key                              服务端使用 API Key
```

**优势**：
- API Key 只在服务端使用
- 客户端无法访问 API Key
- 所有第三方 API 调用都通过自己的 API Routes 转发
- 完全安全！

---

## 修改内容

### 1. 新增 API Routes

**`/api/analyze/route.ts`** - 截图分析 API
- 接收客户端的截图和 prompt
- 在服务端调用 SiliconFlow Kimi-K2.5 API
- 返回流式响应

**`/api/embeddings/route.ts`** - 嵌入向量 API（已存在，无需修改）
- 接收客户端的文本
- 在服务端调用 SiliconFlow BGE-M3 API
- 返回嵌入向量

**`/api/chat/route.ts`** - 聊天 API（已存在，无需修改）
- 接收客户端的消息
- 在服务端调用 SiliconFlow Chat API
- 返回流式响应

### 2. 重构客户端代码

**`src/lib/siliconflow.ts`**
- ❌ 移除：直接调用 `https://api.siliconflow.cn`
- ❌ 移除：使用 `NEXT_PUBLIC_API_KEY`
- ✅ 新增：调用 `/api/analyze` API Route
- ✅ 新增：无需客户端 API Key

**`src/lib/embedding.ts`**
- ❌ 移除：直接调用 `https://api.siliconflow.cn`
- ❌ 移除：使用 `NEXT_PUBLIC_API_KEY`
- ✅ 新增：调用 `/api/embeddings` API Route
- ✅ 新增：无需客户端 API Key

**`src/lib/config.ts`** - 已删除
- ❌ 删除：不再需要客户端 API Key 配置

### 3. 更新环境变量

**环境变量名称变更**：
- ❌ 旧：`NEXT_PUBLIC_API_KEY`（客户端可访问，不安全）
- ✅ 新：`SILICONFLOW_API_KEY`（仅服务端可访问，安全）

**部署配置**：
- 本地开发：在 `.env.local` 中配置 `SILICONFLOW_API_KEY`
- EdgeOne Pages：在环境变量中配置 `SILICONFLOW_API_KEY`

---

## 验证安全性

### 如何验证 API Key 不会泄露？

1. **检查客户端代码**：
   ```bash
   # 搜索是否有 NEXT_PUBLIC_ 前缀的 API Key
   grep -r "NEXT_PUBLIC_API_KEY" src/
   # 应该返回空结果
   ```

2. **浏览器控制台测试**：
   - 打开网站
   - 打开开发者工具 → Network
   - 查看 `/api/analyze` 请求
   - 确认请求体中没有 API Key

3. **构建产物检查**：
   ```bash
   # 构建项目
   npm run build

   # 搜索构建产物中的 API Key
   grep -r "sk-" .next/static/
   # 应该返回空结果
   ```

---

## 部署更新

### EdgeOne Pages

1. 登录 EdgeOne Pages 控制台
2. 进入项目设置
3. 确认环境变量为 `SILICONFLOW_API_KEY`
4. 重新部署

### 本地开发

1. 更新 `.env.local` 文件：
   ```bash
   SILICONFLOW_API_KEY=sk-xxxxxxxxxxxxx
   ```
2. 重启开发服务器：
   ```bash
   npm run dev
   ```

---

## 常见问题

### Q: 为什么之前用 `NEXT_PUBLIC_API_KEY`？

A: `NEXT_PUBLIC_` 前缀的环境变量会被 Next.js 暴露给客户端。之前的架构设计有误，已修复。

### Q: 本地开发需要改动吗？

A: 只需修改 `.env.local` 中的变量名：
- 旧：`NEXT_PUBLIC_API_KEY`
- 新：`SILICONFLOW_API_KEY`

### Q: EdgeOne Pages 部署需要改动吗？

A: 只需确保环境变量名称为 `SILICONFLOW_API_KEY`（不是 `NEXT_PUBLIC_API_KEY`）

### Q: 如果忘记更新会怎样？

A:
- 如果使用 `NEXT_PUBLIC_API_KEY`：API Key 会暴露给客户端（不安全）
- 如果环境变量未配置：API 调用会失败，返回 500 错误

---

## 总结

✅ **安全问题已修复**
- API Key 不再暴露给客户端
- 所有第三方 API 调用都通过服务端 API Routes
- 符合安全最佳实践

✅ **功能保持不变**
- 截图分析功能正常
- 向量检索功能正常
- 流式响应正常

✅ **代码更简洁**
- 移除了不需要的 `config.ts`
- 客户端代码更简单，无需管理 API Key
- 环境变量配置更清晰

---

**修复日期**: 2026-03-26
**修复版本**: v1.0.1-security
