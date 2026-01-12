# 📚 Lib - Utilities & Data

> Core data and utility functions.

---

## Files

### data.ts
**The Content Engine**

Contains all manual content structured as:

```typescript
export const courseModules = [
  {
    title: "Module 1: ...",
    slug: "module-slug",
    desc: "Module description",
    chapters: [
      {
        title: "Chapter Title",
        slug: "chapter-slug",
        content: `<h3>HTML Content</h3>...`
      }
    ]
  }
];
```

**Current Content:**
- 14 Modules
- 60+ Chapters
- Rich HTML with glassmorphism styling
- Cheat sheets at end of each chapter

---

### utils.ts
**Helper Functions**

Common utilities used across the app.

---

## Adding Content

To add a new module:

1. Open `data.ts`
2. Add new module object to `courseModules` array
3. Follow existing structure (title, slug, desc, chapters)
4. Each chapter needs: title, slug, content (HTML string)

---

> See `docs/ARCHITECTURE.md` for full system overview.
