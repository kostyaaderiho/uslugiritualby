'use client';

import Image from 'next/image';
import * as Contentful from 'contentful';

import { Typography } from '@/app/ui/theme';
import { ProductSize } from '@/app/types';
import { ContactPhone } from '@/app/ui/ContactPhone';

import { Swiper, SwiperSlide, SwiperNavigation, useSwiper } from './Swiper';

export type ProductPropsType = {
    images: (
        | Contentful.Asset<'WITHOUT_UNRESOLVABLE_LINKS', string>
        | undefined
    )[];
    title: string;
    description: string;
    price: string;
    sizes: ProductSize[];
    imageWidth: number;
    imageHeight: number;
};

export const PageProduct = ({
    images,
    title,
    description,
    price,
    sizes,
    imageWidth,
    imageHeight,
}: ProductPropsType): JSX.Element => {
    useSwiper();

    return (
        <div className="flex gap-4 lg:flex-row flex-col">
            <div className="w-full lg:w-1/2 lg:flex-row">
                <Swiper
                    navigation={
                        images.length > 1 ? <SwiperNavigation /> : undefined
                    }
                >
                    {images.map((image) =>
                        image?.fields.file ? (
                            <SwiperSlide key={image.sys.id}>
                                <Image
                                    src={`https:${image.fields.file.url}`}
                                    width={imageWidth}
                                    height={imageHeight}
                                    alt=""
                                />
                            </SwiperSlide>
                        ) : undefined
                    )}
                </Swiper>
            </div>
            <div className="w-full lg:w-1/2 lg:flex-row">
                <Typography sizeType="headline2" fontType="bold">
                    {title}
                </Typography>
                <Typography sizeType="body1" fontType="light">
                    {description}
                </Typography>
                {sizes?.map(({ size, text }) => (
                    <Typography
                        key={`${text}_${size}`}
                        className={'flex justify-between items-center mb-1'}
                        tagType="div"
                        fontType="light"
                        sizeType="body1"
                    >
                        <span>{text}</span>
                        <span className="flex items-center px-2 rounded-md text-white bg-lime-600">
                            {size}
                        </span>
                    </Typography>
                ))}
                <Typography
                    sizeType="headline4"
                    fontType="regular"
                    className="text-right text-lime-600"
                >
                    {price}
                </Typography>
                <ContactPhone>Позвонить</ContactPhone>
            </div>
        </div>
    );
};
