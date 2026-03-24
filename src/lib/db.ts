// IndexedDB 封装

import Dexie, { Table } from 'dexie';
import { TuningPhase } from '@/types';
import type { LocalSession, LocalPreferences } from '@/types';

export class MindStudioDatabase extends Dexie {
  sessions!: Table<LocalSession>;

  constructor() {
    super('MindStudioInsightDB');
    this.version(1).stores({
      sessions: 'sessionId, createdAt, updatedAt',
    });
  }
}

export const db = new MindStudioDatabase();

// 会话管理 API
export const sessionManager = {
  async createSession(): Promise<string> {
    const sessionId = crypto.randomUUID();
    const now = new Date().toISOString();

    const session: LocalSession = {
      sessionId,
      createdAt: now,
      updatedAt: now,
      tuningState: {
        phase: TuningPhase.INITIAL,
        completedSteps: [],
        findings: {
          bottlenecks: [],
          analyzedScreenshots: 0,
          metrics: {},
        },
      },
      messages: [],
      metadata: {
        title: `会话 ${new Date().toLocaleString('zh-CN')}`,
        screenshotCount: 0,
        problemTags: [],
        resolved: false,
      },
    };

    await db.sessions.add(session);
    return sessionId;
  },

  async getSession(sessionId: string): Promise<LocalSession | undefined> {
    return await db.sessions.get(sessionId);
  },

  async getCurrentSession(): Promise<LocalSession> {
    let sessionId = localStorage.getItem('currentSessionId');

    if (!sessionId) {
      sessionId = await this.createSession();
      localStorage.setItem('currentSessionId', sessionId);
    }

    const session = await this.getSession(sessionId);
    if (!session) {
      throw new Error('Session not found');
    }

    return session;
  },

  async updateSession(sessionId: string, updates: Partial<LocalSession>): Promise<void> {
    await db.sessions.update(sessionId, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  },

  async appendMessage(
    sessionId: string,
    message: Omit<LocalSession['messages'][number], 'id' | 'timestamp'>
  ): Promise<string> {
    const session = await this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    const newMessage = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };

    await this.updateSession(sessionId, {
      messages: [...session.messages, newMessage],
      metadata: {
        ...session.metadata,
        screenshotCount: message.attachments?.length
          ? session.metadata.screenshotCount + (message.attachments?.length || 0)
          : session.metadata.screenshotCount,
      },
    });

    return newMessage.id;
  },

  async updateMessage(
    sessionId: string,
    messageId: string,
    updates: Partial<LocalSession['messages'][number]>
  ): Promise<void> {
    const session = await this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    const messages = session.messages.map((msg) =>
      msg.id === messageId ? { ...msg, ...updates } : msg
    );

    await this.updateSession(sessionId, { messages });
  },

  async listSessions(): Promise<LocalSession[]> {
    return await db.sessions.orderBy('updatedAt').reverse().toArray();
  },

  async deleteSession(sessionId: string): Promise<void> {
    await db.sessions.delete(sessionId);

    // 如果删除的是当前会话，清除标记
    if (localStorage.getItem('currentSessionId') === sessionId) {
      localStorage.removeItem('currentSessionId');
    }
  },

  async exportSession(sessionId: string): Promise<Blob> {
    const session = await this.getSession(sessionId);
    if (!session) throw new Error('Session not found');

    const json = JSON.stringify(session, null, 2);
    return new Blob([json], { type: 'application/json' });
  },

  async importSession(blob: Blob): Promise<string> {
    const text = await blob.text();
    const session = JSON.parse(text) as LocalSession;

    // 生成新 ID
    session.sessionId = crypto.randomUUID();
    session.createdAt = new Date().toISOString();
    session.updatedAt = new Date().toISOString();

    await db.sessions.add(session);
    return session.sessionId;
  },
};

// 偏好设置管理
export const preferencesManager = {
  getPreferences(): LocalPreferences {
    const stored = localStorage.getItem('preferences');
    const defaults: LocalPreferences = {
      guidanceStyle: 'proactive',
      detailLevel: 'moderate',
      theme: 'dark',
    };

    return stored ? { ...defaults, ...JSON.parse(stored) } : defaults;
  },

  setPreferences(updates: Partial<LocalPreferences>): void {
    const current = this.getPreferences();
    const updated = { ...current, ...updates };
    localStorage.setItem('preferences', JSON.stringify(updated));
  },

  getApiKey(): string | undefined {
    const prefs = this.getPreferences();
    return prefs.siliconflowApiKey;
  },

  setApiKey(key: string): void {
    this.setPreferences({ siliconflowApiKey: key });
  },
};

// 类型导出
export type { LocalSession, LocalPreferences };
