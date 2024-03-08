import { Suspense } from 'react';

import { ProductsLoading } from './ui/Products/ProductsLoading';
import { getWreaths, getMonuments, getEls } from './api/contentful';
import { Products, Product } from './ui/Products';
import { Link } from './ui/Link';
import { isResponseError } from './types';
import { Typography } from './ui/theme';
import { PageTitle } from './ui/PageTitle';

// Force page to be dynamic as we fetch dynamic data from CSM.
// See API docs - https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic';

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
        <PageTitle>{title}</PageTitle>
        <Suspense fallback={fallback}>{children}</Suspense>
        <div className="text-center py-10">
            <Link href={moreLink}>Смотреть больше</Link>
        </div>
    </>
);

const FailedToLoad = () => (
    <Typography
        className="text-center w-full"
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
                title={'Памятники'}
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
