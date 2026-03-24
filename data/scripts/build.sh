#!/bin/bash
# MindStudio Insight 知识库一键构建脚本

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  MindStudio Insight 知识库构建工具${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROCESSED_DIR="$SCRIPT_DIR/../processed"
PUBLIC_DIR="$SCRIPT_DIR/../../public/knowledge"

# 检查 Python 3
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}❌ 错误: 未找到 python3${NC}"
    echo "   请先安装 Python 3.8 或更高版本"
    exit 1
fi

echo -e "${GREEN}✓ Python 3: $(python3 --version)${NC}"
echo ""

# 检查依赖
echo "检查 Python 依赖..."
if ! python3 -c "import dotenv" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  未安装 python-dotenv，正在安装...${NC}"
    pip3 install -q python-dotenv
fi

if ! python3 -c "import numpy" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  未安装 numpy，正在安装...${NC}"
    pip3 install -q numpy
fi

if ! python3 -c "import requests" 2>/dev/null; then
    echo -e "${YELLOW}⚠️  未安装 requests，正在安装...${NC}"
    pip3 install -q requests
fi

echo -e "${GREEN}✓ 所有依赖已安装${NC}"
echo ""

# 创建输出目录
mkdir -p "$PROCESSED_DIR"
mkdir -p "$PUBLIC_DIR"

# 步骤 1: 解析 Markdown
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}步骤 1/5: 解析 Markdown 文档${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
python3 "$SCRIPT_DIR/01_parse_markdown.py"
echo ""

# 步骤 2: 提取结构化信息
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}步骤 2/5: 提取结构化信息${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
python3 "$SCRIPT_DIR/02_extract_structure.py"
echo ""

# 步骤 3: 分块
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}步骤 3/5: 语义分块${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
python3 "$SCRIPT_DIR/03_split_chunks.py"
echo ""

# 步骤 4: 生成向量
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}步骤 4/5: 生成向量（硅基流动 BGE-M3）${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
python3 "$SCRIPT_DIR/04_generate_embeddings.py"
echo ""

# 步骤 5: 构建索引
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}步骤 5/5: 构建索引${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
python3 "$SCRIPT_DIR/05_build_index.py"
echo ""

# 复制到 public 目录
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "复制到 public 目录"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
cp "$PROCESSED_DIR/chunks.json" "$PUBLIC_DIR/"
cp "$PROCESSED_DIR/embeddings.npy" "$PUBLIC_DIR/"
cp "$PROCESSED_DIR/metadata.json" "$PUBLIC_DIR/"
echo -e "${GREEN}✓ 文件已复制到: $PUBLIC_DIR${NC}"
echo ""

# 生成统计信息
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo "构建完成！"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}✅ 知识库已就绪！${NC}"
echo ""

python3 - <<EOF
import json
import numpy as np

chunks = json.load(open('$PROCESSED_DIR/chunks.json'))
embeddings = np.load('$PROCESSED_DIR/embeddings.npy', allow_pickle=True)
metadata = json.load(open('$PROCESSED_DIR/metadata.json'))

print("📊 知识库统计：")
print(f"  • 知识块数量: {len(chunks)}")
print(f"  • 向量维度: {embeddings.shape[1]}")
print(f"  • 文件大小: {np.load('$PROCESSED_DIR/embeddings.npy').nbytes / 1024 / 1024:.2f} MB")
print()

print("📁 输出文件：")
print("  • chunks.json - 知识块内容")
print("  • embeddings.npy - 向量索引")
print("  • metadata.json - 元数据索引")
print()

print("📊 知识块类型分布：")
for type_name, ids in sorted(metadata['metadata_index']['by_type'].items()):
    print(f"  • {type_name}: {len(ids)} 个")
EOF

echo ""
echo -e "${BLUE}下一步:${NC}"
echo "  1. 将知识库文件部署到 public/knowledge/ 目录"
echo "  2. 在前端代码中加载知识库"
echo "  3. 实现向量检索功能"
echo ""
