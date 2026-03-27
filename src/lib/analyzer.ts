// 截图分析引擎

import { analyzeScreenshot as callSiliconFlowAnalysis, parseSiliconFlowResponse } from './siliconflow';
import { searchWithQuery } from './embedding';
import { buildAnalysisPrompt } from './prompt';
import { sessionManager } from './db';
import { TuningPhase } from '@/types';
import type { ScreenshotAnalysis, TuningState } from '@/types';

/**
 * 分析截图的主流程
 */
export async function analyzeScreenshot(
  screenshotId: string,
  imageBase64: string,
  userQuery?: string,
  userMessage?: any
): Promise<void> {
  console.log('🔍 开始分析截图...');
  if (userQuery) {
    console.log('❓ 用户问题:', userQuery);
  }

  // 1. 加载当前会话
  const session = await sessionManager.getCurrentSession();
  const history = session.messages.slice(-10);

  // 2. 如果提供了用户消息，先保存到数据库
  if (userMessage) {
    await sessionManager.appendMessage(session.sessionId, userMessage);
    console.log('💾 已保存用户消息到数据库');

    // 通知 UI 重新加载会话（显示用户消息）
    window.dispatchEvent(
      new CustomEvent('session:updated', {
        detail: { sessionId: session.sessionId },
      })
    );
  }

  // 2. 提取关键词用于知识库检索
  // 如果用户有问题，结合用户问题和截图提取关键词
  const keywords = userQuery
    ? `${userQuery} ${extractKeywords(imageBase64)}`
    : extractKeywords(imageBase64);
  console.log('📝 提取的关键词:', keywords);

  // 3. 检索相关知识
  const relevantKnowledge = await searchWithQuery(keywords, {
    topK: 5,
    minSimilarity: 0.65,
  });
  console.log(`📚 检索到 ${relevantKnowledge.length} 个相关知识块`);

  // 4. 创建助手消息占位符
  const assistantMessageId = await sessionManager.appendMessage(session.sessionId, {
    role: 'assistant',
    content: '🤖 正在分析截图，请稍候...',
    status: 'streaming',
  });
  console.log('📝 创建助手消息，ID:', assistantMessageId);

  // 通知 UI 重新加载会话（显示新消息）
  window.dispatchEvent(
    new CustomEvent('session:updated', {
      detail: { sessionId: session.sessionId },
    })
  );

  // 5. 构建 Prompt（包含用户问题）
  const prompt = await buildAnalysisPrompt({
    screenshotUrl: imageBase64,
    sessionState: session.tuningState,
    relevantKnowledge: relevantKnowledge.map((r) => r.chunk),
    userQuery,
  });

  // 6. 调用 SiliconFlow API（流式）
  let fullResponse = '';

  await callSiliconFlowAnalysis(imageBase64, prompt, {
    onDelta: async (delta) => {
      fullResponse += delta;

      // 尝试实时更新界面（显示当前已接收的内容）
      await sessionManager.updateMessage(session.sessionId, assistantMessageId, {
        content: fullResponse,
      });

      // 通知 UI 刷新（通过事件总线）
      window.dispatchEvent(
        new CustomEvent('message:update', {
          detail: { messageId: assistantMessageId, delta },
        })
      );
    },

    onComplete: async (completeResponse) => {
      console.log('✅ Kimi-K2.5 分析完成，响应长度:', completeResponse.length);
      console.log('📝 响应内容预览:', completeResponse.substring(0, 500));

      // 直接使用 AI 的自然语言响应
      const finalResponse = completeResponse.trim();

      // 更新消息内容
      await sessionManager.updateMessage(session.sessionId, assistantMessageId, {
        content: finalResponse,
        status: 'complete',
      });

      // 通知 UI 更新
      window.dispatchEvent(
        new CustomEvent('message:update', {
          detail: { messageId: assistantMessageId, content: finalResponse, replaceAll: true },
        })
      );

      window.dispatchEvent(
        new CustomEvent('analysis:complete', {
          detail: { messageId: assistantMessageId },
        })
      );

      console.log('✅ 截图分析流程完成');
    },

    onError: async (error) => {
      console.error('❌ SiliconFlow 分析失败:', error);

      await sessionManager.updateMessage(session.sessionId, assistantMessageId, {
        content: `分析失败：${error.message}`,
        status: 'error',
      });

      window.dispatchEvent(
        new CustomEvent('analysis:error', {
          detail: { messageId: assistantMessageId, error },
        })
      );
    },
  });
}

/**
 * 从截图提取关键词（简化版）
 */
function extractKeywords(imageBase64: string): string {
  // 这里可以添加 OCR 或图像识别逻辑
  // 暂时返回通用关键词
  return '性能分析 指标 瓶颈';
}

/**
 * 更新调优状态
 */
function updateTuningState(
  currentState: TuningState,
  analysis: ScreenshotAnalysis
): TuningState {
  const newState = { ...currentState };

  // 更新发现
  newState.findings.analyzedScreenshots += 1;

  // 提取问题类型
  const newBottlenecks = analysis.detectedIssues.map((i) => i.type);
  newState.findings.bottlenecks = [
    ...new Set([...currentState.findings.bottlenecks, ...newBottlenecks]),
  ];

  // 提取指标
  for (const metric of analysis.extractedMetrics) {
    newState.findings.metrics[metric.name] = metric.numericValue;
  }

  // 更新阶段
  if (newState.phase === TuningPhase.INITIAL && analysis.detectedIssues.length > 0) {
    newState.phase = TuningPhase.BOTTLENECK_IDENTIFICATION;
  }

  return newState;
}

