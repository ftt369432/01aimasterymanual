# 🔄 Context Providers

> React Context providers for global state management.

---

## Available Contexts

### ThemeContext
**File:** `ThemeContext.tsx`

Manages dark/light theme with localStorage persistence.

```tsx
import { useTheme } from '@/context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

---

### ProgressContext
**File:** `ProgressContext.tsx`

Tracks chapter completion status.

```tsx
import { useProgress } from '@/context/ProgressContext';

const { isComplete, markComplete } = useProgress();
```

---

### BookmarkContext
**File:** `BookmarkContext.tsx`

Manages saved/bookmarked chapters.

```tsx
import { useBookmarks } from '@/context/BookmarkContext';

const { bookmarks, toggleBookmark, isBookmarked } = useBookmarks();
```

---

## Provider Setup

All contexts are wrapped in `app/layout.tsx`:

```tsx
<ThemeProvider>
  <ProgressProvider>
    <BookmarkProvider>
      {children}
    </BookmarkProvider>
  </ProgressProvider>
</ThemeProvider>
```

---

> See `docs/ARCHITECTURE.md` for full system overview.
