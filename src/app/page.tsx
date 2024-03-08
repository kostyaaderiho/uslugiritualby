import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-loading-skeleton/dist/skeleton.css';

import { Suspense } from 'react';

import { ProductsLoading } from './ui/Products/ProductsLoading';
import { getWreaths, getMonuments, getEls } from './api/contentful';
import { Products, Product } from './ui/Products';
import { Link } from './ui/Link/Link';
import { isResponseError } from './types';
import styles from './page.module.css';
import { Typography } from './ui/theme';

const Feed = ({
    children,
    title,
    moreLink,
    fallback,
}: {
    children: React.ReactNode;
    title: string;
    moreLink: string;
    fallback: React.ReactNode;
}) => (
    <>
        <Typography
            className={styles.title}
            sizeType="headline3"
            tagType="h2"
            fontType="bold"
        >
            {title}
        </Typography>
        <Suspense fallback={fallback}>{children}</Suspense>
        <div className={styles.linkWrapper}>
            <Link href={moreLink}>Смотреть больше</Link>
        </div>
    </>
);

const FailedToLoad = () => (
    <Typography
        className={styles['failedToLoad']}
        fontType="light"
        sizeType="body1"
    >
        Не удалось подгрузить
    </Typography>
);

const WreathsFeed = async () => {
    const response = await getWreaths({ limit: 8 });

    if (isResponseError(response)) {
        return <FailedToLoad />;
    }

    return (
        <Products>
            {response?.items.map((wreath) => (
                <Product
                    {...wreath.fields}
                    href={`/wreaths/${wreath.sys.id}`}
                    key={wreath.sys.id}
                    imageWidth={220}
                    imageHeight={294}
                />
            ))}
        </Products>
    );
};

const MonumentsFeed = async () => {
    const response = await getMonuments({ limit: 8 });

    if (isResponseError(response)) {
        return <FailedToLoad />;
    }

    return (
        <Products>
            {response?.items.map((monument) => (
                <Product
                    {...monument.fields}
                    href={`/monuments/${monument.sys.id}`}
                    key={monument.sys.id}
                    imageWidth={220}
                    imageHeight={220}
                />
            ))}
        </Products>
    );
};

const ElsFeed = async () => {
    const response = await getEls({ limit: 8 });

    if (isResponseError(response)) {
        return <FailedToLoad />;
    }

    return (
        <Products>
            {response?.items.map((el) => (
                <Product
                    {...el.fields}
                    href={`/els/${el.sys.id}`}
                    key={el.sys.id}
                    imageWidth={220}
                    imageHeight={294}
                />
            ))}
        </Products>
    );
};

export default function Page() {
    return (
        <>
            <Feed
                title={'Венки'}
                moreLink="wreaths"
                fallback={<ProductsLoading />}
            >
                <WreathsFeed />
            </Feed>

            <Feed
                title={'Памятнки'}
                moreLink="monuments"
                fallback={<ProductsLoading />}
            >
                <MonumentsFeed />
            </Feed>

            <Feed title={'Ель'} moreLink="els" fallback={<ProductsLoading />}>
                <ElsFeed />
            </Feed>
        </>
    );
}
