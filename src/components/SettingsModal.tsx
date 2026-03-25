'use client';

import { useEffect, useState } from 'react';
import { Modal, Input, Form, message, Space, Button, Divider, Typography } from 'antd';
import { preferencesManager } from '@/lib/db';

const { Text, Title, Paragraph } = Typography;

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  onConfigured?: () => void;
}

export default function SettingsModal({ open, onClose, onConfigured }: SettingsModalProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      // 加载当前配置
      const prefs = preferencesManager.getPreferences();
      form.setFieldsValue({
        workerUrl: prefs.workerUrl || '',
        siliconflowApiKey: prefs.siliconflowApiKey || '',
      });
    }
  }, [open, form]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      // 验证至少配置一个
      if (!values.workerUrl && !values.siliconflowApiKey) {
        message.error('请至少配置 Worker URL 或 API Key 其中一项');
        return;
      }

      // 保存配置
      if (values.workerUrl) {
        preferencesManager.setWorkerUrl(values.workerUrl.trim());
      }
      if (values.siliconflowApiKey) {
        preferencesManager.setApiKey(values.siliconflowApiKey.trim());
      }

      message.success('配置成功！');

      // 触发配置完成回调
      if (onConfigured) {
        onConfigured();
      }

      onClose();
    } catch (error) {
      console.error('保存配置失败:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="API Keys 配置"
      open={open}
      onCancel={onClose}
      onOk={handleSubmit}
      okText="保存配置"
      confirmLoading={loading}
      width={600}
    >
      <Divider />

      <div style={{ marginBottom: 24 }}>
        <Title level={5}>配置说明</Title>
        <Paragraph type="secondary">
          本工具使用硅基流动的 AI 服务，请确保已在硅基流动平台创建账户并获取 API Key。
        </Paragraph>

        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* 硅基流动 */}
          <div>
            <Text strong>硅基流动（Kimi-K2.5 多模态模型）</Text>
            <br />
            <Text type="secondary" style={{ fontSize: 12 }}>
              用于截图分析、对话和知识库向量检索
            </Text>
            <br />
            <a
              href="https://cloud.siliconflow.cn/account/ak"
              target="_blank"
              rel="noopener noreferrer"
            >
              获取 API Key →
            </a>
          </div>
        </Space>
      </div>

      <Divider />

      <Form form={form} layout="vertical">
        <Form.Item
          label="硅基流动 API Key"
          name="siliconflowApiKey"
          rules={[{ required: true, message: '请输入硅基流动 API Key' }]}
        >
          <Input.Password
            placeholder="请输入硅基流动 API Key"
            style={{ fontFamily: 'monospace' }}
          />
        </Form.Item>
      </Form>

      <Divider />

      <div>
        <Text type="secondary" style={{ fontSize: 12 }}>
          ⚠️ API Key 将存储在浏览器本地（localStorage），不会上传到任何服务器
        </Text>
      </div>
    </Modal>
  );
}
