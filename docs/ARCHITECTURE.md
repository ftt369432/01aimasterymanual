# 🏗️ AI Mastery Manual - Architecture Map

> This document provides a visual and textual overview of the application architecture. Updated: 2026-01-11

---

## 📊 System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        AI MASTERY MANUAL                            │
│                     Next.js 16 Application                          │
└─────────────────────────────────────────────────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        ▼                         ▼                         ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│   CONTEXTS    │       │  COMPONENTS   │       │     DATA      │
│  (State Mgmt) │       │    (UI)       │       │   (Content)   │
└───────────────┘       └───────────────┘       └───────────────┘
        │                       │                       │
        ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ ThemeContext  │       │    Header     │       │   data.ts     │
│ ProgressCtx   │       │   Sidebar     │       │ (13 Modules)  │
│ BookmarkCtx   │       │  AuthModal    │       │ (60+ Chapters)│
└───────────────┘       └───────────────┘       └───────────────┘
```

---

## 📁 Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles & design tokens
│   ├── manual/             # Manual reading experience
│   │   ├── layout.tsx      # Manual-specific layout
│   │   ├── page.tsx        # Module listing
│   │   └── [slug]/         # Dynamic chapter routes
│   └── pricing/            # Pricing page
│
├── components/             # Reusable UI Components
│   ├── Header.tsx          # Top navigation bar
│   ├── Sidebar.tsx         # Module/chapter navigation
│   ├── AuthModal.tsx       # Authentication modal
│   ├── ThemeToggle.tsx     # Dark/light mode switch
│   └── ChapterTracker.tsx  # Progress tracking
│
├── context/                # React Context Providers
│   ├── ThemeContext.tsx    # Theme state management
│   ├── ProgressContext.tsx # Reading progress tracking
│   └── BookmarkContext.tsx # Bookmark management
│
└── lib/                    # Utilities & Data
    ├── data.ts             # All manual content (13 modules)
    └── utils.ts            # Helper functions
```

---

## 🎯 Core Features

| Feature | Location | Description |
|---------|----------|-------------|
| **Content Management** | `lib/data.ts` | 13 modules, 60+ chapters with rich HTML content |
| **Theme System** | `context/ThemeContext.tsx` | Dark/light mode with persistence |
| **Progress Tracking** | `context/ProgressContext.tsx` | Chapter completion state |
| **Bookmarks** | `context/BookmarkContext.tsx` | Save chapters for later |
| **Navigation** | `components/Sidebar.tsx` | Hierarchical module/chapter nav |
| **Authentication** | `components/AuthModal.tsx` | User sign-in modal |

---

## 📚 Content Modules

| # | Module | Chapters | Focus |
|---|--------|----------|-------|
| 1 | Foundations & Mindset | 3 | Core mental models |
| 2 | Understanding AI | 4 | Models, MCP, Tools |
| 3 | The Art of Building | 4 | Professional building habits |
| 4 | Agentic Workflows | 4 | Manager/Worker patterns |
| 5 | Business & Monetization | 4 | Launch & pricing strategy |
| 6 | The New IDE Landscape | 5 | AI development environments |
| 7 | Mastering Prompt-Code Loop | 5 | Iterative prompting |
| 8 | The Clean Code Console | 5 | Terminal & verification |
| 9 | Full-Stack Integration | 5 | DB, Auth, APIs, Deployment |
| 10 | Advanced AI Orchestration | 5 | Multi-agent systems |
| 11 | The Agentic Architect | 6 | ReAct, state, human-in-loop |
| 12 | The Zero-Cost Stack | 5 | Free tools & resources |
| 13 | Library of Concepts | 3 | Design patterns & ethics |
| 14 | Modern Builder's Toolkit | 3 | Speed & profit tools |

---

## 🔄 Data Flow

```
User Action
    │
    ▼
┌─────────────────┐
│    Component    │ (Header, Sidebar, Page)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Context      │ (Theme, Progress, Bookmark)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  localStorage   │ (Persistence)
└─────────────────┘
```

---

## 🎨 Design System

- **Framework**: Next.js 16 with App Router
- **Styling**: Custom CSS with glassmorphism effects
- **Icons**: Lucide React
- **Typography**: System fonts with custom weights
- **Colors**: Indigo/Purple gradient theme
- **Effects**: Glass panels, subtle animations

---

## 🔗 Key Dependencies

- `next`: 16.x - React framework
- `react`: 19.x - UI library
- `lucide-react`: Icon system
- `typescript`: Type safety

---

> ⚙️ **Keep this document updated with every major architectural change.**
