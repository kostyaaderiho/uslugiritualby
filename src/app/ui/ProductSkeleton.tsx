import Skeleton from 'react-loading-skeleton';
import clsx from 'clsx';

import styles from './Product.module.css';

export function ProductSkeleton() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Skeleton height={480} />
            </div>
            <div className={clsx(styles.info, styles['skeletonInfo'])}>
                <Skeleton height={24} />
                <Skeleton height={32} />
                <Skeleton height={32} />
                <Skeleton height={16} />
            </div>
        </div>
    );
}
