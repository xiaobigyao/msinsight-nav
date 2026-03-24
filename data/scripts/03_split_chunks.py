#!/usr/bin/env python3
"""
步骤 3: 语义分块

功能：
- 按章节和语义边界分块
- 每块 200-500 tokens
- 保持上下文完整性
- 为结构化数据创建独立 chunk
"""

import json
from pathlib import Path
from typing import List, Dict


class ChunkSplitter:
    def __init__(self, parsed_data: List[Dict], structured_data: Dict):
        self.parsed = parsed_data
        self.structured = structured_data

    def split(self, chunk_size: int = 400, overlap: int = 100) -> List[Dict]:
        """分割成语义块"""
        print(f"  分割知识块 (目标大小: {chunk_size} tokens, 重叠: {overlap})...")

        chunks = []

        # 1. 按章节分块
        for doc in self.parsed:
            for section in doc['sections']:
                section_chunks = self._split_section(
                    section,
                    chunk_size,
                    overlap,
                    doc['filename']
                )
                chunks.extend(section_chunks)

        print(f"    ✓ 章节分块: {len(chunks)} 个")

        # 2. 添加结构化数据作为独立 chunk
        structured_chunks = self._create_structured_chunks()
        chunks.extend(structured_chunks)

        print(f"    ✓ 结构化分块: {len(structured_chunks)} 个")
        print(f"  ✓ 总计: {len(chunks)} 个知识块")

        return chunks

    def _split_section(self, section: Dict, chunk_size: int, overlap: int, source_file: str) -> List[Dict]:
        """分割单个章节"""
        chunks = []
        content = section['content']

        # 如果内容太短，直接作为一个 chunk
        if len(content) <= chunk_size:
            return [self._create_chunk(section, content, source_file, 0)]

        # 按句子分割
        sentences = self._split_sentences(content)

        if not sentences:
            return []

        # 滑动窗口分块
        current_chunk = []
        current_length = 0
        chunk_index = 0

        for sentence in sentences:
            sentence_length = len(sentence)

            if current_length + sentence_length > chunk_size and current_chunk:
                # 保存当前块
                chunk_content = ''.join(current_chunk)
                chunks.append(self._create_chunk(section, chunk_content, source_file, chunk_index))
                chunk_index += 1

                # 创建重叠块
                overlap_text = self._get_overlap_text(current_chunk, overlap)
                current_chunk = [overlap_text, sentence]
                current_length = len(overlap_text) + sentence_length
            else:
                current_chunk.append(sentence)
                current_length += sentence_length

        # 最后一块
        if current_chunk:
            chunk_content = ''.join(current_chunk)
            chunks.append(self._create_chunk(section, chunk_content, source_file, chunk_index))

        return chunks

    def _create_chunk(self, section: Dict, content: str, source_file: str, index: int) -> Dict:
        """创建 chunk 元数据"""
        # 清理内容
        content = content.strip()

        return {
            'id': f"chunk_{source_file}_{section['path']}_{index}".replace(' ', '_').replace('>', '_'),
            'content': content,
            'source': source_file,
            'section_title': section['title'],
            'section_path': section['path'],
            'section_level': section['level'],
            'type': self._infer_chunk_type(section['title'], content),
            'metadata': {
                'page': self._infer_page(section['path']),
                'keywords': self._extract_keywords(content),
                'length': len(content)
            }
        }

    def _split_sentences(self, text: str) -> List[str]:
        """按句子分割"""
        sentences = []
        current = []

        for line in text.split('\n'):
            line = line.strip()
            if not line:
                if current:
                    sentences.append(' '.join(current))
                    current = []
                continue

            # 检查是否是句子结束
            if line.endswith(('。', '！', '？', '.', '!', '?')):
                current.append(line)
                sentences.append(' '.join(current))
                current = []
            else:
                current.append(line)

        # 处理最后一句
        if current:
            sentences.append(' '.join(current))

        return sentences

    def _get_overlap_text(self, chunk: List[str], overlap: int) -> str:
        """获取重叠文本"""
        if overlap <= 0:
            return ''

        # 从最后几句获取重叠文本
        overlap_chars = 0
        overlap_parts = []

        for sentence in reversed(chunk):
            if overlap_chars + len(sentence) > overlap:
                break
            overlap_parts.insert(0, sentence)
            overlap_chars += len(sentence)

        return ' '.join(overlap_parts) if overlap_parts else ''

    def _create_structured_chunks(self) -> List[Dict]:
        """为结构化数据创建独立 chunk"""
        chunks = []
        chunk_id = len(self.parsed)  # 从一个较大的 ID 开始

        # 1. 性能指标定义
        for metric in self.structured['metrics']:
            content = f"性能指标：{metric['name']}\n描述：{metric['description']}\n正常范围：{metric['thresholds']['good']}"

            chunks.append({
                'id': f"metric_{metric['name']}_{chunk_id}",
                'content': content,
                'source': 'structured',
                'section_title': metric['name'],
                'section_path': metric['source_section'],
                'type': 'metric_definition',
                'metadata': {
                    'metric_name': metric['name'],
                    'problem_type': metric['problem_type'],
                    'page': self._infer_page(metric['source_section']),
                    'keywords': [metric['name']],
                    'length': len(content)
                }
            })
            chunk_id += 1

        # 2. 故障排查规则
        for ts in self.structured['troubleshooting']:
            steps_text = '\n'.join([f"{s['order']}. {s['description']}" for s in ts['solution_steps']])
            content = f"问题类型：{', '.join(ts['problem_types'])}\n解决方案：\n{steps_text}"

            chunks.append({
                'id': f"troubleshooting_{chunk_id}",
                'content': content,
                'source': 'structured',
                'section_title': ts['section'],
                'section_path': ts['section'],
                'type': 'troubleshooting_guide',
                'metadata': {
                    'problem_types': ts['problem_types'],
                    'page': ts['page'],
                    'keywords': ts['problem_types'],
                    'length': len(content)
                }
            })
            chunk_id += 1

        # 3. UI 元素
        for ui in self.structured['ui_elements']:
            content = f"UI 元素：{ui['name']}\n类型：{ui['type']}\n所在页面：{ui['page']}\n说明：{ui['description']}"

            chunks.append({
                'id': f"ui_element_{chunk_id}",
                'content': content,
                'source': 'structured',
                'section_title': ui['name'],
                'section_path': ui['path'],
                'type': 'ui_element',
                'metadata': {
                    'ui_name': ui['name'],
                    'ui_type': ui['type'],
                    'page': ui['page'],
                    'keywords': [ui['name'], ui['type']],
                    'length': len(content)
                }
            })
            chunk_id += 1

        return chunks

    def _infer_chunk_type(self, title: str, content: str) -> str:
        """推断 chunk 类型"""
        title_lower = title.lower()
        if '操作' in title_lower or '使用' in title_lower or '步骤' in title_lower:
            return 'operation_guide'
        elif '性能' in title_lower or '指标' in title_lower or '优化' in title_lower:
            return 'performance_metric'
        elif '问题' in title_lower or '定位' in title_lower or '排查' in title_lower:
            return 'troubleshooting'
        else:
            return 'general_description'

    def _infer_page(self, path: str) -> str:
        """推断页面类型"""
        path_lower = path.lower()
        for page in ['Timeline', 'Memory', 'Operator', 'Summary', 'Communication']:
            page_lower = page.lower()
            if page_lower in path_lower or \
               (page == 'Timeline' and '时间线' in path_lower) or \
               (page == 'Memory' and '内存' in path_lower) or \
               (page == 'Operator' and '算子' in path_lower) or \
               (page == 'Summary' and ('概览' in path_lower or '总结' in path_lower)) or \
               (page == 'Communication' and '通信' in path_lower):
                return page
        return 'General'

    def _extract_keywords(self, content: str) -> List[str]:
        """提取关键词"""
        keywords = []
        keyword_list = [
            'AI Core', '通信', '内存', 'Host', '算子',
            'Timeline', '性能', '优化', '瓶颈', '利用率'
        ]

        content_lower = content.lower()
        for kw in keyword_list:
            if kw.lower() in content_lower:
                keywords.append(kw)

        return keywords


