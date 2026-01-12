'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ActionContextType {
    isActionMode: boolean;
    toggleActionMode: () => void;
}

const ActionContext = createContext<ActionContextType | undefined>(undefined);

export function ActionProvider({ children }: { children: ReactNode }) {
    const [isActionMode, setIsActionMode] = useState(false);

    // Optional: Persist to local storage
    useEffect(() => {
        const stored = localStorage.getItem('ai-mastery-action-mode');
        if (stored) {
            setIsActionMode(stored === 'true');
        }
    }, []);

    const toggleActionMode = () => {
        setIsActionMode(prev => {
            const newVal = !prev;
            localStorage.setItem('ai-mastery-action-mode', String(newVal));
            return newVal;
        });
    };

    return (
        <ActionContext.Provider value={{ isActionMode, toggleActionMode }}>
            {children}
        </ActionContext.Provider>
    );
}

export function useActionMode() {
    const context = useContext(ActionContext);
    if (context === undefined) {
        throw new Error('useActionMode must be used within an ActionProvider');
    }
    return context;
}
