'use client';

import { useEffect } from 'react';

import Error_ from '@/app/ui/Error';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => console.error(error), [error]);

    return <Error_ reset={reset} />;
}
