'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Maximize, Minimize, Bookmark, BookOpen, Trash2, Menu, X, Search, Zap, Printer } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBookmarks } from '@/context/BookmarkContext';
import { useActionMode } from '@/context/ActionContext';
import { useSearch } from '@/context/SearchContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    onToggleSidebar?: () => void;
    isSidebarOpen?: boolean;
}

export default function Header({ onToggleSidebar, isSidebarOpen }: HeaderProps) {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { bookmarks, toggleBookmark, isBookmarked, removeBookmark } = useBookmarks();
    const pathname = usePathname();
    const { isActionMode, toggleActionMode } = useActionMode();
    const { openSearch, isSearchOpen, closeSearch } = useSearch(); // Added isSearchOpen and closeSearch from context

    const [showBookmarks, setShowBookmarks] = useState(false);



    const toggleFullscreen = async () => {
        try {
            const elem = document.documentElement as any;
            const isFs = document.fullscreenElement || (document as any).webkitFullscreenElement;

            if (!isFs) {
                if (elem.requestFullscreen) await elem.requestFullscreen();
                else if (elem.webkitRequestFullscreen) await elem.webkitRequestFullscreen();
                setIsFullscreen(true);
            } else {
                if (document.exitFullscreen) await document.exitFullscreen();
                else if ((document as any).webkitExitFullscreen) await (document as any).webkitExitFullscreen();
                setIsFullscreen(false);
            }
        } catch (err) {
            console.error("Error toggling fullscreen:", err);
        }
    };

    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement || !!(document as any).webkitFullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleChange);
        document.addEventListener('webkitfullscreenchange', handleChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleChange);
            document.removeEventListener('webkitfullscreenchange', handleChange);
        };
    }, []);

    const isCurrentBookmarked = isBookmarked(pathname);

    return (
        <header className="glass-panel" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 1.5rem',
            borderRadius: 0,
            borderBottom: '1px solid var(--border)',
            backdropFilter: 'blur(20px)',
            background: 'rgba(var(--background-rgb), 0.8)'
        }}>
            {/* Left Section: Menu + Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {onToggleSidebar && (
                    <button
                        onClick={onToggleSidebar}
                        className="btn-icon"
                        aria-label="Toggle sidebar"
                        style={{ padding: '0.5rem' }}
                    >
                        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                )}
                <Link href="/" style={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--foreground)'
                }}>
                    <BookOpen size={24} style={{ color: 'var(--primary)' }} />
                    <span className="text-gradient">AI Mastery Manual</span>
                </Link>
            </div>

            {/* Center Section: Search (placeholder for future) */}
            <div style={{ flex: 1, maxWidth: '400px', margin: '0 2rem' }}>
                {/* Future search bar */}
            </div>

            {/* Right Section: Actions */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                {/* Bookmark Current Page */}
                <button
                    onClick={() => toggleBookmark(document.title || pathname)}
                    className="btn-icon"
                    aria-label={isCurrentBookmarked ? "Remove bookmark" : "Bookmark this page"}
                    style={{ color: isCurrentBookmarked ? 'var(--primary)' : 'var(--foreground)' }}
                >
                    <Bookmark size={18} fill={isCurrentBookmarked ? 'currentColor' : 'none'} />
                </button>

                {/* Search Trigger */}
                <button
                    onClick={openSearch}
                    className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    title="Search (Cmd+K)"
                >
                    <Search className="w-5 h-5" />
                    <span className="hidden md:inline text-xs text-gray-500 font-mono group-hover:text-gray-400">Cmd+K</span>
                </button>

                {/* Action Mode Toggle */}

                <button
                    onClick={toggleActionMode}
                    className="btn-icon"
                    aria-label={isActionMode ? "Exit Action Mode" : "Enter Action Mode (Code Only)"}
                    style={{ color: isActionMode ? '#fbbf24' : 'var(--foreground)' }}
                    title="Action Mode (Code Only)"
                >
                    <Zap size={18} fill={isActionMode ? 'currentColor' : 'none'} />
                </button>

                {/* Print/Export Button */}
                <Link
                    href="/manual/print"
                    className="btn-icon flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    title="Export as PDF"
                    target="_blank"
                >
                    <Printer size={18} />
                </Link>

                {/* Bookmarks Toggle */}
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => setShowBookmarks(!showBookmarks)}
                        className="btn-icon"
                        aria-label="View bookmarks"
                    >
                        <BookOpen size={18} />
                        {bookmarks.length > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-2px',
                                background: 'var(--primary)',
                                color: 'white',
                                fontSize: '0.65rem',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {bookmarks.length}
                            </span>
                        )}
                    </button>

                    {showBookmarks && (
                        <>
                            <div
                                style={{ position: 'fixed', inset: 0, zIndex: 90 }}
                                onClick={() => setShowBookmarks(false)}
                            />
                            <div className="glass-panel" style={{
                                position: 'absolute',
                                top: 'calc(100% + 0.5rem)',
                                right: 0,
                                width: '20rem',
                                padding: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                zIndex: 100
                            }}>
                                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                                    Your Bookmarks
                                </h3>
                                {bookmarks.length === 0 ? (
                                    <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>No bookmarks yet.</p>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '300px', overflowY: 'auto' }}>
                                        {bookmarks.map((b) => (
                                            <div key={b.path} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '0.5rem',
                                                padding: '0.5rem',
                                                borderRadius: '0.5rem',
                                                background: 'var(--secondary)'
                                            }}>
                                                <Link
                                                    href={b.path}
                                                    onClick={() => setShowBookmarks(false)}
                                                    style={{
                                                        fontSize: '0.875rem',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        flex: 1
                                                    }}
                                                >
                                                    {b.title}
                                                </Link>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeBookmark(b.path);
                                                    }}
                                                    style={{
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        opacity: 0.5,
                                                        padding: '0.25rem',
                                                        color: 'var(--foreground)'
                                                    }}
                                                >
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)', margin: '0 0.5rem' }} />

                {/* Fullscreen Toggle */}
                <button
                    onClick={toggleFullscreen}
                    className="btn-icon"
                    aria-label="Toggle fullscreen"
                >
                    {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Language Switcher */}
                <LanguageSwitcher />
            </div>

        </header>
    );
}
