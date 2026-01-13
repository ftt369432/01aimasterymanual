import Link from 'next/link';
import { getCourseModules } from '@/lib/data';
import { cookies } from 'next/headers';
import { ArrowLeft } from 'lucide-react';

export default async function ManualPage() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('ai-mastery-lang')?.value || 'en';
    const courseModules = getCourseModules(lang);
    return (
        <div>
            <div style={{ marginBottom: '3rem' }}>
                <Link href="/" style={{
                    fontSize: '0.875rem',
                    opacity: 0.6,
                    marginBottom: '1.5rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <ArrowLeft size={14} /> Back to Home
                </Link>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Manual</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.8, maxWidth: '600px' }}>
                    Select a module from the sidebar or below to begin your journey.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {courseModules.map((module, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
                        <h2 style={{ marginBottom: '0.5rem' }}>{module.title}</h2>
                        <p style={{ marginBottom: '1.5rem', opacity: 0.7 }}>{module.desc}</p>

                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            {module.chapters.map((chapter, j) => (
                                <Link
                                    key={j}
                                    href={`/manual/${module.slug}/${chapter.slug}`}
                                    style={{
                                        padding: '1rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        borderRadius: '0.5rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        transition: 'background 0.2s'
                                    }}
                                    className="hover:bg-white/5"
                                >
                                    <span>{chapter.title}</span>
                                    <span style={{ opacity: 0.5, fontSize: '0.875rem' }}>Start →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
