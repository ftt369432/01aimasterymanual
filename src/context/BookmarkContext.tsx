'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export interface Bookmark {
    path: string;
    title: string;
    timestamp: number;
}

interface BookmarkContextType {
    bookmarks: Bookmark[];
    addBookmark: (path: string, title: string) => void;
    removeBookmark: (path: string) => void;
    isBookmarked: (path: string) => boolean;
    toggleBookmark: (title: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
    const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
    const pathname = usePathname();

    // Load bookmarks from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('ai-mastery-bookmarks');
        if (stored) {
            try {
                setBookmarks(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse bookmarks', e);
            }
        }
    }, []);

    // Save bookmarks whenever they change
    useEffect(() => {
        if (bookmarks.length > 0) { // Only save if we have initialized (or empty is fine, but avoid overwriting with empty on init if we didn't check)
            // Actually, the first effect handles load. We should just save.
            // But we need to be careful not to save empty array before load happens.
            // However, in the first effect we set state.
            // Let's just save.
            localStorage.setItem('ai-mastery-bookmarks', JSON.stringify(bookmarks));
        }
    }, [bookmarks]);

    const addBookmark = (path: string, title: string) => {
        setBookmarks(prev => {
            if (prev.some(b => b.path === path)) return prev;
            return [...prev, { path, title, timestamp: Date.now() }];
        });
    };

    const removeBookmark = (path: string) => {
        setBookmarks(prev => prev.filter(b => b.path !== path));
    };

    const isBookmarked = (path: string) => {
        return bookmarks.some(b => b.path === path);
    };

    const toggleBookmark = (title: string) => {
        if (isBookmarked(pathname)) {
            removeBookmark(pathname);
        } else {
            addBookmark(pathname, title);
        }
    };

    return (
        <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked, toggleBookmark }}>
            {children}
        </BookmarkContext.Provider>
    );
}

export const useBookmarks = () => {
    const context = useContext(BookmarkContext);
    if (context === undefined) {
        throw new Error('useBookmarks must be used within a BookmarkProvider');
    }
    return context;
};
