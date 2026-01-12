'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn-icon"
                aria-label="Toggle theme"
            >
                <Sun size={18} style={{ display: theme === 'light' ? 'block' : 'none' }} />
                <Moon size={18} style={{ display: theme === 'dark' ? 'block' : 'none' }} />
                <Laptop size={18} style={{ display: theme === 'system' ? 'block' : 'none' }} />
            </button>

            {isOpen && (
                <>
                    <div
                        style={{ position: 'fixed', inset: 0, zIndex: 40 }}
                        onClick={() => setIsOpen(false)}
                    />
                    <div
                        className="glass-panel"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            marginTop: '0.5rem',
                            padding: '0.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.25rem',
                            zIndex: 50,
                            minWidth: '8rem'
                        }}
                    >
                        {[
                            { value: 'light', icon: Sun, label: 'Light' },
                            { value: 'dark', icon: Moon, label: 'Dark' },
                            { value: 'system', icon: Laptop, label: 'System' },
                        ].map((item) => (
                            <button
                                key={item.value}
                                onClick={() => {
                                    setTheme(item.value as 'light' | 'dark' | 'system');
                                    setIsOpen(false);
                                }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '0.25rem',
                                    border: 'none',
                                    background: theme === item.value ? 'var(--primary)' : 'transparent',
                                    color: theme === item.value ? 'white' : 'var(--foreground)',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    textAlign: 'left',
                                    width: '100%'
                                }}
                            >
                                <item.icon size={16} />
                                {item.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
