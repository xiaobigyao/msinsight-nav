# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MindStudio Insight is an AI-powered copilot for MindStudio (Huawei Ascend's ML optimization tool). Users upload screenshots of MindStudio Insight UI, and the app uses vision AI to analyze performance metrics, diagnose bottlenecks, and provide optimization suggestions via multi-turn chat.

**Production URL**: https://msinsight-nav-dt8zoa2mzl.zh-cn.edgeone.cool/

## Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
```

No lint, test, or format scripts are configured. No ESLint or Prettier config exists.

### Knowledge Base Rebuild

```bash
cd data/scripts && npm install && python 04_generate_embeddings.py
```

## Architecture

### Request Flow

1. User uploads screenshot or sends message in `ChatInterface.tsx`
2. Client calls `/api/analyze` or `/api/chat` (Next.js API Routes, edge runtime)
3. API Route reads `SILICONFLOW_API_KEY` from env and proxies to SiliconFlow (Kimi-K2.5)
4. Streaming SSE response flows back to client for progressive rendering

### Key Architectural Decisions

- **API Key security**: `SILICONFLOW_API_KEY` is server-only. All AI calls go through API Routes that act as secure proxies. The client never touches the key.
- **Edge runtime**: All API routes use `export const runtime = 'edge'` for EdgeOne Pages compatibility.
- **Client-side persistence**: Chat sessions are stored in IndexedDB via Dexie (`src/lib/db.ts`). Active session ID tracked in localStorage.
- **No external database**: No Postgres/Redis/etc. All data lives in the browser's IndexedDB.

### Data Model (`src/types/index.ts`)

- `LocalSession` - A chat session with messages, tuning state, and metadata
- `Message` - A single message (user or assistant) with optional attachments and analysis results
- `ScreenshotAnalysis` - Structured result from screenshot analysis (metrics, issues, hypotheses, recommendations)
- `KnowledgeChunk` - A piece of the MindStudio documentation knowledge base

### Knowledge Retrieval Pipeline

Knowledge base is pre-built (Python scripts in `data/scripts/`) from MindStudio documentation. 350+ chunks are embedded with BGE-M3 and stored as JSON in `data/processed/`. At query time, the app performs in-memory vector similarity search (`src/lib/embedding.ts`).

### Dual Deployment Paths

- **EdgeOne Pages**: Primary deployment. Standard Next.js build with edge API routes.
- **SCF (Serverless Cloud Functions)**: Alternative backend in `scf/` directory. Independent Hono-based servers for analyze, chat, and embeddings. Used when EdgeOne Pages is not available.

## Tech Stack

- Next.js 16 + React 19 + TypeScript 5.9
- Ant Design 6 for UI components
- Dexie (IndexedDB) for client-side persistence
- SiliconFlow API (Kimi-K2.5 model) for vision and chat
- BGE-M3 embedding model for knowledge retrieval

## Environment Variables

```
SILICONFLOW_API_KEY=   # Required. SiliconFlow API key (server-only).
```

Copy `.env.example` to `.env.local` for local development. Key obtained from https://cloud.siliconflow.cn/account/ak.

## UI Language

The UI and all user-facing strings are in Chinese (zh-CN). Code comments and technical documentation are in Chinese. Keep this convention when modifying UI text.
