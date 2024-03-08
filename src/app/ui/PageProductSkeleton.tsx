import Skeleton from 'react-loading-skeleton';

export function PageProductSkeleton() {
    return (
        <div className={'flex gap-4 flex-col'}>
            <div className={'w-full lg:w-1/2 lg:flex-row'}>
                <Skeleton height={480} />
            </div>
            <div className={'w-full lg:w-1/2 lg:flex-row flex flex-col gap-4'}>
                <Skeleton height={24} />
                <Skeleton height={32} />
                <Skeleton height={32} />
                <Skeleton height={16} />
            </div>
        </div>
    );
}
