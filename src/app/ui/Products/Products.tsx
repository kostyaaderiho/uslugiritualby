'use client';

import styles from './Products.module.css';
import { useSwiper } from '../Swipper';

export const Products = ({ children }: { children: React.ReactNode }) => {
    useSwiper();

    return <div className={styles.block}>{children}</div>;
};
