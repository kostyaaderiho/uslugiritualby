import Skeleton from 'react-loading-skeleton';

const Product = () => (
    <div className={'w-full flex flex-col gap-2 lg:w-56'}>
        <Skeleton height={294} />
        <Skeleton height={24} />
        <Skeleton height={48} />
        <Skeleton height={24} />
    </div>
);

export const ProductsLoading = () => (
    <div className={'flex gap-8 flex-wrap justify-between'}>
        {Array.from({
            length: 8,
        }).map((_, i) => (
            <Product key={i} />
        ))}
    </div>
);
