'use client';

import { useEffect } from 'react';
import { useProgress } from '@/context/ProgressContext';
import { CheckCircle } from 'lucide-react';

export default function ChapterTracker({ slug }: { slug: string }) {
    const { markAsCompleted, isCompleted } = useProgress();

    useEffect(() => {
        // Auto-mark as completed after 1 second of "reading"
        const timer = setTimeout(() => {
            markAsCompleted(slug);
        }, 1000);

        return () => clearTimeout(timer);
    }, [slug, markAsCompleted]);

    if (isCompleted(slug)) {
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginBottom: '1rem'
            }}>
                <CheckCircle size={16} />
                <span>Read</span>
            </div>
        );
    }

    return null;
}
