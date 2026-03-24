// 类型定义

// ==================== 知识库类型 ====================

export interface KnowledgeChunk {
  id: string;
  content: string;
  source: string;
  section_title: string;
  section_path: string;
  section_level: number;
  type: 'operation_guide' | 'performance_metric' | 'troubleshooting' | 'general_description' | 'ui_element' | 'troubleshooting_guide';
  metadata: {
    page: 'Timeline' | 'Memory' | 'Operator' | 'Summary' | 'Communication' | 'General';
    keywords: string[];
    length: number;
    problem_type?: string;
  };
}

export interface MetadataIndex {
  metadata_index: {
    by_type: Record<string, string[]>;
    by_source: Record<string, string[]>;
    by_page: Record<string, string[]>;
  };
  keyword_index: Record<string, string[]>;
  page_type_index: Record<string, string[]>;
  problem_type_index: Record<string, string[]>;
}

// ==================== 会话类型 ====================

export enum TuningPhase {
  INITIAL = 'initial',
  OVERVIEW = 'overview',
  BOTTLENECK_IDENTIFICATION = 'bottleneck_id',
  DEEP_DIVE = 'deep_dive',
  OPTIMIZATION = 'optimization',
  VERIFICATION = 'verification',
}

export interface TuningState {
  phase: TuningPhase;
  subPhase?: string;
  completedSteps: string[];
  findings: {
    bottlenecks: string[];
    analyzedScreenshots: number;
    metrics: Record<string, number>;
  };
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  status?: 'streaming' | 'complete' | 'error';
  attachments?: MessageAttachment[];
  analysis?: ScreenshotAnalysis;
  guidance?: GuidanceRecommendation;
}

export interface MessageAttachment {
  type: 'screenshot';
  url: string;
  id: string;
  analysis?: ScreenshotAnalysis;
}

export interface LocalSession {
  sessionId: string;
  createdAt: string;
  updatedAt: string;
  tuningState: TuningState;
  messages: Message[];
  metadata: {
    title: string;
    screenshotCount: number;
    problemTags: string[];
    resolved: boolean;
  };
}

export interface LocalPreferences {
  guidanceStyle: 'proactive' | 'reactive' | 'minimal';
  detailLevel: 'brief' | 'moderate' | 'detailed';
  theme: 'light' | 'dark';
  siliconflowApiKey?: string;
}

// ==================== 分析类型 ====================

export interface ScreenshotAnalysis {
  uiRecognition: {
    pageType: 'Timeline' | 'Memory' | 'Operator' | 'Summary' | 'Communication';
    visiblePanels: string[];
    activeView: string;
  };
  extractedMetrics: Metric[];
  detectedIssues: Issue[];
  rootCauseHypotheses: Hypothesis[];
  actionRecommendations: ActionRecommendation[];
}

export interface Metric {
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
}

export interface Issue {
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
}

export interface Hypothesis {
  hypothesis: string;
  confidence: number;
  reasoning: string;
  verificationSteps: string[];
}

export interface ActionRecommendation {
  priority: 'high' | 'medium' | 'low';
  action: string;
  targetPage: string;
  targetPanel?: string;
  expectedOutcome: string;
  rationale: string;
}

// ==================== 引导类型 ====================

export interface GuidanceRecommendation {
  proactiveSuggestion: string;
  quickActions: QuickAction[];
}

export interface QuickAction {
  label: string;
  priority: 'high' | 'medium' | 'low';
  handler?: () => void;
}

// ==================== 检索结果类型 ====================

export interface SearchResult {
  chunk: KnowledgeChunk;
  score: number;
}
