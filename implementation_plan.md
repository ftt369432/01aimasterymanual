# AI Mastery Manual - Implementation Plan

## Project Overview
A premium educational platform designed as an interactive "manual" for AI building and consulting. The platform combines the depth of a book with the interactivity of a modern web application, featuring a yearly subscription model, progress tracking, and certification.

## Core Features

### 1. User Experience (UX/UI)
- **Book-Reader Interface**: A clean, distraction-free reading mode with easy navigation.
- **"Jump to Goods" Indexing**: Deep linking and a powerful search/index system to allow users to skip to specific technical implementations.
- **Premium Aesthetic**: Glassmorphism, dark mode, and high-end typography to convey authority and value.

### 2. Content Modules (The Curriculum)
- **Foundation**: Simple app building, terminology, and possibilities.
- **Agentic Workflows**: Building agents using tools like n8n and custom code.
- **Business & Monetization**: How to become an AI consultant, business ideas, and monetization strategies.

### 3. Platform Features
- **Authentication**: Secure user accounts.
- **Subscription Gate**: Yearly commitment model (content access control).
- **Progress Tracking**: "Schooling program" feel with read status and module completion.
- **Certification**: Auto-generated certificate upon course completion.

## Tech Stack
- **Framework**: Next.js (React) - for SEO, routing, and server-side capabilities.
- **Styling**: Vanilla CSS (with CSS Modules or global styles) for custom, premium design.
- **State Management**: React Context / Hooks.
- **Icons**: Lucide React or similar.

## Phase 1: Setup & Foundation
- [x] Initialize Next.js project.
- [x] Set up the global design system (CSS variables for colors, typography).
- [x] Create the basic layout (Sidebar/Index, Content Area).

## Phase 2: Core Components
- [x] `BookReader`: The main content display component.
- [x] `TableOfContents`: The interactive index (Sidebar).
- [x] `AuthModal`: Login/Signup interface (mocked for initial build).

## Phase 3: Content Implementation
- [x] Create data structure for chapters and lessons.
- [ ] Populate initial content for "Foundation" and "Agentic Workflows".

## Phase 4: "Schooling" Features
- [x] Progress bar (Chapter completion tracking implemented).
- [ ] Quiz/Checkpoint components.
- [ ] Certificate generation view.