def main():
    """主函数"""
    print("=" * 60)
    print("  步骤 3: 语义分块")
    print("=" * 60)
    print()

    # 读取解析结果
    parsed_file = Path('../processed/parsed.json')
    structured_file = Path('../processed/structured.json')

    if not parsed_file.exists():
        print(f"❌ 错误: {parsed_file} 不存在")
        print("   请先运行: python3 01_parse_markdown.py")
        return

    if not structured_file.exists():
        print(f"❌ 错误: {structured_file} 不存在")
        print("   请先运行: python3 02_extract_structure.py")
        return

    with open(parsed_file, 'r', encoding='utf-8') as f:
        parsed_data = json.load(f)

    with open(structured_file, 'r', encoding='utf-8') as f:
        structured_data = json.load(f)

    # 分块
    splitter = ChunkSplitter(parsed_data, structured_data)
    chunks = splitter.split()

    # 保存
    output_file = Path('../processed/chunks.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(chunks, f, ensure_ascii=False, indent=2)

    print()
    print(f"✓ 知识块已保存到: {output_file}")
    print()

    # 统计
    type_counts = {}
    for chunk in chunks:
        t = chunk['type']
        type_counts[t] = type_counts.get(t, 0) + 1

    print("分块类型分布:")
    for t, count in sorted(type_counts.items()):
        print(f"  • {t}: {count} 个")


if __name__ == '__main__':
    main()
