import clsx from 'clsx';

import styles from './Swiper.module.css';

export const SwiperNavigation = () => (
    <>
        <button
            className={clsx(styles['swiper-button'], 'swiper-button-prev')}
        />
        <button
            className={clsx(styles['swiper-button'], 'swiper-button-next')}
        />
    </>
);

export type SwiperSlideProps = {
    children: React.ReactNode;
};

export const SwiperSlide = ({ children }: SwiperSlideProps): JSX.Element => (
    <div className={clsx('swiper-slide', styles['swiper-slide'])}>
        {children}
    </div>
);

export type SwiperProps = {
    children?: React.ReactNode;
    navigation?: React.ReactNode;
};

export const Swiper = ({ children, navigation }: SwiperProps) => (
    <div className={'swiper'}>
        <div className="swiper-wrapper">{children}</div>
        <div className={styles['swiper-navigation']}>{navigation}</div>
    </div>
);
