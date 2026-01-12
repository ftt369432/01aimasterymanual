# 🧠 Constant Prompt: Development Automation & Consistency Guidelines

> This file defines the non-negotiable principles for how we build, document, and automate our app workflows. All developers, bots, and prompts must refer to this document to ensure alignment.

---

## ✅ 1. Centralized Resource Strategy

- Always centralize code, components, and configuration to avoid duplication.
- Shared logic and utilities must be placed in dedicated, discoverable locations.
- Reuse first, reinvent only when necessary.

---

## 🗺️ 2. Architecture Map is Mandatory

- Always maintain an up-to-date **architecture map** (visual or markdown) that:
  - Shows all features, connections, and system responsibilities.
  - Guides development and avoids architectural drift.
  - Is referenced in docs and visible to all prompts and bots.

---

## ⚛️ 3. Frontend Stack Standard: React + Vite

- All frontend code must use **React** with **Vite** (unless explicitly overridden for technical reasons).
- Enforce current React/Vite best practices:
  - Component modularity
  - Fast refresh
  - Optimized builds
- Maintain a `README.md` in each feature/component folder explaining usage.

---

## 📝 4. Markdown-Driven Documentation

- Every key component or feature must have an accompanying `.md` file that:
  - Explains **function**, **intent**, and **technical highlights**
  - Includes usage examples or diagrams where helpful
- Use `docs/`, `features/<feature>/README.md`, or inline `/docs/*.md` paths consistently.

---

## 🤖 5. Self-Service & Guided Bot Support

- Always update the **manual** used by:
  - Internal bots
  - In-app help systems
  - Developer onboarding tools
- Manual updates must be versioned and include:
  - Troubleshooting steps
  - How-to guides
  - API walkthroughs and logic explanations

---

## 🧩 6. Unified Prompt Entry Point

- All prompt engines and bot flows should start from a **shared entry point**:
  - Includes this document
  - References architecture map, key markdown docs, and manual
- This ensures that all automated systems maintain the same knowledge base and structure.

---

## 🎨 7. Design & UI Principles

- All UI designs must be:
  - **Beautiful**, not cookie-cutter or generic.
  - **Production-ready**, responsive, and fully featured.
- Follow the default UI stack:
  - **JSX syntax** with **Tailwind CSS** utility classes.
  - Use **React Hooks** for logic and interactivity.
  - Use **Lucide React** for all icons and logos.
- Do **not** add third-party UI libraries, icon sets, or design systems unless specifically requested.
- Use high-quality stock photos:
  - Always link directly to images hosted on [Unsplash](https://unsplash.com).
  - Do not download or embed custom images unless necessary.
  - Only use valid URLs known to work in production `<img src="..." />`.

---

> ⚙️ **This document is part of our live prompting infrastructure. Keep it updated with every major architectural or workflow change.**