/**
 * 生成引导建议
 */
function generateGuidance(
  analysis: ScreenshotAnalysis,
  state: TuningState
): {
  proactiveSuggestion: string;
  quickActions: Array<{ label: string; priority: 'high' | 'medium' | 'low' }>;
} {
  const suggestions: Array<{ label: string; priority: 'high' | 'medium' | 'low' }> = [];
  let suggestionText = '';

  // 基于检测到的问题生成建议
  const criticalIssues = analysis.detectedIssues.filter((i) => i.severity === 'critical');

  if (criticalIssues.length > 0) {
    suggestionText = `⚠️ 检测到 ${criticalIssues.length} 个严重问题：\n\n`;
    suggestionText += criticalIssues
      .map((i, idx) => `${idx + 1}. ${getIssueTypeName(i.type)}: ${i.description}`)
      .join('\n');

    for (const issue of criticalIssues) {
      switch (issue.type) {
        case 'communication_issue':
          suggestions.push({
            label: '查看通信详情',
            priority: 'high',
          });
          suggestions.push({
            label: '查看 Timeline',
            priority: 'high',
          });
          break;

        case 'memory_pressure':
          suggestions.push({
            label: '查看内存详情',
            priority: 'medium',
          });
          break;

        case 'host_bound':
          suggestions.push({
            label: '查看 CPU 配置',
            priority: 'high',
          });
          break;
      }
    }
  } else {
    suggestionText = '✅ 未检测到明显的性能问题，各项指标均在正常范围内。';
  }

  return {
    proactiveSuggestion: suggestionText,
    quickActions: suggestions,
  };
}

/**
 * 获取问题类型名称
 */
function getIssueTypeName(type: string): string {
  const names: Record<string, string> = {
    compute_bound: '计算瓶颈',
    communication_issue: '通信问题',
    memory_pressure: '内存压力',
    host_bound: 'Host 瓶颈',
    fast_slow_card: '快慢卡问题',
  };
  return names[type] || type;
}

/**
 * 格式化助手响应（Markdown）
 */
function formatAssistantResponse(
  analysis: ScreenshotAnalysis,
  guidance: { proactiveSuggestion: string; quickActions: any[] }
): string {
  let response = '';

  // 1. UI 识别结果
  response += `## 📍 当前位置\n\n`;
  response += `- **页面**：${analysis.uiRecognition.pageType}\n`;
  if (analysis.uiRecognition.visiblePanels.length > 0) {
    response += `- **可见面板**：${analysis.uiRecognition.visiblePanels.join('、')}\n`;
  }
  response += `\n`;

  // 2. 性能指标摘要
  if (analysis.extractedMetrics.length > 0) {
    response += `## 📊 性能指标\n\n`;

    const criticalMetrics = analysis.extractedMetrics.filter((m) => m.status === 'critical');
    const warningMetrics = analysis.extractedMetrics.filter((m) => m.status === 'warning');

    if (criticalMetrics.length > 0) {
      response += `### ⚠️ 需要关注\n`;
      criticalMetrics.forEach((m) => {
        response += `- **${m.name}**：${m.value} ${m.unit}\n`;
      });
      response += '\n';
    }

    if (warningMetrics.length > 0) {
      response += `### ⚡ 注意\n`;
      warningMetrics.forEach((m) => {
        response += `- **${m.name}**：${m.value} ${m.unit}\n`;
      });
      response += '\n';
    }
  }

  // 3. 问题诊断
  if (analysis.detectedIssues.length > 0) {
    response += `## 🔍 问题诊断\n\n`;

    analysis.detectedIssues.forEach((issue, i) => {
      const icon = issue.severity === 'critical' ? '🔴' : '🟡';
      response += `${icon} **${getIssueTypeName(issue.type)}**\n\n`;
      response += `${issue.description}\n\n`;
      if (issue.evidence.length > 0) {
        response += `**证据**：\n`;
        issue.evidence.forEach((e) => response += `- ${e}\n`);
        response += '\n';
      }
    });
  }

  // 4. 根因分析
  if (analysis.rootCauseHypotheses.length > 0) {
    response += `## 🧩 可能原因\n\n`;
    analysis.rootCauseHypotheses.forEach((h, i) => {
      response += `${i + 1}. **${h.hypothesis}** （置信度：${(h.confidence * 100).toFixed(0)}%）\n`;
      response += `   - 推理：${h.reasoning}\n`;
      if (h.verificationSteps.length > 0) {
        response += `   - 验证步骤：\n`;
        h.verificationSteps.forEach((step) => {
          response += `     - ${step}\n`;
        });
      }
      response += '\n';
    });
  }

  // 5. 行动建议
  if (analysis.actionRecommendations.length > 0) {
    response += `## 🎯 建议操作\n\n`;
    analysis.actionRecommendations.forEach((action, i) => {
      const priorityIcon = action.priority === 'high' ? '🔥' : action.priority === 'medium' ? '⚡' : '💡';
      response += `${priorityIcon} ${i + 1}. ${action.action}\n`;
      response += `   - 期望结果：${action.expectedOutcome}\n`;
      response += `   - 理由：${action.rationale}\n\n`;
    });
  }

  // 6. 主动引导
  if (guidance.proactiveSuggestion) {
    response += `---\n\n`;
    response += `## 💡 智能建议\n\n`;
    response += guidance.proactiveSuggestion;
    response += '\n\n';

    if (guidance.quickActions.length > 0) {
      response += `**快捷操作**：\n`;
      guidance.quickActions.forEach((action) => {
        response += `- [${action.label}]` + '\n';
      });
    }
  }

  return response;
}
