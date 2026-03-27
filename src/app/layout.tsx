import type { Metadata } from 'next';
import { AntdRegistry } from '@/components/AntdRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'MindStudio Insight 副驾驶员',
  description: 'AI 驱动的性能调优助手',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <AntdRegistry>
          {/* 纯白极简 - 无背景装饰 */}
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
