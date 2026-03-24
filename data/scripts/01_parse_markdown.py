#!/usr/bin/env python3
"""
步骤 1: 解析 Markdown 文档

功能：
- 提取文档结构（标题层级）
- 提取图片引用
- 提取表格
- 提取代码块
"""

import re
import json
from pathlib import Path
from typing import Dict, List


class MarkdownParser:
    def __init__(self, filepath: str):
        self.filepath = Path(filepath)
        if not self.filepath.exists():
            raise FileNotFoundError(f"文件不存在: {filepath}")

        self.content = self.filepath.read_text(encoding='utf-8')

    def parse(self) -> Dict:
        """解析 Markdown 文档"""
        print(f"  正在解析: {self.filepath.name}")

        # 提取文档结构
        sections = self._extract_sections()

        # 提取图片
        images = self._extract_images()

        # 提取表格（简化版，只记录表格位置）
        tables = self._extract_table_positions()

        # 提取代码块
        code_blocks = self._extract_code_blocks()

        result = {
            'filename': self.filepath.name,
            'filepath': str(self.filepath),
            'title': sections[0]['title'] if sections else self.filepath.stem,
            'sections': sections,
            'images': images,
            'tables': tables,
            'code_blocks': code_blocks,
            'total_length': len(self.content)
        }

        print(f"    ✓ 章节: {len(sections)}, 图片: {len(images)}, 表格: {len(tables)}, 代码块: {len(code_blocks)}")

        return result

    def _extract_sections(self) -> List[Dict]:
        """提取章节结构"""
        sections = []

        # 特殊处理：跳过文档开头的元数据部分
        # 查找 "目 录" 或 "目录" 作为真正内容的开始
        lines = self.content.split('\n')
        content_start = 0

        for i, line in enumerate(lines):
            if re.search(r'目\s*录', line) or '目录' in line or 'CONTENTS' in line.upper():
                content_start = i
                break

        # 使用栈结构处理嵌套章节
        stack = [{'level': 0, 'title': '根目录', 'content': [], 'path': '', 'subsections': []}]

        # 跳过元数据部分
        for line in lines[content_start:]:
            # 匹配 Markdown 标题
            header_match = re.match(r'^(#{1,6})\s+(.+)$', line)
            if header_match:
                level = len(header_match.group(1))
                title = header_match.group(2).strip()

                # 跳过太短的标题（通常是噪音）
                if len(title) < 2:
                    continue

                # 跳过已知的元数据标题
                if title in ['商标声明', '注意', '安全声明', '目 录', '目录', '版权所有']:
                    continue

                # 创建新章节
                section = {
                    'level': level,
                    'title': title,
                    'content': [],
                    'path': '',
                    'subsections': []
                }

                # 找到父章节
                while stack and stack[-1]['level'] >= level:
                    stack.pop()

                if stack:
                    parent = stack[-1]
                    # 生成完整路径
                    section['path'] = f"{parent['path']} > {title}" if parent['path'] else title
                    parent['subsections'].append(section)
                    stack.append(section)
                else:
                    # 根级别
                    section['path'] = title
                    sections.append(section)
                    stack.append(section)
            else:
                # 添加内容到当前章节
                if stack:
                    stack[-1]['content'].append(line)

        # 如果没有找到任何章节，使用备选方案：按二级标题分割
        if not sections:
            sections = self._fallback_extract_sections(lines, content_start)

        # 扁平化章节结构
        return self._flatten_sections(sections)

    def _flatten_sections(self, sections: List[Dict]) -> List[Dict]:
        """扁平化章节结构，保留完整路径"""
        result = []

        def flatten_recursive(sections_list, parent_path=''):
            for section in sections_list:
                # 生成完整路径
                path = section['path']

                # 添加到结果
                result.append({
                    'title': section['title'],
                    'path': path,
                    'level': section['level'],
                    'content': '\n'.join(section['content'])
                })

                # 递归处理子章节
                if section.get('subsections'):
                    flatten_recursive(section['subsections'], path)

        flatten_recursive(sections)
        return result

    def _fallback_extract_sections(self, lines: List[str], start_idx: int) -> List[Dict]:
        """备选方案：当无法识别标题层级时，按段落分割"""
        sections = []
        current_section = {
            'level': 1,
            'title': '文档内容',
            'content': [],
            'path': '文档内容',
            'subsections': []
        }

        for line in lines[start_idx:]:
            # 如果是标题行，开始新章节
            if re.match(r'^#+\s+', line):
                # 保存当前章节
                if any(current_section['content']):  # 只保存有内容的章节
                    sections.append(current_section.copy())

                # 开始新章节
                title_match = re.match(r'^#+\s+(.+)$', line)
                title = title_match.group(1).strip() if title_match else '新章节'

                current_section = {
                    'level': 1,
                    'title': title,
                    'content': [],
                    'path': title,
                    'subsections': []
                }
            else:
                current_section['content'].append(line)

        # 保存最后一个章节
        if any(current_section['content']):
            sections.append(current_section)

        return sections

    def _extract_images(self) -> List[Dict]:
        """提取图片引用"""
        # 匹配 Markdown 图片语法
        pattern = r'!\[(.*?)\]\((.*?)\)'
        matches = re.finditer(pattern, self.content)

        images = []
        for match in matches:
            images.append({
                'alt': match.group(1).strip(),
                'url': match.group(2).strip()
            })

        return images

    def _extract_table_positions(self) -> List[Dict]:
        """提取表格位置（简化版）"""
        tables = []

        # 查找表格标记（| 符号）
        lines = self.content.split('\n')
        i = 0
        while i < len(lines):
            line = lines[i]

            # 检查是否是表格行（包含 |）
            if '|' in line and line.strip().startswith('|'):
                # 找到表格的起始和结束
                table_start = i
                table_lines = [line]

                # 向下查找表格的结束
                j = i + 1
                while j < len(lines) and '|' in lines[j]:
                    table_lines.append(lines[j])
                    j += 1

                tables.append({
                    'start_line': table_start,
                    'end_line': j - 1,
                    'rows': len(table_lines)
                })

                i = j
                continue

            i += 1

        return tables

    def _extract_code_blocks(self) -> List[Dict]:
        """提取代码块"""
        # 匹配 ``` 代码块
        pattern = r'```(\w*)\n(.*?)```'
        matches = re.finditer(pattern, self.content, re.DOTALL)

        code_blocks = []
        for match in matches:
            language = match.group(1) or 'text'
            code = match.group(2).strip()

            code_blocks.append({
                'language': language,
                'code': code,
                'length': len(code)
            })

        return code_blocks


