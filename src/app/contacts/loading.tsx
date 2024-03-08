import Skeleton from 'react-loading-skeleton';

import { PageTitle } from '../ui/PageTitle';

export default function Loading() {
    return (
        <>
            <PageTitle>Мы находимся</PageTitle>
            <Skeleton height={320} />
        </>
    );
}
