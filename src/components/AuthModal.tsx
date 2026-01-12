'use client';

import { X, Github, Mail } from 'lucide-react';
import { useState } from 'react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLogin, setIsLogin] = useState(true);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(5px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
        }} onClick={onClose}>
            <div
                className="glass-panel"
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '2rem',
                    position: 'relative',
                    background: '#0f172a', /* Solid background for modal to ensure readability */
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--foreground)',
                        opacity: 0.5,
                        cursor: 'pointer'
                    }}
                >
                    <X size={20} />
                </button>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                        {isLogin ? 'Welcome Back' : 'Join the Manual'}
                    </h2>
                    <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                        {isLogin ? 'Sign in to continue your progress' : 'Get full access to all modules'}
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button className="btn" style={{
                        background: '#fff',
                        color: '#000',
                        gap: '0.75rem',
                        justifyContent: 'center'
                    }}>
                        <Github size={18} />
                        Continue with GitHub
                    </button>
                    <button className="btn" style={{
                        background: 'rgba(255,255,255,0.1)',
                        color: '#fff',
                        gap: '0.75rem',
                        justifyContent: 'center'
                    }}>
                        <Mail size={18} />
                        Continue with Email
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    opacity: 0.5,
                    fontSize: '0.75rem'
                }}>
                    <div style={{ flex: 1, height: '1px', background: 'currentColor' }} />
                    <span>OR</span>
                    <div style={{ flex: 1, height: '1px', background: 'currentColor' }} />
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', opacity: 0.8 }}>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem', opacity: 0.8 }}>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '0.5rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
                    <span style={{ opacity: 0.7 }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                    </span>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--primary)',
                            cursor: 'pointer',
                            fontWeight: 600
                        }}
                    >
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                </div>
            </div>
        </div>
    );
}
