'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' }
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn-icon text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                aria-label="Change Language"
            >
                <Globe size={18} />
                <span className="text-xs uppercase font-mono hidden md:inline">{language}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-[#0f0f11] border border-white/10 rounded-lg shadow-xl py-1 overflow-hidden z-[100]">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code as 'en' | 'es');
                                setIsOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white flex items-center justify-between group"
                        >
                            <span>{lang.label}</span>
                            {language === lang.code && <Check size={14} className="text-indigo-400" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
