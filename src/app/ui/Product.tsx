'use client';

import Image from 'next/image';
import { Typography } from '@/app/ui/theme';
import * as Contentful from 'contentful';

import { ProductSize } from '@/app/types';
import { ContactPhone } from '@/app/ui/ContactPhone';

import { Swiper, SwiperSlide, SwiperNavigation, useSwiper } from './Swipper';
import styles from './Product.module.css';

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

export const Product = ({
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
        <div className={styles.container}>
            <div className={styles.info}>
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
            <div className={styles.info}>
                <Typography sizeType="headline2" fontType="bold">
                    {title}
                </Typography>
                <Typography sizeType="body1" fontType="light">
                    {description}
                </Typography>
                {sizes?.map(({ size, text }) => (
                    <Typography
                        key={`${text}_${size}`}
                        className={styles.sizes}
                        tagType="div"
                        fontType="light"
                        sizeType="body1"
                    >
                        <span>{text}</span>
                        <span className={styles.size}>{size}</span>
                    </Typography>
                ))}
                <Typography
                    sizeType="headline4"
                    fontType="regular"
                    className={styles.price}
                >
                    {price}
                </Typography>
                <ContactPhone>Позвонить</ContactPhone>
            </div>
        </div>
    );
};
