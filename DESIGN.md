# MindStudio Insight 智能助手 - 技术设计文档

## 项目概述

### 目标
开发一个智能助手工具，帮助用户使用 MindStudio Insight 进行性能调优。用户可以上传软件截图，AI 实时分析性能问题并提供个性化引导。

### 核心功能
1. **截图分析** - 理解 MindStudio Insight 界面，提取性能指标
2. **问题诊断** - 基于阈值和规则识别性能瓶颈
3. **主动引导** - 像真人一样推荐下一步操作
4. **知识库查询** - 基于官方文档提供准确解答
5. **连续对话** - 支持多轮对话，保持调优上下文

### 技术选型

| 层级 | 技术选型 | 说明 |
|------|----------|------|
| 前端 | Next.js 15 + Ant Design + TypeScript | App Router, 流式对话界面 |
| 多模态 AI | GLM-5 (智谱 AI) | glm-4v-plus 视觉 + glm-4-plus 文本 |
| Embedding | 硅基流动 BGE-M3 | 1024 维，支持多语言，构建时和运行时统一 |
| 数据存储 | IndexedDB (浏览器本地) | 会话历史、截图、分析结果 |
| 知识库 | 静态文件 (JSON + NPY) | 构建时生成，运行时加载 |
| 部署 | 静态部署 | Vercel / GitHub Pages |

---

## 系统架构

```
┌─────────────────────────────────────────────────────────────┐
│                    前端 (Next.js)                          │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  会话管理 (IndexedDB)                                 │ │
│  │  • 当前会话状态（调优阶段机）                          │ │
│  │  • 对话历史                                           │ │
│  │  • 截图和分析结果                                      │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  知识库检索                    │ │
│  │  • 加载静态向量索引                                    │ │
│  │  • 调用 embedding API 生成查询向量                     │ │
│  │  • 余弦相似度搜索                                      │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  GLM API 客户端                                       │ │
│  │  • 调用 glm-4v-plus 分析截图                           │ │
│  │  • 流式响应处理                                        │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  引导引擎                    │ │
│  │  • 基于状态机的调优流程跟踪                            │ │
│  │  • 规则引擎生成主动建议                                │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐ │
│  │  UI 界面                     │ │
│  │  • 截图上传（拖拽/粘贴/选择文件）                      │ │
│  │  • 流式对话展示                                        │ │
│  │  • 历史会话管理                                        │ │
│  └──────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                   外部服务                                 │
│                                                           │
│  ┌──────────────────────┐    ┌──────────────────────────┐ │
│  │   智谱 AI            │    │   硅基流动               │ │
│  │                      │    │                          │ │
│  │  • glm-4v-plus       │    │  • BGE-M3               │ │
│  │    多模态分析        │    │    Embedding (1024维)    │ │
│  │  • glm-4-plus        │    │    - 知识库构建         │ │
│  │    文本生成          │    │    - 用户查询           │ │
│  └──────────────────────┘    └──────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

构建时：
┌─────────────────────────────────────────────────────────────┐
│          Python 构建脚本 (data/scripts/)                   │
│  • 解析 Markdown 文档                                      │
│  • 提取结构化知识                                          │
│  • 调用 embedding API 生成向量                             │
│  • 输出静态文件到 public/knowledge/                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 数据流：截图到输出

### 完整流程

```
1. 用户上传截图
   ↓
2. 前端压缩并存储到 IndexedDB
   ↓
3. 提取截图关键词（OCR 或 GLM 快速识别）
   ↓
4. 调用 embedding API 生成查询向量
   ↓
5. 在知识库中语义检索相关内容（top 5）
   ↓
6. 构建 Prompt（系统提示 + 知识库结果 + 会话状态）
   ↓
7. 调用 GLM-4V API（截图 + Prompt）
   ↓
8. 流式接收响应，实时更新 UI
   ↓
9. 解析 JSON 分析结果
   ↓
10. 更新调优状态机
   ↓
11. 触发引导规则引擎，生成主动建议
   ↓
12. 格式化响应（Markdown + 结构化数据）
   ↓
13. 保存到 IndexedDB
   ↓
