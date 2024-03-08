'use client';

import { useSwiper } from '../Swiper';

export const Products = ({ children }: { children: React.ReactNode }) => {
    useSwiper();

    return (
        <div className="flex gap-8 flex-wrap justify-between">{children}</div>
    );
};
