# AI Mastery Manual - Project Constitution

> **Status**: Living Document  
> **Purpose**: Defines the non-negotiable principles for how we build, document, and automate this platform. All agents and developers must adhere to these rules.

---

## 🧠 Part 1: Core Philosophy (The Manifest)

### 1. Debug First & Loudly
- **Console Logs are Mandatory**: You must include meaningful `console.log` statements in all logic flows (data fetching, state changes, interactions).
- **Traceability**: "Silent failures" are unacceptable. If it breaks, the logs must tell us *exactly* where.
- **Self-Correction**: When errors appear in the console, prioritize fixing them immediately. Do not build new features on top of broken code.

### 2. Plan First, Build Second
- **Reasoning**: "Rebuilding things breaks things." Improvising complex systems leads to spaghetti code.
- **The Rule**:
  - **Simple Tasks**: Direct implementation is permitted.
  - **Complex Systems**: MUST follow a **"Plan → Architect → Build"** workflow. Create a mini-spec or checklist before writing code.

### 3. Centralized Intelligence
- **Single Source of Truth**: Shared logic, constants, and types must be centralized. Avoid duplication.
- **Architecture Map**: Maintain a mental or written map of how features connect. Don't add a room to the house without checking the blueprints.

---

## 🛠️ Part 2: Technical Standards

### 1. The Stack
- **Framework**: **Next.js** (App Router). *Do not use Vite/React Router patterns.*
- **Styling**: CSS Modules or Global CSS with CSS Variables for theming.
- **Icons**: `lucide-react` only.
- **State**: React Context for global state (Theme, Auth, Progress).

### 2. Documentation Strategy
- **Markdown-Driven**: Every complex feature needs a `.md` file explaining its **intent** and **usage**.
- **The "Why"**: Code explains *how*; documentation explains *why*.

---

## 📚 Part 3: The Syllabus (Curriculum)

This manual is structured to take a user from "Curious" to "AI Consultant".

### Module 1: Foundations & Mindset
*The prerequisite mental models for success.*
- **Introduction**: What is the AI Mastery Manual?
- **The "Why"**: Moving beyond "prompt engineering" to "system engineering".
- **Good Habits**:
  - **Console Logging**: Why visibility saves time.
  - **Atomic Commits**: Saving work safely.
  - **The "Plan First" Discipline**: Why we measure twice and cut once.

### Module 2: The Art of Building
*How to construct software in the AI age.*
- **Simple vs. Complex**:
  - *Simple Apps*: Quick scripts, single-file prototypes. (Don't over-engineer).
  - *Complex Systems*: Multi-agent orchestrators, SaaS platforms. (Requires guided structure).
- **The Architecture Map**: How to visualize your system before coding.
- **Iterative Development**: Building the skeleton, then adding the muscle.

### Module 3: Agentic Workflows
*Creating autonomous workers.*
- **The Manager/Worker Pattern**: Delegating tasks.
- **Tool Use**: Giving AI hands (Filesystem, Web Search, API calls).
- **Memory & Context**: How to make agents "remember".

### Module 4: Business & Monetization
*Turning skills into income.*
- **The "Productized Service"**: Stop selling "AI", start selling "Speed" and "Savings".
- **Structuring Your Offer**: How to price and package AI consulting.
- **The First $10k Contract**: A roadmap for client acquisition.
