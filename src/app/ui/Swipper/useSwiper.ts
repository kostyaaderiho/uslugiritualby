'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
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

        new Swiper('.swiper', {
            ...defaultConfig,
            ...config,
        });
    }, [config]);
};
