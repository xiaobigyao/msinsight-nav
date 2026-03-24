#!/usr/bin/env python3
"""
步骤 4: 生成向量

功能：
- 调用硅基流动 BGE-M3 API 生成向量
- 1024 维，支持多语言
- L2 归一化
"""

import json
import requests
import numpy as np
import os
import time
from pathlib import Path
from typing import List
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

SILICONFLOW_API_KEY = os.getenv('SILICONFLOW_API_KEY')
if not SILICONFLOW_API_KEY:
    print("❌ 错误: 未找到 SILICONFLOW_API_KEY")
    print()
    print("请设置环境变量或创建 .env 文件：")
    print("  SILICONFLOW_API_KEY=your_api_key_here")
    print()
    print("获取 API Key: https://cloud.siliconflow.cn/account/ak")
    exit(1)


class EmbeddingGenerator:
    def __init__(self):
        self.api_url = 'https://api.siliconflow.cn/v1/embeddings'
        self.model = 'BAAI/bge-m3'  # BGE-M3 模型，1024 维

    def generate(self, texts: List[str]) -> np.ndarray:
        """批量生成向量"""
        print(f"  使用模型: {self.model}")
        print(f"  向量维度: 1024")
        print()
        print(f"  调用硅基流动 API 生成 {len(texts)} 个向量...")

        embeddings = []
        total = len(texts)

        for i, text in enumerate(texts, 1):
            try:
                # 调用硅基流动 API
                response = requests.post(
                    self.api_url,
                    headers={
                        'Authorization': f'Bearer {SILICONFLOW_API_KEY}',
                        'Content-Type': 'application/json'
                    },
                    json={
                        'model': self.model,
                        'input': text,
                        'encoding_format': 'float'
                    },
                    timeout=30
                )

                if response.status_code == 200:
                    result = response.json()
                    embedding = result['data'][0]['embedding']
                    embeddings.append(embedding)

                    # 显示进度
                    if i % 10 == 0 or i == total:
                        print(f"    进度: {i}/{total} ({i*100//total}%)")

                    # 避免请求过快
                    if i < total:
                        time.sleep(0.05)

                else:
                    print(f"    ⚠️  第 {i} 个文本失败: HTTP {response.status_code}")
                    if response.status_code == 401:
                        print("    ❌ API Key 无效，请检查 SILICONFLOW_API_KEY")
                        raise Exception("Invalid API Key")
                    elif response.status_code == 429:
                        print("    ⚠️  请求过快，等待 1 秒后重试...")
                        time.sleep(1)
                        # 使用零向量作为 fallback
                        embeddings.append([0.0] * 1024)
                    else:
                        print(f"    响应: {response.text}")
                        embeddings.append([0.0] * 1024)

            except Exception as e:
                print(f"    ⚠️  第 {i} 个文本出错: {e}")
                embeddings.append([0.0] * 1024)

        # 转换为 numpy 数组
        embeddings_array = np.array(embeddings, dtype=np.float32)

        # L2 归一化（便于余弦相似度计算）
        print()
        print("  L2 归一化...")
        norms = np.linalg.norm(embeddings_array, axis=1, keepdims=True)
        embeddings_array = embeddings_array / (norms + 1e-8)

        return embeddings_array


def main():
    """主函数"""
    print("=" * 60)
    print("  步骤 4: 生成向量（硅基流动 BGE-M3）")
    print("=" * 60)
    print()

    # 读取 chunks
    chunks_file = Path('../processed/chunks.json')
    if not chunks_file.exists():
        print(f"❌ 错误: {chunks_file} 不存在")
        print("   请先运行: python3 03_split_chunks.py")
        return

    with open(chunks_file, 'r', encoding='utf-8') as f:
        chunks = json.load(f)

    print(f"已加载 {len(chunks)} 个知识块")
    print()

    if not chunks:
        print("❌ 错误: 没有知识块可处理")
        print("   请检查前面的步骤是否正确运行")
        return

    # 提取文本内容
    texts = [chunk['content'] for chunk in chunks]

    # 生成向量
    generator = EmbeddingGenerator()
    embeddings = generator.generate(texts)

    # 保存
    output_dir = Path('../processed')
    output_file = output_dir / 'embeddings.npy'

    np.save(output_file, embeddings)

    print()
    print(f"✓ 向量已保存: {output_file}")
    print()
    print(f"  形状: {embeddings.shape}")
    print(f"  大小: {output_file.stat().st_size / 1024 / 1024:.2f} MB")
    print()

    # 验证向量
    print("验证向量:")
    print(f"  • 维度: {embeddings.shape[1]}")
    print(f"  • 范围: [{embeddings.min():.4f}, {embeddings.max():.4f}]")
    print(f"  • 均值: {embeddings.mean():.4f}")
    print(f"  • 标准差: {embeddings.std():.4f}")

    # 验证归一化
    norms = np.linalg.norm(embeddings, axis=1)
    print(f"  • L2 范数: [{norms.min():.6f}, {norms.max():.6f}] (应接近 1.0)")


if __name__ == '__main__':
    main()
