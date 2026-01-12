# 📦 Components

> Reusable UI components for the AI Mastery Manual.

---

## Overview

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Header.tsx` | Top navigation bar | Theme toggle, bookmarks, auth |
| `Sidebar.tsx` | Module/chapter navigation | Collapsible, progress indicators |
| `AuthModal.tsx` | User authentication | Sign in/up modal |
| `ThemeToggle.tsx` | Dark/light mode switch | Persisted preference |
| `ChapterTracker.tsx` | Progress tracking | Completion indicators |

---

## Usage

All components use:
- **Lucide React** for icons
- **React Context** for state (Theme, Progress, Bookmarks)
- **CSS Modules / Global CSS** for styling

---

## Adding New Components

1. Create component in this directory
2. Use TypeScript (`.tsx`)
3. Import contexts as needed
4. Update this README

---

> See `docs/ARCHITECTURE.md` for full system overview.
