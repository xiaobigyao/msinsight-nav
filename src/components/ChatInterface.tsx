'use client';

import { useEffect, useState } from 'react';
import { Input, Upload, Button, Card, Spin, Tag, Space, Divider, App } from 'antd';
import { SendOutlined, PlusOutlined, CameraOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { sessionManager } from '@/lib/db';
import { analyzeScreenshot } from '@/lib/analyzer';
import type { Message as MessageType, ScreenshotAnalysis } from '@/types';

const { TextArea } = Input;

export default function ChatInterface() {
  const { message } = App.useApp();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [pendingScreenshot, setPendingScreenshot] = useState<string | null>(null);

  // 加载当前会话
  const loadCurrentSession = async () => {
    try {
      const session = await sessionManager.getCurrentSession();
      setCurrentSessionId(session.sessionId);
      setMessages(session.messages);
    } catch (error) {
      console.error('加载会话失败:', error);
      message.error('加载会话失败');
    }
  };

  useEffect(() => {
    loadCurrentSession();

    // 监听会话创建事件
    const handleSessionCreated = () => {
      loadCurrentSession();
    };

    // 监听消息更新事件
    const handleMessageUpdate = ((e: CustomEvent) => {
      const { messageId, delta, content, replaceAll } = e.detail;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                content: replaceAll ? content : msg.content + delta,
                status: replaceAll ? ('complete' as const) : msg.status,
              }
            : msg
        )
      );
    }) as EventListener;

    const handleAnalysisComplete = ((e: CustomEvent) => {
      const { messageId } = e.detail;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, status: 'complete' as const }
            : msg
        )
      );
      setAnalyzing(false);
    }) as EventListener;

    // 监听消息格式化完成事件（显示格式化后的内容）
    const handleMessageFormatted = ((e: CustomEvent) => {
      const { messageId, content } = e.detail;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, content, status: 'complete' as const }
            : msg
        )
      );
      setAnalyzing(false);
    }) as EventListener;

    // 监听会话更新事件（重新加载会话以显示新消息）
    const handleSessionUpdated = async () => {
      await loadCurrentSession();
    };

    // 监听粘贴事件
    const handlePaste = async (e: ClipboardEvent) => {
      // 如果正在分析中，不处理粘贴
      if (analyzing) return;

      const items = e.clipboardData?.items;
      if (!items) return;

      // 查找剪贴板中的图片
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.type.indexOf('image') !== -1) {
          e.preventDefault(); // 阻止默认粘贴行为

          const file = item.getAsFile();
          if (file) {
            try {
              message.loading('正在处理粘贴的图片...', 0);

              // 压缩图片
              const compressed = await compressImage(file, {
                maxWidth: 1920,
                maxHeight: 1080,
                quality: 0.85,
                maxSize: 5 * 1024 * 1024,
              });

              // 保存到待发送状态
              setPendingScreenshot(compressed);
              message.destroy();
              message.success('截图已添加，请输入问题后点击发送');
            } catch (error) {
              console.error('处理粘贴图片失败:', error);
              message.error('处理粘贴图片失败');
              message.destroy();
            }
          }
          break; // 只处理第一个图片
        }
      }
    };

    window.addEventListener('message:update', handleMessageUpdate);
    window.addEventListener('analysis:complete', handleAnalysisComplete);
    window.addEventListener('message:formatted', handleMessageFormatted);
    window.addEventListener('session:updated', handleSessionUpdated);
    window.addEventListener('sessionCreated', handleSessionCreated);
    document.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('message:update', handleMessageUpdate);
      window.removeEventListener('analysis:complete', handleAnalysisComplete);
      window.removeEventListener('message:formatted', handleMessageFormatted);
      window.removeEventListener('session:updated', handleSessionUpdated);
      window.removeEventListener('sessionCreated', handleSessionCreated);
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  // 发送消息（文本或截图+文本）
  const handleSendMessage = async () => {
    // 如果有待发送的截图，必须输入问题才能发送
    if (pendingScreenshot && !inputValue.trim()) {
      message.warning('请输入问题后再发送');
      return;
    }

    // 既没有截图也没有文字，不能发送
    if (!pendingScreenshot && !inputValue.trim()) {
      return;
    }

    const userMessage: MessageType = {
      id: crypto.randomUUID(),
      role: 'user' as const,
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    // 如果有截图附件，添加到消息中
    if (pendingScreenshot) {
      userMessage.attachments = [
        {
          id: crypto.randomUUID(),
          type: 'screenshot',
          url: pendingScreenshot,
        },
      ];
    }

    // 清空待发送的截图
    const screenshotToAnalyze = pendingScreenshot;
    setPendingScreenshot(null);
    const content = inputValue;
    setInputValue('');

    try {
      // 如果有截图，调用截图分析（会自动保存用户消息）
      if (screenshotToAnalyze) {
        setAnalyzing(true);
        const screenshotId = userMessage.attachments?.[0]?.id || crypto.randomUUID();
        // 不在这里添加到界面，让 analyzeScreenshot 处理
        await analyzeScreenshot(screenshotId, screenshotToAnalyze, content, userMessage);
      } else {
        // 纯文本消息，直接保存并添加到界面
        if (currentSessionId) {
          await sessionManager.appendMessage(currentSessionId, userMessage);
        }
        setMessages((prev) => [...prev, userMessage]);
        // TODO: 纯文本聊天
        // 暂时显示占位响应
        setTimeout(() => {
          const assistantMessage: MessageType = {
            id: crypto.randomUUID(),
            role: 'assistant' as const,
            content: '收到您的消息。对话功能正在开发中...',
            timestamp: new Date().toISOString(),
            status: 'complete' as const,
          };
          setMessages((prev) => [...prev, assistantMessage]);
        }, 500);
      }
    } catch (error) {
      message.error('发送消息失败');
    }
  };

  // 上传截图
  const handleUploadScreenshot: UploadProps['customRequest'] = async (options) => {
    const { file } = options;
    const fileObj = file as File;
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const base64 = e.target?.result as string;

        // 压缩图片（如果太大）
        const compressed = await compressImage(fileObj, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.85,
          maxSize: 5 * 1024 * 1024,
        });

        // 保存到待发送状态
        setPendingScreenshot(compressed);
        message.success('截图已添加，请输入问题后点击发送');
      } catch (error) {
        console.error('处理截图失败:', error);
        message.error('处理截图失败');
      }
    };

    reader.readAsDataURL(fileObj);
  };

  return (
    <div style={{ width: '100%', maxWidth: 1000, margin: '0 auto' }}>
      {/* 消息列表 - 极简纯白风格 */}
      <Card
        style={{
          minHeight: 400,
          maxHeight: 'calc(100vh - 250px)',
          overflowY: 'auto',
          marginBottom: 32,
          padding: messages.length === 0 ? 0 : 32,
        }}
      >
        {messages.length === 0 ? (
          <Upload
            customRequest={handleUploadScreenshot}
            showUploadList={false}
            accept="image/*"
            disabled={analyzing}
            style={{ width: '100%', height: '100%' }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 400,
                color: '#8A8A8A',
                cursor: analyzing ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!analyzing) {
                  e.currentTarget.style.opacity = '0.7';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <UploadOutlined style={{ fontSize: 64, marginBottom: 24, color: '#B8B8B8' }} />
              <p style={{ fontSize: 16, fontWeight: 500, color: '#1A1A1A', marginBottom: 8 }}>
                上传 MindStudio Insight 截图开始分析
              </p>
              <p style={{ fontSize: 13, color: '#8A8A8A', marginBottom: 4 }}>
                支持 PNG、JPG 等格式，最大 5MB
              </p>
              <p style={{ fontSize: 13, color: '#8A8A8A', marginTop: 12 }}>
                也可以直接按 Ctrl+V (Mac: ⌘+V) 粘贴截图
              </p>
            </div>
          </Upload>
        ) : (
          messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))
        )}

        {analyzing && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <Spin size="large" />
            <p style={{ marginTop: 24, color: '#8A8A8A', fontWeight: 400 }}>
              AI 正在分析截图...
            </p>
          </div>
        )}
      </Card>

      {/* 输入框 - 极简纯白风格 */}
      <Card>
        {/* 截图预览区域 */}
        {pendingScreenshot && (
          <div
            style={{
              marginBottom: 16,
              padding: 14,
              background: '#FAFAFA',
              border: '1px solid #E8E8E8',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <img
              src={pendingScreenshot}
              alt="待发送的截图"
              style={{
                width: 80,
                height: 60,
                objectFit: 'cover',
                borderRadius: 6,
                border: '1px solid #E8E8E8',
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, marginBottom: 4, color: '#1A1A1A' }}>截图已添加</div>
              <div style={{ fontSize: 12, color: '#8A8A8A', fontWeight: 400 }}>
                请在下方输入问题后点击发送
              </div>
            </div>
            <Button
              size="small"
              onClick={() => {
                setPendingScreenshot(null);
                message.info('已取消截图');
              }}
              style={{
                borderRadius: 6,
                fontWeight: 500,
              }}
            >
              取消
            </Button>
          </div>
        )}

        <Space.Compact style={{ width: '100%' }}>
          <TextArea
            placeholder="输入问题或按回车发送...（支持直接粘贴截图）"
            autoSize={{ minRows: 1, maxRows: 4 }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={(e) => {
              if (!e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            disabled={analyzing}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
            disabled={(!inputValue.trim() && !pendingScreenshot) || analyzing}
          >
            发送
          </Button>
        </Space.Compact>
      </Card>
    </div>
  );
}

// 消息气泡组件 - 极简纯白风格
function MessageBubble({ message }: { message: MessageType }) {
  const isUser = message.role === 'user';
  const isStreaming = message.status === 'streaming';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 14,
      }}
    >
      <div
        style={{
          maxWidth: '88%',
          padding: '12px 14px',
          borderRadius: 10,
          background: isUser ? '#1A1A1A' : '#FAFAFA',
          border: isUser ? 'none' : '1px solid #E8E8E8',
          color: isUser ? '#FFFFFF' : '#2A2A2A',
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        {/* 截图附件 */}
        {message.attachments?.map((att) =>
          att.type === 'screenshot' ? (
            <div key={att.id} style={{ marginBottom: 12 }}>
              <img
                src={att.url}
                alt="上传的截图"
                style={{
                  maxWidth: '100%',
                  maxHeight: 300,
                  borderRadius: 10,
                  display: 'block',
                  border: '1px solid #E8E8E8',
                }}
              />
            </div>
          ) : null
        )}

        {/* 消息内容（支持 Markdown） */}
        <div className="markdown" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
          {message.content}
        </div>

        {/* 流式状态指示器 */}
        {isStreaming && (
          <span
            style={{
              display: 'inline-block',
              marginLeft: 8,
              animation: 'pulse 1.5s infinite',
            }}
          >
            ▊
          </span>
        )}
      </div>
    </div>
  );
}

// 图片压缩工具
async function compressImage(
  file: File,
  options: {
    maxWidth: number;
    maxHeight: number;
    quality: number;
    maxSize: number;
  }
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      // 计算缩放比例
      const scale = Math.min(
        1,
        options.maxWidth / img.width,
        options.maxHeight / img.height
      );

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (blob && blob.size <= options.maxSize) {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
          } else if (blob) {
            // 如果还是太大，降低质量再试
            resolve(compressImage(file, { ...options, quality: options.quality * 0.8 }));
          } else {
            reject(new Error('图片压缩失败'));
          }
        },
        'image/jpeg',
        options.quality
      );
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

// 新建会话按钮组件
function NewSessionButton() {
  const { message } = App.useApp();

  const handleNewSession = async () => {
    try {
      const newSessionId = await sessionManager.createSession();
      // 更新 localStorage 中的当前会话 ID
      localStorage.setItem('currentSessionId', newSessionId);
      // 触发自定义事件通知其他组件重新加载会话
      window.dispatchEvent(new CustomEvent('sessionCreated', { detail: { sessionId: newSessionId } }));
      message.success('已创建新会话');
    } catch (error) {
      console.error('创建会话失败:', error);
      message.error('创建会话失败');
    }
  };

  return (
    <Button
      onClick={handleNewSession}
      style={{
        padding: '10px 20px',
        border: '1px solid #E8E8E8',
        borderRadius: 8,
        background: 'transparent',
        color: '#8A8A8A',
        fontSize: 14,
        fontWeight: 500,
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#1A1A1A';
        e.currentTarget.style.color = '#1A1A1A';
        e.currentTarget.style.background = '#FAFAFA';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E8E8E8';
        e.currentTarget.style.color = '#8A8A8A';
        e.currentTarget.style.background = 'transparent';
      }}
    >
      新建会话
    </Button>
  );
}

// 导出 NewSessionButton 组件
export { NewSessionButton };