14. UI 渲染最终结果
```

### 时间估算

| 阶段 | 耗时 | 用户感知 |
|------|------|----------|
| 上传和压缩 | <1s | ⚡ 即时 |
| 知识检索 | 1-2s | 🔄 后台进行 |
| GLM API 调用 | 5-15s | ⏳ 流式展示文本 |
| 后处理和引导 | <1s | 💡 显示建议 |
| **总计** | **7-19s** | **流畅体验** |

---

## 核心数据结构

### 1. 调优状态机

```typescript
enum TuningPhase {
  INITIAL = 'initial',           // 初始导入数据
  OVERVIEW = 'overview',         // 查看概览
  BOTTLENECK_IDENTIFICATION = 'bottleneck_id',  // 识别瓶颈
  DEEP_DIVE = 'deep_dive',       // 深入分析
  OPTIMIZATION = 'optimization', // 实施优化
  VERIFICATION = 'verification'  // 验证效果
}

interface TuningState {
  phase: TuningPhase;
  subPhase?: string;
  completedSteps: string[];

  // 累积的发现
  findings: {
    bottlenecks: string[];      // 识别的瓶颈类型
    analyzedScreenshots: number;
    metrics: Record<string, number>;  // 关键指标
  };
}
```

### 2. 截图分析结果

```typescript
interface ScreenshotAnalysis {
  // UI 元素识别
  uiRecognition: {
    pageType: 'Timeline' | 'Memory' | 'Operator' | 'Summary' | 'Communication';
    visiblePanels: string[];
    activeView: string;
  };

  // 提取的指标
  extractedMetrics: Array<{
    name: string;
    value: string;
    numericValue: number;
    unit: string;
    status: 'normal' | 'warning' | 'critical';
    threshold: {
      good: string;
      warning: string;
      critical: string;
    };
  }>;

  // 检测到的问题
  detectedIssues: Array<{
    type: string;
    severity: 'critical' | 'warning' | 'info';
    description: string;
    evidence: string[];
    metrics: {
      indicator: string;
      currentValue: number;
      threshold: number;
      deviation: string;
    };
  }>;

  // 根因假设
  rootCauseHypotheses: Array<{
    hypothesis: string;
    confidence: number;
    reasoning: string;
    verificationSteps: string[];
  }>;

  // 行动建议
  actionRecommendations: Array<{
    priority: 'high' | 'medium' | 'low';
    action: string;
    targetPage: string;
    expectedOutcome: string;
    rationale: string;
  }>;
}
```

### 3. 会话存储（IndexedDB）

```typescript
interface LocalSession {
  sessionId: string;
  createdAt: string;
  updatedAt: string;

  tuningState: TuningState;

  messages: Array<{
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
    status?: 'streaming' | 'complete' | 'error';
    attachments?: Array<{
      type: 'screenshot';
      url: string;  // base64
      id: string;
      analysis?: ScreenshotAnalysis;
    }>;
  }>;

  metadata: {
    title: string;
    screenshotCount: number;
    problemTags: string[];
    resolved: boolean;
  };
}

interface LocalPreferences {
  guidanceStyle: 'proactive' | 'reactive' | 'minimal';
  detailLevel: 'brief' | 'moderate' | 'detailed';
  theme: 'light' | 'dark';
}
```

### 4. 知识库结构

```typescript
interface KnowledgeChunk {
  id: string;
  content: string;
  source: string;
  section_title: string;
  section_path: string;
  type: 'operation_guide' | 'performance_metric' | 'troubleshooting' | 'general_description';
  metadata: {
    page: 'Timeline' | 'Memory' | 'Operator' | 'Summary' | 'Communication' | 'General';
    keywords: string[];
    length: number;
    problem_type?: string;
  };
}
```

---

## Prompt 工程设计

### 系统提示词

```
# 角色定义
你是 MindStudio Insight 的智能性能分析助手，专门帮助用户进行 AI 模型训练性能调优。

# 专业领域
- 深度学习性能调优（PyTorch、TensorFlow）
- 华为昇腾 NPU 性能分析
- 分布式训练优化（通信重叠、梯度同步）
- 算子性能优化
- 内存管理优化

# 沟通风格
- 简洁专业，直击要点
- 主动引导，而非被动回答
- 用数据说话，引用截图中的具体数值
- 给出可操作的下一步建议

