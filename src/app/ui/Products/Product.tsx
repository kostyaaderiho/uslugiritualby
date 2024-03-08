'use client';

import * as Contentful from 'contentful';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { ProductSize } from '@/app/types';

import { Swiper, SwiperSlide, SwiperNavigation } from '../Swiper';
import { Link as LinkButton } from '../Link';
import { Typography } from '../theme/Typography';

export type ProductProps = {
    title: string;
    description: string;
    sizes: ProductSize[];
    price: string;
    images: (
        | Contentful.Asset<'WITHOUT_UNRESOLVABLE_LINKS', string>
        | undefined
    )[];
    href: string;
    imageWidth: number;
    imageHeight: number;
};

export const Product = ({
    title,
    description,
    sizes,
    price,
    href,
    images,
    imageWidth,
    imageHeight,
}: ProductProps): JSX.Element => (
    <div className={'w-full lg:w-56'}>
        <Swiper
            navigation={images.length > 1 ? <SwiperNavigation /> : undefined}
        >
            {images.map((image) =>
                image ? (
                    <SwiperSlide key={image.sys.id}>
                        <Image
                            src={`https:${image.fields.file?.url}`}
                            width={imageWidth}
                            height={imageHeight}
                            alt=""
                        />
                    </SwiperSlide>
                ) : undefined
            )}
        </Swiper>
        <Link href={href}>
            <Typography
                className="text-center text-neutral-600"
                tagType="h4"
                sizeType="body1"
                fontType="regular"
            >
                {title}
            </Typography>
            {description && (
                <Typography tagType="p" sizeType="body2" fontType="light">
                    {description}
                </Typography>
            )}
            {sizes?.map(({ size, text }) => (
                <Typography
                    className="flex justify-between items-center mt-1"
                    key={`${text}_${size}`}
                    tagType="div"
                    fontType="light"
                    sizeType="body2"
                >
                    <span>{text}</span>
                    <span
                        className={
                            'flex items-center px-2 rounded-md text-white bg-lime-600'
                        }
                    >
                        {size}
                    </span>
                </Typography>
            ))}
            <Typography
                tagType="p"
                sizeType="headline4"
                fontType="light"
                className="text-lime-600"
            >
                {price}
            </Typography>
        </Link>
        <div className="text-center px-2">
            <LinkButton href={href}>Посмотреть</LinkButton>
        </div>
    </div>
);
