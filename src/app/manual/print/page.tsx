import { courseModules } from '@/lib/data';
import { Metadata } from 'next';
import { PrintAutoTrigger } from '@/components/PrintAutoTrigger';

export const metadata: Metadata = {
    title: 'AI Mastery Manual - Print View',
    description: 'Printable version of the AI Mastery Manual',
};

export default function PrintPage() {
    return (
        <div
            className="print-container"
            style={{
                backgroundColor: 'white',
                color: 'black',
                padding: '2rem',
                maxWidth: '100%',
                margin: '0 auto',
                minHeight: '100vh'
            }}
        >
            <PrintAutoTrigger />
            {/* Cover Page */}
            <div className="print-page break-after-page" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                color: 'black'
            }}>
                <h1 style={{ fontSize: '3.75rem', fontWeight: 900, marginBottom: '1rem', color: 'black' }}>
                    AI Mastery Manual
                </h1>
                <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '2rem' }}>
                    Build. Deploy. Monetize.
                </p>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    <p>Generated on {new Date().toLocaleDateString()}</p>
                    <p>The Complete Guide to AI Engineering & Operation</p>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="print-page break-after-page" style={{ marginBottom: '4rem', color: 'black' }}>
                <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', borderBottom: '2px solid black', paddingBottom: '0.5rem', color: 'black' }}>
                    Table of Contents
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {courseModules.map((module) => (
                        <div key={module.slug}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'black' }}>
                                {module.title}
                            </h3>
                            <ul style={{ listStyle: 'none', paddingLeft: '1rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                {module.chapters.map((chapter) => (
                                    <li key={chapter.slug} style={{ display: 'flex', justifyContent: 'space-between', color: '#374151', fontSize: '1rem' }}>
                                        <span>{chapter.title}</span>
                                        <span style={{ flex: 1, margin: '0 0.5rem', borderBottom: '1px dotted #d1d5db', position: 'relative', top: '-4px' }}></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            <div className="print-body">
                {courseModules.map((module) => (
                    <div key={module.slug} className="module-section" style={{ marginBottom: '3rem' }}>
                        {/* Module Title Page */}
                        <div className="break-before-page" style={{ paddingTop: '4rem', paddingBottom: '3rem', textAlign: 'center', color: 'black' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: 'black' }}>
                                {module.title}
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: '#4b5563', fontStyle: 'italic' }}>
                                {module.desc}
                            </p>
                        </div>

                        {/* Chapters */}
                        {module.chapters.map((chapter) => (
                            <div key={chapter.slug} className="chapter-section break-inside-avoid-page" style={{ marginBottom: '4rem' }}>
                                <h3 className="break-before-page" style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '0.5rem', color: 'black' }}>
                                    {chapter.title}
                                </h3>

                                {/* Content Injection */}
                                <div
                                    className="prose-print-content"
                                    style={{ textAlign: 'justify', color: 'black' }}
                                    dangerouslySetInnerHTML={{ __html: chapter.content }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
