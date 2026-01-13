import { getCourseModules } from '@/lib/data';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ChapterTracker from '@/components/ChapterTracker';
import ContentWrapper from '@/components/ContentWrapper';

export default async function ChapterPage({
    params,
}: {
    params: Promise<{ moduleSlug: string; chapterSlug: string }>;
}) {
    const { moduleSlug, chapterSlug } = await params;
    const cookieStore = await cookies();
    const lang = cookieStore.get('ai-mastery-lang')?.value || 'en';
    const courseModules = getCourseModules(lang);

    const module = courseModules.find((m) => m.slug === moduleSlug);
    const chapter = module?.chapters.find((c) => c.slug === chapterSlug);

    if (!module || !chapter) {
        notFound();
    }

    // Find next and previous chapters
    const currentModuleIndex = courseModules.findIndex((m) => m.slug === moduleSlug);
    const currentChapterIndex = module.chapters.findIndex((c) => c.slug === chapterSlug);

    let prevChapter = null;
    let nextChapter = null;

    // Previous
    if (currentChapterIndex > 0) {
        prevChapter = {
            ...module.chapters[currentChapterIndex - 1],
            href: `/manual/${moduleSlug}/${module.chapters[currentChapterIndex - 1].slug}`
        };
    } else if (currentModuleIndex > 0) {
        const prevModule = courseModules[currentModuleIndex - 1];
        const lastChapterOfPrevModule = prevModule.chapters[prevModule.chapters.length - 1];
        prevChapter = {
            ...lastChapterOfPrevModule,
            href: `/manual/${prevModule.slug}/${lastChapterOfPrevModule.slug}`
        };
    }

    // Next
    if (currentChapterIndex < module.chapters.length - 1) {
        nextChapter = {
            ...module.chapters[currentChapterIndex + 1],
            href: `/manual/${moduleSlug}/${module.chapters[currentChapterIndex + 1].slug}`
        };
    } else if (currentModuleIndex < courseModules.length - 1) {
        const nextModule = courseModules[currentModuleIndex + 1];
        const firstChapterOfNextModule = nextModule.chapters[0];
        nextChapter = {
            ...firstChapterOfNextModule,
            href: `/manual/${nextModule.slug}/${firstChapterOfNextModule.slug}`
        };
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <span style={{
                            fontSize: '0.875rem',
                            color: 'var(--primary)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            {module.title}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
                            {chapter.title}
                        </h1>
                    </div>
                    <ChapterTracker slug={chapter.slug} />
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '3rem', minHeight: '60vh', marginBottom: '3rem' }}>
                <ContentWrapper content={(chapter as any).content || '<p>Content coming soon...</p>'} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                {prevChapter ? (
                    <Link href={prevChapter.href} className="glass-panel" style={{
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flex: 1,
                        maxWidth: '300px',
                        textDecoration: 'none'
                    }}>
                        <ChevronLeft size={20} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Previous</span>
                            <span style={{ fontWeight: 600 }}>{prevChapter.title}</span>
                        </div>
                    </Link>
                ) : <div />}

                {nextChapter ? (
                    <Link href={nextChapter.href} className="glass-panel" style={{
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '0.75rem',
                        flex: 1,
                        maxWidth: '300px',
                        textAlign: 'right',
                        textDecoration: 'none'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>Next</span>
                            <span style={{ fontWeight: 600 }}>{nextChapter.title}</span>
                        </div>
                        <ChevronRight size={20} />
                    </Link>
                ) : <div />}
            </div>
        </div>
    );
}
