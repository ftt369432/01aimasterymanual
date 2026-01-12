'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { Maximize, Minimize, Bookmark, BookOpen, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useBookmarks } from '@/context/BookmarkContext';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { bookmarks, toggleBookmark, isBookmarked, removeBookmark } = useBookmarks();
    const pathname = usePathname();
    const [showBookmarks, setShowBookmarks] = useState(false);

    // Handle Fullscreen
    const toggleFullscreen = async () => {
        console.log("Toggle fullscreen clicked");
        try {
            const elem = document.documentElement as any;
            const isFullscreen = document.fullscreenElement || (document as any).webkitFullscreenElement || (document as any).mozFullScreenElement || (document as any).msFullscreenElement;

            console.log("Current fullscreen state:", isFullscreen);

            if (!isFullscreen) {
                console.log("Attempting to enter fullscreen...");
                if (elem.requestFullscreen) {
                    await elem.requestFullscreen();
                } else if (elem.webkitRequestFullscreen) { /* Safari */
                    await elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE11 */
                    await elem.msRequestFullscreen();
                } else if (elem.mozRequestFullScreen) { /* Firefox */
                    await elem.mozRequestFullScreen();
                }
                console.log("Entered fullscreen");
                setIsFullscreen(true);
            } else {
                console.log("Attempting to exit fullscreen...");
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if ((document as any).webkitExitFullscreen) { /* Safari */
                    await (document as any).webkitExitFullscreen();
                } else if ((document as any).msExitFullscreen) { /* IE11 */
                    await (document as any).msExitFullscreen();
                } else if ((document as any).mozCancelFullScreen) { /* Firefox */
                    await (document as any).mozCancelFullScreen();
                }
                console.log("Exited fullscreen");
                setIsFullscreen(false);
            }
        } catch (err) {
            console.error("Error toggling fullscreen:", err);
        }
    };

    // Listen for fullscreen changes (ESC key, etc.)
    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement || !!(document as any).webkitFullscreenElement || !!(document as any).mozFullScreenElement || !!(document as any).msFullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleChange);
        document.addEventListener('webkitfullscreenchange', handleChange);
        document.addEventListener('mozfullscreenchange', handleChange);
        document.addEventListener('MSFullscreenChange', handleChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleChange);
            document.removeEventListener('webkitfullscreenchange', handleChange);
            document.removeEventListener('mozfullscreenchange', handleChange);
            document.removeEventListener('MSFullscreenChange', handleChange);
        };
    }, []);

    const isCurrentBookmarked = isBookmarked(pathname);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none'
        }}>
            {/* Logo / Title Area */}
            <div style={{ pointerEvents: 'auto' }}>
                <Link href="/" style={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--foreground)'
                }}>
                    <span className="text-gradient">AI Mastery</span>
                </Link>
            </div>

            {/* Actions Area */}
            <div className="glass-panel" style={{
                pointerEvents: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
                borderRadius: '9999px', // Pill shape container
                transform: 'none' // Override hover transform to prevent moving
            }}>
                {/* Toggle Bookmark for Current Page */}
                <button
                    onClick={() => toggleBookmark(document.title || pathname)}
                    className="btn-icon"
                    aria-label={isCurrentBookmarked ? "Remove bookmark" : "Bookmark this page"}
                    style={{ color: isCurrentBookmarked ? 'var(--primary)' : 'var(--foreground)' }}
                >
                    <Bookmark size={18} fill={isCurrentBookmarked ? 'currentColor' : 'none'} />
                </button>

                {/* View Bookmarks List */}
                <div style={{ position: 'relative' }}>
                    <button
                        onClick={() => setShowBookmarks(!showBookmarks)}
                        className="btn-icon"
                        aria-label="View bookmarks"
                    >
                        <BookOpen size={18} />
                    </button>

                    {showBookmarks && (
                        <>
                            <div
                                style={{ position: 'fixed', inset: 0, zIndex: 40 }}
                                onClick={() => setShowBookmarks(false)}
                            />
                            <div className="glass-panel" style={{
                                position: 'absolute',
                                top: '120%',
                                right: 0,
                                width: '20rem',
                                padding: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem',
                                zIndex: 50
                            }}>
                                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>Your Bookmarks</h3>
                                {bookmarks.length === 0 ? (
                                    <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>No bookmarks yet.</p>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '60vh', overflowY: 'auto' }}>
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
                                                        padding: '0.25rem'
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

                <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)', margin: '0 0.25rem' }} />

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
            </div>
        </header>
    );
}
