'use client';

import { Layout } from 'antd';
import { PictureOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';

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
    <Layout style={{ minHeight: '100vh' }}>
      {/* 顶部导航栏 */}
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          padding: '0 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <PictureOutlined style={{ fontSize: 24, color: '#1890ff' }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 18 }}>MindStudio Insight</div>
            <div style={{ fontSize: 12, color: '#8c8c8c' }}>智能性能分析助手</div>
          </div>
        </div>
      </Layout.Header>

      {/* 主内容区 */}
      <Layout.Content style={{ background: '#f5f5f5' }}>
        <ChatInterface />
      </Layout.Content>
    </Layout>
  );
}
