'use client';

import { useEffect, useCallback, useState } from 'react';
import clsx from 'clsx';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

export const ScrollToTopButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const onClick = useCallback(() => window.scrollTo(0, 0), []);

    useEffect(() => {
        const scrollListener = () => setIsEnabled(Boolean(window.scrollY));

        document.addEventListener('scroll', scrollListener);

        return () => document.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        <button
            className={clsx(
                'z-50 fixed bottom-4 right-4 transition-opacity ease-out bg-white rounded-md p-2 shadow-sm shadow-slate-400',
                isEnabled ? 'opacity-100' : 'opacity-0'
            )}
            onClick={onClick}
        >
            <ArrowUpCircleIcon className="h-8 w-8 text-lime-600" />
        </button>
    );
};
