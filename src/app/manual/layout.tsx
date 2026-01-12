import Sidebar from '@/components/Sidebar';
import { ProgressProvider } from '@/context/ProgressContext';

export default function ManualLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProgressProvider>
            <div className="container" style={{
                display: 'flex',
                gap: '3rem',
                maxWidth: '1400px',
                paddingTop: '6rem'
            }}>
                <Sidebar />
                <main style={{
                    flex: 1,
                    paddingTop: '1rem',
                    paddingBottom: '4rem',
                    minWidth: 0 /* Prevents flex child from overflowing */
                }}>
                    {children}
                </main>
            </div>
        </ProgressProvider>
    );
}