def main():
    """主函数"""
    print("=" * 60)
    print("  步骤 1: 解析 Markdown 文档")
    print("=" * 60)
    print()

    # 查找原始文档
    raw_dir = Path('../raw')
    if not raw_dir.exists():
        print(f"❌ 错误: raw 目录不存在: {raw_dir.absolute()}")
        print("   请确保 data/raw/ 目录下有 Markdown 文档")
        return

    markdown_files = list(raw_dir.glob('*.md'))
    if not markdown_files:
        print(f"❌ 错误: {raw_dir} 目录下没有 .md 文件")
        return

    print(f"找到 {len(markdown_files)} 个 Markdown 文件")
    print()

    # 解析所有文档
    all_results = []
    for md_file in markdown_files:
        try:
            parser = MarkdownParser(str(md_file))
            result = parser.parse()
            all_results.append(result)
        except Exception as e:
            print(f"  ❌ 解析失败 {md_file.name}: {e}")

    # 保存结果
    output_dir = Path('../processed')
    output_dir.mkdir(exist_ok=True)

    output_file = output_dir / 'parsed.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)

    print()
    print(f"✓ 解析完成！结果已保存到: {output_file}")
    print()

    # 统计信息
    total_sections = sum(len(r['sections']) for r in all_results)
    total_images = sum(len(r['images']) for r in all_results)
    total_tables = sum(len(r['tables']) for r in all_results)
    total_code_blocks = sum(len(r['code_blocks']) for r in all_results)

    print("统计信息:")
    print(f"  • 文档数: {len(all_results)}")
    print(f"  • 章节数: {total_sections}")
    print(f"  • 图片数: {total_images}")
    print(f"  • 表格数: {total_tables}")
    print(f"  • 代码块数: {total_code_blocks}")


if __name__ == '__main__':
    main()