# 输出要求
- 分析结果必须使用 JSON 格式
- 数值提取要精确（包括单位）
- 异常判断要基于阈值
- 建议要具体到"点击哪个按钮/查看哪个面板"
```

### 截图分析 Prompt 结构

```
1. 当前会话状态（调优阶段、已发现的问题）
2. 相关知识（从知识库检索的 top 5 结果）
3. 分析任务：
   - UI 元素识别
   - 性能数据提取
   - 异常判断（基于阈值规则）
   - 根因假设
   - 行动建议
4. 输出格式（JSON schema）
5. Few-shot 示例（可选）
```

### 异常判断规则

| 问题类型 | 触发条件 | 严重程度 |
|---------|---------|---------|
| compute_bound | AI Core 利用率 < 60% | critical |
| communication_issue | 通信耗时占比 > 20% | warning |
| communication_wait | 通信等待时间占比 > 30% | critical |
| memory_pressure | HBM 内存使用率 > 85% | critical |
| host_bound | Host CPU 利用率 > 90% | critical |
| fast_slow_card | 快慢卡耗时差异 > 1.5倍 | warning |

---

## 知识库构建

### 构建流程

```
原始 Markdown (data/raw/)
    ↓
1. 解析 Markdown
   - 提取章节结构
   - 提取图片、表格、代码块
    ↓
2. 提取结构化信息
   - UI 元素定义
   - 操作步骤
   - 性能指标定义
   - 故障排查规则
    ↓
3. 语义分块
   - 按章节和语义边界分块
   - 每块 200-500 tokens
    ↓
4. 生成向量
   - 调用硅基流动 BGE-M3 API
   - 1024 维向量，支持多语言
    ↓
5. 构建索引
   - 元数据索引（按类型、页面）
   - 关键词倒排索引
    ↓
静态文件 (public/knowledge/)
   - chunks.json
   - embeddings.npy
   - metadata.json
```

### 构建脚本

```
data/scripts/
├── build.sh                    # 一键构建
├── 01_parse_markdown.py        # 解析 Markdown
├── 02_extract_structure.py     # 提取结构化信息
├── 03_split_chunks.py          # 语义分块
├── 04_generate_embeddings.py   # 生成向量（调用 API）
├── 05_build_index.py           # 构建索引
├── requirements.txt            # Python 依赖
└── .env                        # API Key 配置
```

### 使用方式

```bash
# 1. 配置 API Key
cd data/scripts
cp .env.example .env
# 编辑 .env，填入 SILICONFLOW_API_KEY
# 获取地址：https://cloud.siliconflow.cn/account/ak

# 2. 安装依赖
pip3 install -r requirements.txt

# 3. 构建
./build.sh
```

---

## 项目结构

```
msinsight-nav2/
├── public/
│   └── knowledge/                 # 知识库静态文件
│       ├── chunks.json
│       ├── embeddings.npy
│       └── metadata.json
│
├── src/
│   ├── app/
│   │   ├── page.tsx              # 主页（对话界面）
│   │   ├── history/
│   │   │   └── page.tsx          # 历史会话
│   │   └── settings/
│   │       └── page.tsx          # 设置（API Key 配置）
│   │
│   ├── components/
│   │   ├── ChatInterface.tsx     # 对话界面
│   │   ├── MessageBubble.tsx     # 消息气泡
│   │   ├── ScreenshotUploader.tsx # 截图上传
│   │   ├── AnalysisPanel.tsx     # 分析结果面板
│   │   ├── GuidancePanel.tsx     # 引导建议面板
│   │   └── MetricCard.tsx        # 指标卡片
│   │
│   ├── lib/
│   │   ├── db.ts                 # IndexedDB 封装
│   │   ├── glm.ts                # GLM API 客户端
│   │   ├── embedding.ts          # Embedding API
│   │   ├── knowledge.ts          # 知识库检索
│   │   ├── prompt.ts             # Prompt 构建
│   │   ├── analyzer.ts           # 截图分析主流程
│   │   ├── guidance.ts           # 引擎
│   │   └── types.ts              # 类型定义
│   │
│   └── styles/
│
├── data/
│   ├── raw/                      # 原始文档
│   │   ├── MindStudio_Insight_工具用户指南.md
│   │   └── MindStudio_性能问题通用定位指南.md
│   │
│   └── scripts/                  # 构建脚本
│       ├── build.sh
│       ├── 01_parse_markdown.py
│       ├── 02_extract_structure.py
│       ├── 03_split_chunks.py
│       ├── 04_generate_embeddings.py
│       ├── 05_build_index.py
│       ├── requirements.txt
│       └── .env.example
│
├── package.json
├── tsconfig.json
├── next.config.js
└── DESIGN.md                    # 本文档
```

---

## 关键技术实现

### 1. IndexedDB 会话管理

```typescript
import Dexie, { Table } from 'dexie';

