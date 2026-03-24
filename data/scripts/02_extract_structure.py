#!/usr/bin/env python3
"""
步骤 2: 提取结构化信息

功能：
- 提取 UI 元素定义（页面、面板、组件）
- 提取操作步骤（点击路径、操作说明）
- 提取性能指标定义（名称、阈值、单位）
- 提取故障排查规则（问题类型、诊断步骤）
"""

import re
import json
from pathlib import Path
from typing import Dict, List


class StructureExtractor:
    def __init__(self, parsed_data: List[Dict]):
        self.parsed = parsed_data

    def extract(self) -> Dict:
        """提取所有结构化信息"""
        print("  提取结构化信息...")

        result = {
            'ui_elements': self._extract_ui_elements(),
            'operations': self._extract_operations(),
            'metrics': self._extract_metrics(),
            'troubleshooting': self._extract_troubleshooting(),
            'pages': self._extract_page_structure()
        }

        print(f"    ✓ UI元素: {len(result['ui_elements'])}")
        print(f"    ✓ 操作步骤: {len(result['operations'])}")
        print(f"    ✓ 性能指标: {len(result['metrics'])}")
        print(f"    ✓ 故障排查: {len(result['troubleshooting'])}")

        return result

    def _extract_ui_elements(self) -> List[Dict]:
        """提取 UI 元素定义"""
        ui_elements = []

        for doc in self.parsed:
            for section in doc['sections']:
                content = section['content']
                title = section['title']

                # 识别 UI 面板定义
                if any(keyword in title for keyword in ['面板', 'Panel', '界面', '页面', '页签']):
                    # 提取面板名称
                    panel_match = re.search(r'([^、，,]+)[面板面板界页面页签]', title)
                    if panel_match:
                        panel_name = panel_match.group(1).strip()
                    else:
                        panel_name = title

                    # 提取描述（前 200 字符）
                    description = content[:200].strip()

                    ui_elements.append({
                        'type': 'panel',
                        'name': panel_name,
                        'page': self._infer_page_from_path(section['path']),
                        'description': description,
                        'path': section['path'],
                        'source': doc['filename']
                    })

        return ui_elements

    def _extract_operations(self) -> List[Dict]:
        """提取操作步骤"""
        operations = []

        for doc in self.parsed:
            for section in doc['sections']:
                content = section['content']

                # 识别操作步骤（编号列表）
                # 匹配 "1. xxx", "2. xxx" 等格式
                step_pattern = r'^\s*(\d+)[.、]\s*(.+)$'
                steps = []
                for line in content.split('\n'):
                    match = re.match(step_pattern, line)
                    if match:
                        steps.append({
                            'order': int(match.group(1)),
                            'description': match.group(2).strip()
                        })

                # 如果有 2 个以上的步骤，认为是操作指南
                if len(steps) >= 2:
                    operations.append({
                        'page': self._infer_page_from_path(section['path']),
                        'action': section['title'],
                        'steps': steps,
                        'path': section['path'],
                        'source': doc['filename']
                    })

        return operations

    def _extract_metrics(self) -> List[Dict]:
        """提取性能指标定义"""
        metrics = []

        # 指标定义模式
        # 示例：**AI Core 利用率**：整体计算资源利用率，建议 > 80%
        pattern1 = r'\*\*([^*]+?)\*\*[:：](.+?)建议\s*([<>]=?)\s*(\d+)([%单位]*)'

        for doc in self.parsed:
            for section in doc['sections']:
                content = section['content']

                # 查找指标定义
                matches = re.finditer(pattern1, content)
                for match in matches:
                    name = match.group(1).strip()
                    description = match.group(2).strip()
                    operator = match.group(3)
                    threshold = float(match.group(4))
                    unit = match.group(5) or '%'

                    # 推断问题类型
                    problem_type = self._infer_problem_type(name)

                    # 格式化阈值
                    thresholds = self._format_thresholds(operator, threshold)

                    metrics.append({
                        'name': name,
                        'description': description.strip(),
                        'unit': unit,
                        'operator': operator,
                        'threshold_value': threshold,
                        'thresholds': thresholds,
                        'problem_type': problem_type,
                        'source_section': section['path'],
                        'source_file': doc['filename']
                    })

        return metrics

    def _extract_troubleshooting(self) -> List[Dict]:
        """提取故障排查规则"""
        troubleshooting = []

        for doc in self.parsed:
            for section in doc['sections']:
                title = section['title'].lower()
                content = section['content']

                # 识别故障排查章节
                keywords = ['定位', '排查', '优化', '问题', '解决方案', '方法']
                if any(kw in title for kw in keywords):
                    # 提取问题类型关键词
                    problem_types = self._extract_problem_keywords(content)

                    # 提取解决方案步骤
                    step_pattern = r'^\s*(\d+)[.、]\s*(.+)$'
                    solution_steps = []
                    for line in content.split('\n'):
                        match = re.match(step_pattern, line)
                        if match:
                            solution_steps.append({
                                'order': int(match.group(1)),
                                'description': match.group(2).strip()
                            })

                    if problem_types or solution_steps:
                        troubleshooting.append({
                            'problem_types': problem_types,
                            'solution_steps': solution_steps,
                            'page': self._infer_page_from_path(section['path']),
                            'section': section['path'],
                            'content': content[:500],  # 前 500 字符用于 RAG
                            'source_file': doc['filename']
                        })

        return troubleshooting

    def _extract_page_structure(self) -> Dict[str, List]:
        """提取页面结构"""
        pages = {
            'Timeline': [],
            'Memory': [],
            'Operator': [],
            'Summary': [],
            'Communication': [],
            'General': []
        }

        for doc in self.parsed:
            for section in doc['sections']:
                page = self._infer_page_from_path(section['path'])
                if page in pages:
                    pages[page].append({
                        'title': section['title'],
                        'path': section['path'],
                        'source': doc['filename']
                    })

        return pages

    def _infer_page_from_path(self, path: str) -> str:
        """从章节路径推断页面类型"""
        path_lower = path.lower()
        if 'timeline' in path_lower or '时间线' in path_lower:
            return 'Timeline'
        elif 'memory' in path_lower or '内存' in path_lower:
            return 'Memory'
        elif 'operator' in path_lower or '算子' in path_lower:
            return 'Operator'
        elif 'summary' in path_lower or '概览' in path_lower:
            return 'Summary'
        elif 'communication' in path_lower or '通信' in path_lower:
            return 'Communication'
        else:
            return 'General'

    def _infer_problem_type(self, metric_name: str) -> str:
        """推断指标关联的问题类型"""
        name_lower = metric_name.lower()

        if '通信' in name_lower:
            return 'communication_issue'
        elif '内存' in name_lower or 'memory' in name_lower:
            return 'memory_pressure'
        elif 'host' in name_lower or 'cpu' in name_lower:
            return 'host_bound'
        elif 'ai core' in name_lower or '利用率' in name_lower or '算力' in name_lower:
            return 'compute_bound'
        else:
            return 'general'

    def _format_thresholds(self, operator: str, value: float) -> Dict:
        """格式化阈值范围"""
        if operator == '>':
            # 越大越好（如利用率）
            return {
                'good': f'>{value:.0f}',
                'warning': f'{value*0.8:.0f}-{value:.0f}',
                'critical': f'<{value*0.8:.0f}'
            }
        else:
            # 越小越好（如耗时）
            return {
                'good': f'<{value:.0f}',
                'warning': f'{value:.0f}-{value*1.5:.0f}',
                'critical': f'>{value*1.5:.0f}'
            }

    def _extract_problem_keywords(self, content: str) -> List[str]:
        """提取问题关键词"""
        keywords = []
        problem_patterns = {
            '通信瓶颈': ['通信', 'AllReduce', 'HaloReduce', '通信时间', '通信占比'],
            '内存问题': ['内存', 'HBM', '内存使用率', '内存溢出'],
            '计算瓶颈': ['AI Core', '利用率', '算力', '计算资源'],
            'Host瓶颈': ['Host', '主机', 'CPU', '下发'],
            '快慢卡': ['快慢卡', '卡间差异', '负载不均', '慢卡']
        }

        content_lower = content.lower()
        for problem, patterns in problem_patterns.items():
            if any(pattern.lower() in content_lower for pattern in patterns):
                keywords.append(problem)

        return keywords


def main():
    """主函数"""
    print("=" * 60)
    print("  步骤 2: 提取结构化信息")
    print("=" * 60)
    print()

    # 读取解析结果
    parsed_file = Path('../processed/parsed.json')
    if not parsed_file.exists():
        print(f"❌ 错误: {parsed_file} 不存在")
        print("   请先运行: python3 01_parse_markdown.py")
        return

    with open(parsed_file, 'r', encoding='utf-8') as f:
        parsed_data = json.load(f)

    print(f"已加载 {len(parsed_data)} 个文档的解析结果")
    print()

    # 提取结构化信息
    extractor = StructureExtractor(parsed_data)
    structured = extractor.extract()

    # 保存结果
    output_file = Path('../processed/structured.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(structured, f, ensure_ascii=False, indent=2)

    print()
    print(f"✓ 结构化信息已保存到: {output_file}")


if __name__ == '__main__':
    main()
