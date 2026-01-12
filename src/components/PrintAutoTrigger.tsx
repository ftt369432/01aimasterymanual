'use client';

import { useEffect } from 'react';

export function PrintAutoTrigger() {
    useEffect(() => {
        // slight delay to ensure content render
        const timer = setTimeout(() => {
            window.print();
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return null;
}
