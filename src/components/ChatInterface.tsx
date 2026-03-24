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
  useEffect(() => {
    loadCurrentSession();

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
    document.addEventListener('paste', handlePaste);

    return () => {
      window.removeEventListener('message:update', handleMessageUpdate);
      window.removeEventListener('analysis:complete', handleAnalysisComplete);
      window.removeEventListener('message:formatted', handleMessageFormatted);
      window.removeEventListener('session:updated', handleSessionUpdated);
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

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

    // 添加到界面
    setMessages((prev) => [...prev, userMessage]);
    const content = inputValue;
    setInputValue('');

    // 清空待发送的截图
    const screenshotToAnalyze = pendingScreenshot;
    setPendingScreenshot(null);

    try {
      // 保存到 IndexedDB
      if (currentSessionId) {
        await sessionManager.appendMessage(currentSessionId, userMessage);
      }

      // 如果有截图，调用截图分析
      if (screenshotToAnalyze) {
        setAnalyzing(true);
        const screenshotId = userMessage.attachments?.[0]?.id || crypto.randomUUID();
        await analyzeScreenshot(screenshotId, screenshotToAnalyze, content);
      } else {
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

  // 新建会话
  const handleNewSession = async () => {
    try {
      const newSessionId = await sessionManager.createSession();
      // 更新 localStorage 中的当前会话 ID
      localStorage.setItem('currentSessionId', newSessionId);
      setCurrentSessionId(newSessionId);
      setMessages([]);
      message.success('已创建新会话');
    } catch (error) {
      console.error('创建会话失败:', error);
      message.error('创建会话失败');
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
      {/* 工具栏 */}
      <Card style={{ marginBottom: 16 }}>
        <Space>
          <Button icon={<PlusOutlined />} onClick={handleNewSession}>
            新建会话
          </Button>
          <Upload
            customRequest={handleUploadScreenshot}
            showUploadList={false}
            accept="image/*"
            disabled={analyzing}
          >
            <Button
              icon={<CameraOutlined />}
              loading={analyzing}
              disabled={analyzing}
            >
              {analyzing ? '分析中...' : '上传截图'}
            </Button>
          </Upload>
        </Space>
      </Card>

      {/* 消息列表 */}
      <div
        style={{
          background: '#fff',
          borderRadius: 8,
          border: '1px solid #f0f0f0',
          minHeight: 500,
          maxHeight: 'calc(100vh - 250px)',
          overflowY: 'auto',
          padding: 16,
        }}
      >
        {messages.length === 0 ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 400,
              color: '#8c8c8c',
            }}
          >
            <UploadOutlined style={{ fontSize: 64, marginBottom: 16 }} />
            <p>上传 MindStudio Insight 截图开始分析</p>
            <p style={{ fontSize: 14 }}>
              支持 PNG、JPG 等格式，最大 5MB
            </p>
            <p style={{ fontSize: 13, color: '#1890ff', marginTop: 8 }}>
              💡 也可以直接按 Ctrl+V (Mac: ⌘+V) 粘贴截图
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))
        )}

        {analyzing && (
          <div style={{ textAlign: 'center', padding: 20 }}>
            <Spin size="large" />
            <p style={{ marginTop: 16, color: '#8c8c8c' }}>
              AI 正在分析截图...
            </p>
          </div>
        )}
      </div>

      {/* 输入框 */}
      <Card style={{ marginTop: 16 }}>
        {/* 截图预览区域 */}
        {pendingScreenshot && (
          <div
            style={{
              marginBottom: 12,
              padding: 12,
              background: '#f5f5f5',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <img
              src={pendingScreenshot}
              alt="待发送的截图"
              style={{
                width: 80,
                height: 60,
                objectFit: 'cover',
                borderRadius: 4,
                border: '1px solid #d9d9d9',
              }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>截图已添加</div>
              <div style={{ fontSize: 12, color: '#8c8c8c' }}>
                请在下方输入问题后点击发送
              </div>
            </div>
            <Button
              size="small"
              danger
              onClick={() => {
                setPendingScreenshot(null);
                message.info('已取消截图');
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

// 消息气泡组件
function MessageBubble({ message }: { message: MessageType }) {
  const isUser = message.role === 'user';
  const isStreaming = message.status === 'streaming';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          maxWidth: '70%',
          padding: '12px 16px',
          borderRadius: 12,
          background: isUser ? '#1890ff' : '#f5f5f5',
          color: isUser ? '#fff' : '#000',
        }}
      >
        {/* 截图附件 */}
        {message.attachments?.map((att) =>
          att.type === 'screenshot' ? (
            <div key={att.id} style={{ marginBottom: 8 }}>
              <img
                src={att.url}
                alt="上传的截图"
                style={{
                  maxWidth: '100%',
                  maxHeight: 300,
                  borderRadius: 8,
                  display: 'block',
                }}
              />
            </div>
          ) : null
        )}

        {/* 消息内容（支持 Markdown） */}
        <div className="markdown" style={{ whiteSpace: 'pre-wrap' }}>
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
