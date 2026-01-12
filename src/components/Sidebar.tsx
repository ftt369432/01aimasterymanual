'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { courseModules } from '@/lib/data';
import { ChevronRight, ChevronDown, BookOpen, Lock, User, LogOut, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AuthModal from './AuthModal';
import { useProgress } from '@/context/ProgressContext';

interface SidebarProps {
    isOpen: boolean;
    onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isCompleted, progressPercentage } = useProgress();
    const [expandedModules, setExpandedModules] = useState<number[]>([0]); // First module expanded by default

    const toggleModule = (index: number) => {
        setExpandedModules(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 40,
                        display: 'none' // Only show on mobile via media query
                    }}
                    className="sidebar-overlay"
                />
            )}

            <aside
                className="sidebar glass-panel"
                style={{
                    position: 'fixed',
                    top: '60px', // Below header
                    left: 0,
                    bottom: 0,
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    overflowY: 'auto',
                    padding: '1rem',
                    borderRadius: 0,
                    borderRight: '1px solid var(--border)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                    zIndex: 50
                }}
            >
                {/* Progress Header */}
                <div style={{
                    padding: '1rem',
                    background: 'var(--secondary)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                }}>
                    <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                    }}>
                        <BookOpen size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '0.875rem', margin: 0, fontWeight: 600 }}>Your Progress</h2>
                        <div style={{
                            marginTop: '0.5rem',
                            height: '4px',
                            background: 'var(--border)',
                            borderRadius: '2px',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                height: '100%',
                                width: `${progressPercentage}%`,
                                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                                transition: 'width 0.3s ease'
                            }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', opacity: 0.7, marginTop: '0.25rem', display: 'block' }}>
                            {progressPercentage}% Complete
                        </span>
                    </div>
                </div>

                {/* Module Navigation */}
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, overflowY: 'auto' }}>
                    {courseModules.map((module, i) => {
                        const isExpanded = expandedModules.includes(i);
                        const moduleChaptersComplete = module.chapters.filter(ch => isCompleted(ch.slug)).length;
                        const moduleProgress = Math.round((moduleChaptersComplete / module.chapters.length) * 100);

                        return (
                            <div key={i} style={{ marginBottom: '0.25rem' }}>
                                {/* Module Header */}
                                <button
                                    onClick={() => toggleModule(i)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.75rem',
                                        background: isExpanded ? 'var(--secondary)' : 'transparent',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        cursor: 'pointer',
                                        color: 'var(--foreground)',
                                        textAlign: 'left',
                                        transition: 'background 0.2s ease'
                                    }}
                                >
                                    <span style={{
                                        width: '24px',
                                        height: '24px',
                                        borderRadius: '50%',
                                        background: moduleProgress === 100 ? 'var(--accent)' : 'var(--primary)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.7rem',
                                        fontWeight: 'bold',
                                        flexShrink: 0
                                    }}>
                                        {moduleProgress === 100 ? '✓' : i + 1}
                                    </span>
                                    <span style={{
                                        flex: 1,
                                        fontSize: '0.85rem',
                                        fontWeight: 600,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {module.title.replace(/^Module \d+: /, '')}
                                    </span>
                                    {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                </button>

                                {/* Chapter List */}
                                {isExpanded && (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.125rem',
                                        paddingLeft: '1rem',
                                        marginTop: '0.25rem'
                                    }}>
                                        {module.chapters.map((chapter, j) => {
                                            const href = `/manual/${module.slug}/${chapter.slug}`;
                                            const isActive = pathname === href;
                                            const completed = isCompleted(chapter.slug);

                                            return (
                                                <Link
                                                    key={j}
                                                    href={href}
                                                    onClick={onClose}
                                                    style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        padding: '0.6rem 0.75rem',
                                                        borderRadius: '0.375rem',
                                                        fontSize: '0.8rem',
                                                        background: isActive ? 'var(--primary)' : 'transparent',
                                                        color: isActive ? 'white' : 'var(--foreground)',
                                                        opacity: isActive ? 1 : (completed ? 0.9 : 0.7),
                                                        transition: 'all 0.2s ease',
                                                        borderLeft: isActive ? 'none' : `2px solid ${completed ? 'var(--accent)' : 'transparent'}`
                                                    }}
                                                >
                                                    <span style={{
                                                        whiteSpace: 'nowrap',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis'
                                                    }}>
                                                        {chapter.title}
                                                    </span>
                                                    {isActive ? (
                                                        <ChevronRight size={14} />
                                                    ) : completed ? (
                                                        <CheckCircle size={14} style={{ color: 'var(--accent)' }} />
                                                    ) : (
                                                        <Lock size={12} style={{ opacity: 0.4 }} />
                                                    )}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* User Section */}
                <div style={{
                    padding: '1rem',
                    background: 'var(--secondary)',
                    borderRadius: '0.75rem'
                }}>
                    {isLoggedIn ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: '2rem',
                                    height: '2rem',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    color: 'white'
                                }}>
                                    JD
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600, display: 'block' }}>John Doe</span>
                                    <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>Pro Member</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="btn-icon"
                                style={{ opacity: 0.5 }}
                            >
                                <LogOut size={16} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsAuthModalOpen(true)}
                            className="btn btn-primary"
                            style={{ width: '100%', gap: '0.5rem', fontSize: '0.875rem', padding: '0.75rem' }}
                        >
                            <User size={16} />
                            Sign In / Join
                        </button>
                    )}
                </div>
            </aside>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

            <style jsx global>{`
                @media (max-width: 1024px) {
                    .sidebar-overlay {
                        display: block !important;
                    }
                }
            `}</style>
        </>
    );
}
