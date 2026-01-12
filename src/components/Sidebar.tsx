'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { courseModules } from '@/lib/data';
import { ChevronRight, BookOpen, Lock, User, LogOut, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import AuthModal from './AuthModal';
import { useProgress } from '@/context/ProgressContext';
import { ThemeToggle } from './ThemeToggle';

export default function Sidebar() {
    const pathname = usePathname();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
    const { isCompleted, progressPercentage } = useProgress();

    return (
        <>
            <aside style={{
                width: '300px',
                height: 'calc(100vh - 2rem)',
                position: 'sticky',
                top: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                overflowY: 'auto',
                paddingRight: '1rem'
            }}>
                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        background: 'var(--primary)',
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        position: 'relative'
                    }}>
                        <BookOpen size={20} />
                        {progressPercentage > 0 && (
                            <div style={{
                                position: 'absolute',
                                bottom: -5,
                                right: -5,
                                background: 'var(--accent)',
                                fontSize: '0.6rem',
                                padding: '0.1rem 0.3rem',
                                borderRadius: '1rem',
                                fontWeight: 'bold'
                            }}>
                                {progressPercentage}%
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1rem', margin: 0, lineHeight: 1.2 }}>AI Mastery</h2>
                        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Manual v1.0</span>
                    </div>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    {courseModules.map((module, i) => (
                        <div key={i}>
                            <h3 style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                color: 'var(--primary)',
                                marginBottom: '0.75rem',
                                paddingLeft: '0.5rem',
                                fontWeight: 700
                            }}>
                                {module.title}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                {module.chapters.map((chapter, j) => {
                                    const href = `/manual/${module.slug}/${chapter.slug}`;
                                    const isActive = pathname === href;
                                    const completed = isCompleted(chapter.slug);

                                    return (
                                        <Link
                                            key={j}
                                            href={href}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                padding: '0.75rem 1rem',
                                                borderRadius: '0.5rem',
                                                fontSize: '0.9rem',
                                                background: isActive ? 'var(--primary)' : 'transparent',
                                                color: isActive ? 'white' : 'var(--foreground)',
                                                opacity: isActive ? 1 : (completed ? 0.9 : 0.7),
                                                transition: 'all 0.2s ease'
                                            }}
                                        >
                                            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {chapter.title}
                                            </span>
                                            {isActive ? <ChevronRight size={14} /> : (
                                                completed ? <CheckCircle size={14} style={{ color: 'var(--accent)' }} /> : <Lock size={12} style={{ opacity: 0.5 }} />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div className="glass-panel" style={{ padding: '1rem', flex: 1 }}>
                        {isLoggedIn ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 'bold' }}>
                                        JD
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>John Doe</span>
                                        <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Pro Member</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    style={{ background: 'none', border: 'none', color: 'var(--foreground)', opacity: 0.5, cursor: 'pointer' }}
                                >
                                    <LogOut size={16} />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsAuthModalOpen(true)}
                                className="btn btn-primary"
                                style={{ width: '100%', gap: '0.5rem', fontSize: '0.875rem', padding: '0.5rem' }}
                            >
                                <User size={16} />
                                Sign In / Join
                            </button>
                        )}
                    </div>
                    <ThemeToggle />
                </div>
            </aside>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
        </>
    );
}
