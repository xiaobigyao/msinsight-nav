# EdgeOne Pages 部署指南

本项目已配置好 EdgeOne Pages 部署，以下是详细步骤。

## 📋 前置要求

- GitHub 仓库：https://github.com/xiaobigyao/msinsight-nav
- SiliconFlow API Key：从 https://cloud.siliconflow.cn/account/ak 获取

## 🚀 部署步骤

### 1. 访问 EdgeOne Pages

打开浏览器访问：https://pages.edgeone.ai

### 2. 注册/登录

使用腾讯云账号登录，如果没有账号需要先注册。

### 3. 创建新项目

1. 点击「创建项目」或「新建应用」
2. 选择「从 Git 仓库导入」
3. 授权 GitHub 访问权限

### 4. 导入 GitHub 仓库

1. 在仓库列表中选择 `xiaobigyao/msinsight-nav`
2. EdgeOne 会自动识别为 Next.js 项目

### 5. 配置构建设置

EdgeOne 通常会自动检测，如果没有，手动设置：

- **构建命令**：`npm run build`
- **输出目录**：`.next`
- **安装命令**：`npm install`

### 6. 配置环境变量（重要！）

在项目的「设置」→「环境变量」中添加：

```
SILICONFLOW_API_KEY=sk-xxxxxxxxxxxxx
```

> 替换 `sk-xxxxxxxxxxxxx` 为你从 SiliconFlow 获取的真实 API Key

**安全说明**：
- ✅ `SILICONFLOW_API_KEY` 只在服务端使用，不会暴露给客户端
- ✅ 所有 API 调用都通过 API Routes（服务端）转发
- ✅ 客户端代码无法访问此 API Key，完全安全！

### 7. 开始部署

点击「部署」按钮，等待构建完成（通常 1-2 分钟）

### 8. 访问应用

部署成功后的访问地址：

**生产环境**：https://msinsight-nav-g9i9uj3g1g.zh-cn.edgeone.cool

你会获得一个类似 `xxx.pages.edgeone.ai` 或 `xxx.zh-cn.edgeone.cool` 的域名。

## 🔧 常见问题

### 构建失败？

检查以下几点：
1. Node.js 版本是否匹配（建议 18.x 或 20.x）
2. 环境变量是否正确配置
3. 查看构建日志中的错误信息

### API 调用失败？

确认：
1. `SILICONFLOW_API_KEY` 已在环境变量中配置
2. API Key 格式正确（以 `sk-` 开头）
3. API Key 有足够的额度
4. 环境变量名称是 `SILICONFLOW_API_KEY`（不是 `NEXT_PUBLIC_API_KEY`）

### 如何更新代码？

只需要 `git push` 到 GitHub 仓库，EdgeOne 会自动触发重新部署。

## 📊 监控和日志

在 EdgeOne 控制台可以查看：
- 访问日志
- 错误日志
- 性能指标
- 部署历史

## 🎁 免费额度

EdgeOne Pages 提供长期免费的版本，包括：
- 无限次 Git 部署
- 基础流量额度
- 免费 SSL 证书
- 自动 HTTPS

对于个人项目和小流量应用完全够用！

## 📚 相关文档

- [EdgeOne Pages 官方文档](https://pages.edgeone.ai/zh/document/framework-nextjs)
- [Next.js 部署指南](https://pages.edgeone.ai/zh/resources/deploy-nextjs-project-to-pages)
- [项目 GitHub 仓库](https://github.com/xiaobigyao/msinsight-nav)
