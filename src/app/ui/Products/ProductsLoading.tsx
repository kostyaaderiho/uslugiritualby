import Skeleton from 'react-loading-skeleton';
import clsx from 'clsx';

import styles from './Products.module.css';

const Product = () => (
    <div className={clsx(styles.container, styles.skeleton)}>
        <Skeleton height={294} />
        <Skeleton height={24} />
        <Skeleton height={48} />
        <Skeleton height={24} />
    </div>
);

export const ProductsLoading = () => (
    <div className={styles.block}>
        {Array.from({
            length: 8,
        }).map((_, i) => (
            <Product key={i} />
        ))}
    </div>
);
