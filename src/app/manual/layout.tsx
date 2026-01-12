'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { ProgressProvider } from '@/context/ProgressContext';
import { useState } from 'react';

export default function ManualLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <ProgressProvider>
            <Header
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                isSidebarOpen={isSidebarOpen}
            />
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <main style={{
                marginTop: '60px', // Header height
                marginLeft: isSidebarOpen ? '300px' : '0', // Sidebar width
                padding: '2rem',
                minHeight: 'calc(100vh - 60px)',
                transition: 'margin-left 0.3s ease',
                maxWidth: isSidebarOpen ? 'calc(100% - 300px)' : '100%'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {children}
                </div>
            </main>
        </ProgressProvider>
    );
}