class MindStudioDatabase extends Dexie {
  sessions!: Table<LocalSession>;

  constructor() {
    super('MindStudioInsightDB');
    this.version(1).stores({
      sessions: 'sessionId, createdAt, updatedAt'
    });
  }
}

// 使用示例
const db = new MindStudioDatabase();
await db.sessions.add(session);
const sessions = await db.sessions.toArray();
```

### 2. GLM API 调用（流式）

```typescript
async function callGLMStream(
  imageBase64: string,
  prompt: string,
  onDelta: (chunk: string) => void,
  onComplete: (fullResponse: string) => void
) {
  const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'glm-4v-plus',
      messages: [{
        role: 'user',
        content: [
          { type: 'image_url', image_url: { url: imageBase64 } },
          { type: 'text', text: prompt }
        ]
      }],
      stream: true
    })
  });

  // 处理 SSE 流
  const reader = response.body!.getReader();
  // ... 解析流式数据
}
```

### 3. Embedding API（硅基流动 BGE-M3）

```typescript
// lib/embedding.ts

/**
 * 使用硅基流动 BGE-M3 生成查询向量
 * API 文档：https://docs.siliconflow.cn/
 */
export async function embedQuery(text: string): Promise<Float32Array> {
  const apiKey = localStorage.getItem('siliconflow_api_key');

  if (!apiKey) {
    throw new Error('请先配置硅基流动 API Key');
  }

  const response = await fetch('https://api.siliconflow.cn/v1/embeddings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'BAAI/bge-m3',  // BGE-M3 模型
      input: text,
      encoding_format: 'float'
    })
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('硅基流动 API Key 无效，请检查配置');
    } else if (response.status === 429) {
      throw new Error('请求过快，请稍后再试');
    } else {
      throw new Error(`API 错误: ${response.status}`);
    }
  }

  const data = await response.json();
  const embedding = data.data[0].embedding;

  // L2 归一化（与构建时一致）
  const normalized = normalize(new Float32Array(embedding));

  return normalized;
}

/**
 * L2 归一化
 */
function normalize(vector: Float32Array): Float32Array {
  const norm = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
  return vector.map(v => v / (norm + 1e-8)) as any;
}

/**
 * 计算余弦相似度（向量已归一化，直接点积）
 */
export function cosineSimilarity(a: Float32Array, b: Float32Array): number {
  let dotProduct = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
  }
  return dotProduct;
}
```

**构建时使用（Python）：**

```python
# data/scripts/04_generate_embeddings.py

import requests
import numpy as np
import os
from dotenv import load_dotenv

load_dotenv()
SILICONFLOW_API_KEY = os.getenv('SILICONFLOW_API_KEY')

class EmbeddingGenerator:
    def __init__(self):
        self.api_url = 'https://api.siliconflow.cn/v1/embeddings'
        self.model = 'BAAI/bge-m3'

    def generate(self, texts: list) -> np.ndarray:
        """批量生成向量"""
        embeddings = []

        for i, text in enumerate(texts, 1):
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
                embedding = response.json()['data'][0]['embedding']
                embeddings.append(embedding)

                if i % 10 == 0:
                    print(f"  进度: {i}/{len(texts)}")

        embeddings_array = np.array(embeddings, dtype=np.float32)

        # L2 归一化
        norms = np.linalg.norm(embeddings_array, axis=1, keepdims=True)
        embeddings_array = embeddings_array / (norms + 1e-8)

        return embeddings_array
