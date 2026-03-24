'use client';

import { ConfigProvider, theme, App } from 'antd';

export function AntdRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  );
}
