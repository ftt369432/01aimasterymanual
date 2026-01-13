import { courseModules as enModules } from './data/en';
import { courseModules as esModules } from './data/es';

// Default export for backward compatibility (Server Components default to English)
export const courseModules = enModules;

// Dynamic selector
export function getCourseModules(lang: string) {
    if (lang === 'es') return esModules;
    return enModules;
}

// Re-export types if needed
export type Module = typeof enModules[0];
export type Chapter = typeof enModules[0]['chapters'][0];