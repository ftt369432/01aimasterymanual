'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Hash, Book } from 'lucide-react';
import { getCourseModules } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSearch } from '@/context/SearchContext';

interface SearchResult {
    type: 'module' | 'chapter';
    title: string;
    slug: string;
    moduleSlug: string;
    snippet?: string;
}

export function CortexSearch() {
    const { isSearchOpen: isOpen, closeSearch: onClose } = useSearch();
    const { language } = useLanguage();
    const courseModules = getCourseModules(language);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery('');
            setResults([]);
        }
    }, [isOpen]);

    // Search Logic
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const q = query.toLowerCase();
        const hits: SearchResult[] = [];

        courseModules.forEach(mod => {
            // Match Module
            if (mod.title.toLowerCase().includes(q) || mod.desc.toLowerCase().includes(q)) {
                hits.push({
                    type: 'module',
                    title: mod.title,
                    slug: mod.slug,
                    moduleSlug: mod.slug,
                    snippet: mod.desc
                });
            }

            // Match Chapters
            mod.chapters.forEach(chap => {
                if (chap.title.toLowerCase().includes(q) || chap.content.toLowerCase().includes(q)) {
                    // Create a simple snippet
                    const contentLower = chap.content.toLowerCase();
                    const index = contentLower.indexOf(q);
                    let snippet = '';
                    if (index > -1) {
                        const start = Math.max(0, index - 30);
                        const end = Math.min(contentLower.length, index + 50);
                        snippet = '...' + chap.content.substring(start, end) + '...';
                        // Strip HTML tags for cleaner snippet (rough)
                        snippet = snippet.replace(/<[^>]*>/g, '');
                    }

                    hits.push({
                        type: 'chapter',
                        title: chap.title,
                        slug: chap.slug,
                        moduleSlug: mod.slug,
                        snippet: snippet
                    });
                }
            });
        });

        setResults(hits.slice(0, 10)); // Limit to 10
        setSelectedIndex(0);
    }, [query]);

    // Keyboard Navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex]);
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleSelect = (result: SearchResult) => {
        if (result.type === 'module') {
            // Maybe collapse/expand sidebar? For now, just go to first chapter or do nothing?
            // Actually, modules don't have pages. Let's go to first chapter of module.
            // Finding first chapter:
            const mod = courseModules.find(m => m.slug === result.slug);
            if (mod && mod.chapters.length > 0) {
                router.push(`/manual/${result.slug}/${mod.chapters[0].slug}`);
            }
        } else {
            router.push(`/manual/${result.moduleSlug}/${result.slug}`);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="search-modal-overlay" onClick={onClose}>
            <div
                className="search-modal-container"
                onClick={e => e.stopPropagation()}
            >
                {/* Search Header */}
                <div className="search-header">
                    <Search className="w-5 h-5 text-gray-400 mr-3" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search the Cortex..."
                        className="search-input"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <kbd className="search-kbd">
                        <span className="text-xs">ESC</span>
                    </kbd>
                </div>

                {/* Results */}
                <div className="search-results">
                    {results.length === 0 && query && (
                        <div className="p-8 text-center text-gray-500">
                            No results found.
                        </div>
                    )}

                    {results.map((result, index) => (
                        <div
                            key={`${result.moduleSlug}-${result.slug}`}
                            className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                            onClick={() => handleSelect(result)}
                            onMouseEnter={() => setSelectedIndex(index)}
                        >
                            <div className="mt-1 mr-3">
                                {result.type === 'module' ? (
                                    <Book className="w-4 h-4 text-indigo-400" />
                                ) : (
                                    <Hash className="w-4 h-4 text-gray-400" />
                                )}
                            </div>
                            <div>
                                <div className="result-title">
                                    {result.title}
                                    {result.type === 'chapter' && (
                                        <span className="ml-2 text-xs font-normal opacity-50">
                                            in {courseModules.find(m => m.slug === result.moduleSlug)?.title}
                                        </span>
                                    )}
                                </div>
                                {result.snippet && (
                                    <div className="result-snippet line-clamp-1">
                                        {result.snippet}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    {results.length === 0 && !query && (
                        <div className="p-8 text-center text-gray-600 text-sm">
                            <p>Type to search...</p>
                            <p className="mt-2 text-xs">Cmd+K to open anytime</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
