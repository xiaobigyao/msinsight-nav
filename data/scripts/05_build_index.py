#!/usr/bin/env python3
"""
步骤 5: 构建索引

功能：
- 元数据索引（按类型、页面、来源）
- 关键词倒排索引
- 页面类型索引
- 问题类型索引
"""

import json
import numpy as np
from pathlib import Path
from typing import Dict, List
from collections import defaultdict


class IndexBuilder:
    def __init__(self, chunks: List[Dict]):
        self.chunks = chunks

    def build(self) -> Dict:
        """构建所有索引"""
        print("  构建索引...")

        result = {
            'metadata_index': self._build_metadata_index(),
            'keyword_index': self._build_keyword_index(),
            'page_type_index': self._build_page_type_index(),
            'problem_type_index': self._build_problem_type_index()
        }

        print(f"    ✓ 元数据索引")
        print(f"    ✓ 关键词索引")
        print(f"    ✓ 页面类型索引")
        print(f"    ✓ 问题类型索引")

        return result

    def _build_metadata_index(self) -> Dict:
        """按元数据索引"""
        index = {
            'by_type': defaultdict(list),
            'by_source': defaultdict(list),
            'by_page': defaultdict(list)
        }

        for chunk in self.chunks:
            chunk_id = chunk['id']

            # 按类型索引
            chunk_type = chunk['type']
            index['by_type'][chunk_type].append(chunk_id)

            # 按来源索引
            source = chunk['source']
            index['by_source'][source].append(chunk_id)

            # 按页面索引
            page = chunk['metadata'].get('page', 'General')
            index['by_page'][page].append(chunk_id)

        # 转换为普通 dict
        return {
            'by_type': dict(index['by_type']),
            'by_source': dict(index['by_source']),
            'by_page': dict(index['by_page'])
        }

    def _build_keyword_index(self) -> Dict:
        """关键词倒排索引"""
        index = defaultdict(list)

        for chunk in self.chunks:
            chunk_id = chunk['id']
            keywords = chunk['metadata'].get('keywords', [])

            for keyword in keywords:
                index[keyword].append(chunk_id)

        return dict(index)

    def _build_page_type_index(self) -> Dict:
        """页面类型索引"""
        index = {
            'Timeline': [],
            'Memory': [],
            'Operator': [],
            'Summary': [],
            'Communication': [],
            'General': []
        }

        for chunk in self.chunks:
            page = chunk['metadata'].get('page', 'General')
            if page in index:
                index[page].append(chunk['id'])
            else:
                index['General'].append(chunk['id'])

        return index

    def _build_problem_type_index(self) -> Dict:
        """问题类型索引"""
        index = {
            'communication_issue': [],
            'memory_pressure': [],
            'compute_bound': [],
            'host_bound': [],
            'fast_slow_card': [],
            'general': []
        }

        for chunk in self.chunks:
            # 从 metadata 中获取 problem_type
            problem_type = chunk['metadata'].get('problem_type')

            if problem_type and problem_type in index:
                index[problem_type].append(chunk['id'])
            else:
                # 检查 content 中的关键词
                content = chunk['content'].lower()
                if '通信' in content or 'communication' in content:
                    index['communication_issue'].append(chunk['id'])
                elif '内存' in content or 'memory' in content:
                    index['memory_pressure'].append(chunk['id'])
                elif 'host' in content or 'cpu' in content:
                    index['host_bound'].append(chunk['id'])
                elif 'ai core' in content or '利用率' in content:
                    index['compute_bound'].append(chunk['id'])

        return index


def main():
    """主函数"""
    print("=" * 60)
    print("  步骤 5: 构建索引")
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

    # 构建索引
    builder = IndexBuilder(chunks)
    index = builder.build()

    # 保存
    output_file = Path('../processed/metadata.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)

    print()
    print(f"✓ 索引已保存到: {output_file}")
    print()

    # 显示统计信息
    print("索引统计:")
    print()
    print("  按类型:")
    for type_name, ids in sorted(index['metadata_index']['by_type'].items()):
        print(f"    • {type_name}: {len(ids)} 个")

    print()
    print("  按页面:")
    for page, ids in sorted(index['page_type_index'].items()):
        if ids:
            print(f"    • {page}: {len(ids)} 个")

    print()
    print("  按问题类型:")
    for problem_type, ids in sorted(index['problem_type_index'].items()):
        if ids:
            print(f"    • {problem_type}: {len(ids)} 个")

    print()
    print("  关键词（前 10 个）:")
    keyword_items = sorted(index['keyword_index'].items(), key=lambda x: len(x[1]), reverse=True)
    for keyword, ids in keyword_items[:10]:
        print(f"    • '{keyword}': {len(ids)} 个")


if __name__ == '__main__':
    main()
