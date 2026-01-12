'use client';

import { useActionMode } from '@/context/ActionContext';

export default function ContentWrapper({
    content
}: {
    content: string
}) {
    const { isActionMode } = useActionMode();

    return (
        <div
            className={isActionMode ? "action-mode-active" : ""}
            style={{ lineHeight: 1.8, fontSize: '1.125rem' }}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
