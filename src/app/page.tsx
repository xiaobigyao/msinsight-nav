'use client';

import { useEffect, useState } from 'react';
import { Layout, Button, Modal, message } from 'antd';
import { SettingOutlined, PictureOutlined } from '@ant-design/icons';
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

const SettingsModal = dynamic(() => import('@/components/SettingsModal'), {
  ssr: false,
});

export default function HomePage() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [apiKeysConfigured, setApiKeysConfigured] = useState(false);

  useEffect(() => {
    // 检查 API Keys 是否已配置
    const checkApiKeys = () => {
      const prefs = JSON.parse(localStorage.getItem('preferences') || '{}');
      const hasZhipuKey = !!prefs.zhipuApiKey;
      const hasSiliconflowKey = !!prefs.siliconflowApiKey;
      setApiKeysConfigured(hasZhipuKey && hasSiliconflowKey);

      if (!hasZhipuKey || !hasSiliconflowKey) {
        // 提示用户配置 API Keys
        setTimeout(() => {
          message.warning('请先配置 API Keys（智谱 AI 和硅基流动）');
          setSettingsOpen(true);
        }, 1000);
      }
    };

    checkApiKeys();

    // 监听配置变化
    const handleStorageChange = () => {
      checkApiKeys();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('preferencesUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('preferencesUpdated', handleStorageChange);
    };
  }, []);

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

        <Button
          type="primary"
          icon={<SettingOutlined />}
          onClick={() => setSettingsOpen(true)}
        >
          设置
        </Button>
      </Layout.Header>

      {/* 主内容区 */}
      <Layout.Content style={{ background: '#f5f5f5' }}>
        <ChatInterface />
      </Layout.Content>

      {/* 设置弹窗 */}
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        onConfigured={() => {
          setApiKeysConfigured(true);
          message.success('API Keys 配置成功！');
        }}
      />
    </Layout>
  );
}
