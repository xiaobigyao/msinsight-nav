# MindStudio Insight 知识库构建工具

这个目录包含用于构建知识库的 Python 脚本。

## 文件结构

```
data/scripts/
├── build.sh                    # 一键构建脚本
├── 01_parse_markdown.py        # 步骤 1: 解析 Markdown 文档
├── 02_extract_structure.py     # 步骤 2: 提取结构化信息
├── 03_split_chunks.py          # 步骤 3: 语义分块
├── 04_generate_embeddings.py   # 步骤 4: 生成向量（调用硅基流动 API）
├── 05_build_index.py           # 步骤 5: 构建索引
├── requirements.txt            # Python 依赖
└── .env.example                # 环境变量示例
```

## 快速开始

### 1. 安装依赖

```bash
cd data/scripts
pip3 install -r requirements.txt
```

### 2. 配置 API Key

创建 `.env` 文件并配置硅基流动 API Key：

```bash
cp .env.example .env
# 编辑 .env 文件，填入你的 SILICONFLOW_API_KEY
```

获取 API Key：https://cloud.siliconflow.cn/account/ak

### 3. 运行构建

```bash
./build.sh
```

或者手动运行各个步骤：

```bash
python3 01_parse_markdown.py
python3 02_extract_structure.py
python3 03_split_chunks.py
python3 04_generate_embeddings.py
python3 05_build_index.py
```

## 输出文件

构建完成后，会在以下目录生成文件：

```
data/processed/
├── parsed.json         # 解析后的文档
├── structured.json     # 结构化数据
├── chunks.json         # 知识块
├── embeddings.npy      # 向量索引
└── metadata.json       # 元数据索引

public/knowledge/       # 前端使用的文件
├── chunks.json
├── embeddings.npy
└── metadata.json
```

## 脚本说明

### 01_parse_markdown.py

解析 `data/raw/` 目录下的 Markdown 文档，提取：
- 章节结构
- 图片引用
- 表格位置
- 代码块

### 02_extract_structure.py

从解析结果中提取结构化信息：
- UI 元素定义
- 操作步骤
- 性能指标定义
- 故障排查规则

### 03_split_chunks.py

将文档内容分割成语义块：
- 按章节分块
- 每块约 400 tokens
- 保持上下文完整性
- 为结构化数据创建独立 chunk

### 04_generate_embeddings.py

调用硅基流动 BGE-M3 API 生成向量：
- 1024 维向量
- L2 归一化
- 支持多语言

### 05_build_index.py

构建各种索引：
- 元数据索引（按类型、页面、来源）
- 关键词倒排索引
- 页面类型索引
- 问题类型索引

## 环境要求

- Python 3.8+
- 硅基流动 API Key

## 成本估算

使用硅基流动 BGE-M3：
- 约 ¥0.00002/次
- 构建约 350 个知识块 ≈ ¥0.007

## 故障排查

### API Key 无效

```
❌ API Key 无效，请检查 SILICONFLOW_API_KEY
```

解决方法：
1. 检查 `.env` 文件是否存在
2. 确认 API Key 是否正确
3. 访问 https://cloud.siliconflow.cn/account/ak 获取新的 API Key

### 请求过快

```
⚠️ 请求过快，等待 1 秒后重试...
```

脚本会自动等待并重试，无需手动处理。

### 依赖缺失

```
ModuleNotFoundError: No module named 'xxx'
```

解决方法：
```bash
pip3 install -r requirements.txt
```
