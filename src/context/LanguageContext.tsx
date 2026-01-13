'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    en: {
        'nav.search': 'Search',
        'nav.print': 'Print Manual',
        'nav.actionOn': 'Action Mode: ON',
        'nav.actionOff': 'Action Mode: OFF',
        'search.placeholder': 'Search the Cortex...',
        'search.noResults': 'No results found.',
        'search.hint': 'Type to search...',
        'module.chapter': 'Chapter',
        'manual.title': 'AI Mastery Manual',
        'manual.subtitle': 'Build. Deploy. Monetize.',
        'toc.title': 'Table of Contents',
        'print.generated': 'Generated on',
    },
    es: {
        'nav.search': 'Buscar',
        'nav.print': 'Imprimir Manual',
        'nav.actionOn': 'Modo Acción: ON',
        'nav.actionOff': 'Modo Acción: OFF',
        'search.placeholder': 'Buscar en el Cortex...',
        'search.noResults': 'No se encontraron resultados.',
        'search.hint': 'Escribe para buscar...',
        'module.chapter': 'Capítulo',
        'manual.title': 'Manual de Maestría en IA',
        'manual.subtitle': 'Construir. Desplegar. Monetizar.',
        'toc.title': 'Tabla de Contenidos',
        'print.generated': 'Generado el',
    }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('ai-mastery-lang') as Language;
        if (saved && (saved === 'en' || saved === 'es')) {
            setLanguage(saved);
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('ai-mastery-lang', language);
        // Update HTML lang attribute for SEO
        document.documentElement.lang = language;
        // Set cookie for Server Components
        document.cookie = `ai-mastery-lang=${language}; path=/; max-age=31536000`; // 1 year
    }, [language]);

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
