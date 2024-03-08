'use client';

import * as Contentful from 'contentful';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import { ProductSize } from '@/app/types';

import { Link as LinkButton } from '../Link/Link';
import { Swiper, SwiperSlide, SwiperNavigation } from '../Swipper';
import { Typography } from '../theme/Typography';
import styles from './Products.module.css';

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
    <div className={styles.container}>
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
                className={styles.title}
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
                    key={`${text}_${size}`}
                    className={styles.sizes}
                    tagType="div"
                    fontType="light"
                    sizeType="body2"
                >
                    <span>{text}</span>
                    <span className={styles.size}>{size}</span>
                </Typography>
            ))}
            <Typography
                tagType="p"
                sizeType="headline4"
                fontType="light"
                className={styles.price}
            >
                {price}
            </Typography>
        </Link>
        <div className={styles.link}>
            <LinkButton href={href}>Посмотреть</LinkButton>
        </div>
    </div>
);
