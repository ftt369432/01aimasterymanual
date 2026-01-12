'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { courseModules } from '@/lib/data';

interface ProgressContextType {
    completedChapters: string[];
    markAsCompleted: (slug: string) => void;
    isCompleted: (slug: string) => boolean;
    progressPercentage: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
    const [completedChapters, setCompletedChapters] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('ai-mastery-progress');
        if (saved) {
            setCompletedChapters(JSON.parse(saved));
        }
        setIsLoaded(true);
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('ai-mastery-progress', JSON.stringify(completedChapters));
        }
    }, [completedChapters, isLoaded]);

    const markAsCompleted = (slug: string) => {
        if (!completedChapters.includes(slug)) {
            setCompletedChapters((prev) => [...prev, slug]);
        }
    };

    const isCompleted = (slug: string) => completedChapters.includes(slug);

    // Calculate percentage (mock total for now or calculate from data if imported)
    // We'll import data here or pass it in. For simplicity, let's just return 0 for now if we don't have total.
    // Actually, let's import courseModules to calculate total.

    const totalChapters = courseModules.reduce((acc, module) => acc + module.chapters.length, 0);
    const progressPercentage = totalChapters > 0 ? Math.round((completedChapters.length / totalChapters) * 100) : 0;

    return (
        <ProgressContext.Provider value={{ completedChapters, markAsCompleted, isCompleted, progressPercentage }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
}
