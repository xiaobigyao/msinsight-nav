'use client';

import { Layout } from 'antd';
import dynamic from 'next/dynamic';
import { NewSessionButton } from '@/components/ChatInterface';

// 动态导入客户端组件
const ChatInterface = dynamic(() => import('@/components/ChatInterface'), {
  ssr: false,
  loading: () => (
    <div className="loading">
      <div className="loading-spinner">↻</div>
      <p>加载中...</p>
    </div>
  ),
});

export default function HomePage() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      {/* 顶部导航栏 - 极简纯白风格 */}
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          borderBottom: 'none',
          padding: '100px 24px 80px',
        }}
      >
        {/* 标题和新建会话按钮在同一行 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 40,
        }}>
          <div style={{
            fontWeight: 500,
            fontSize: 56,
            color: '#1A1A1A',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}>
            MindStudio Insight 副驾驶员
          </div>
          <NewSessionButton />
        </div>
      </Layout.Header>

      {/* 主内容区 */}
      <Layout.Content style={{
        background: '#FFFFFF',
        padding: '0 40px',
        paddingBottom: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <ChatInterface />
      </Layout.Content>
    </Layout>
  );
}
