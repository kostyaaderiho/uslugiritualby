'use client';

import { useEffect } from 'react';
import SwiperInit from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

export const useSwiper = (config: Partial<SwiperOptions> = {}) => {
    useEffect(() => {
        const defaultConfig: SwiperOptions = {
            pagination: {
                el: '.swiper-pagination',
            },

            modules: [Navigation, Pagination],

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
            },
        };

        new SwiperInit('.swiper', {
            ...defaultConfig,
            ...config,
        });
    }, [config]);
};

export const SwiperNavigation = () => (
    <>
        <button
            className={
                'swiper-button swiper-button-prev inline-block w-8 h-8 border-none bg-none'
            }
        />
        <button className="swiper-button swiper-button-next inline-block w-8 h-8 border-none bg-none" />
    </>
);

export type SwiperSlideProps = {
    children: React.ReactNode;
};

export const SwiperSlide = ({ children }: SwiperSlideProps): JSX.Element => (
    <div className={'swiper-slide !flex justify-center'}>{children}</div>
);

export type SwiperProps = {
    children?: React.ReactNode;
    navigation?: React.ReactNode;
};

export const Swiper = ({ children, navigation }: SwiperProps) => (
    <div className="w-full swiper">
        <div className="swiper-wrapper">{children}</div>
        <div className="flex justify-between relative h-8">{navigation}</div>
    </div>
);