```

### 4. 知识库检索

```typescript
export async function searchKnowledge(
  query: string,
  topK: number = 5
): Promise<Array<{ chunk: KnowledgeChunk; score: number }>> {
  const db = await loadKnowledgeBase();

  // 1. 生成查询向量
  const queryEmbedding = await embedQuery(query);

  // 2. 计算相似度
  const similarities = [];
  const embeddingDim = 1024;

  for (let i = 0; i < db.chunks.length; i++) {
    const chunkEmbedding = db.embeddings.slice(
      i * embeddingDim,
      (i + 1) * embeddingDim
    );
    const score = cosineSimilarity(queryEmbedding, chunkEmbedding);
    similarities.push({ chunk: db.chunks[i], score });
  }

  // 3. 排序并返回 topK
  return similarities
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
```

### 5. 引导规则引擎

```typescript
export async function generateGuidance(
  analysis: ScreenshotAnalysis,
  state: TuningState
): Promise<GuidanceRecommendation> {
  const suggestions: QuickAction[] = [];

  // 基于检测到的问题生成建议
  const criticalIssues = analysis.detectedIssues.filter(i => i.severity === 'critical');

  if (criticalIssues.length > 0) {
    for (const issue of criticalIssues) {
      switch (issue.type) {
        case 'communication_issue':
          suggestions.push({
            label: '查看通信详情',
            priority: 'high',
            handler: () => navigateToPage('Communication')
          });
          break;
        // ... 其他情况
      }
    }
  }

  return {
    proactiveSuggestion: '...',
    quickActions: suggestions
  };
}
```

---

## 部署方案

### 静态部署

```bash
# 构建
npm run build

# 输出：out/ 目录（静态文件）

# 部署到 Vercel
vercel deploy out

# 或部署到 GitHub Pages
# 配置 next.config.js: output: 'export'
# 将 out/ 目录推送到 gh-pages 分支
```

### 环境变量

无服务端环境变量，所有配置在用户浏览器本地：
- `zhipu_api_key` - 智谱 API Key（GLM 多模态和对话）
- `siliconflow_api_key` - 硅基流动 API Key（BGE-M3 Embedding）

---

## API 成本估算

### 构建时（开发者）

| 操作 | API | 次数 | 成本 |
|------|-----|------|------|
| 生成知识库向量 | BGE-M3 (硅基流动) | ~350 次 | ≈ ¥0.007（约 0.00002 元/次） |

### 运行时（用户）

| 操作 | API | 频率 | 成本 |
|------|-----|------|------|
| 知识检索 | BGE-M3 (硅基流动) | 每次截图 1 次 | ¥0.00002/次 |
| 截图分析 | glm-4v-plus (智谱) | 每次截图 1 次 | ¥0.01-0.03/次 |
| 对话 | glm-4-plus (智谱) | 每轮对话 1 次 | ¥0.005-0.015/次 |

**估算**：单次截图分析 + 5 轮对话 ≈ ¥0.04-0.12

> 注：BGE-M3 在硅基流动上价格约为 ¥0.00002/次（1M tokens 约 ¥0.1）

---

## 隐私和安全

### 数据存储

- **所有数据存在用户浏览器本地**（IndexedDB + localStorage）
- **不使用后端数据库**
- **截图不离开用户设备**（仅 base64 发送给 GLM API）

### API Key

用户需要在设置中配置两个 API Key：
- **智谱 API Key** - 获取地址：https://open.bigmodel.cn/usercenter/apikeys
- **硅基流动 API Key** - 获取地址：https://cloud.siliconflow.cn/account/ak

所有 Key 仅存储在 localStorage，不经过任何服务器

### 清除数据

- 用户清除浏览器数据 = 删除所有会话历史
- 提供"导出会话"功能供备份

---

## 后续优化方向

### Phase 1：核心功能（MVP）
- [x] 架构设计
- [ ] 基础 UI 框架
- [ ] 截图上传和展示
- [ ] GLM API 集成
- [ ] 知识库构建和检索
- [ ] 基础对话功能

### Phase 2：增强功能
- [ ] 引导引擎完善
- [ ] 历史会话管理
- [ ] 导出/导入功能
- [ ] 详细的 Prompt 优化
- [ ] 性能优化（懒加载、缓存）

### Phase 3：高级功能
- [ ] 多语言支持
- [ ] 自定义主题
- [ ] 快捷键支持
- [ ] 批量截图分析
- [ ] 分析报告生成

---

## 文档参考

- [Next.js 文档](https://nextjs.org/docs)
- [Ant Design React](https://ant.design/components)
- [Dexie.js (IndexedDB)](https://dexie.org/)
- [智谱 AI API 文档](https://open.bigmodel.cn/dev/api)
- [硅基流动 API 文档](https://docs.siliconflow.cn/)
- [BGE-M3 模型介绍](https://baai-agentic-ability-translation.github.io/BGE_m3/)

---

## 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| 0.1.0 | 2026-03-24 | 初始设计文档 |
