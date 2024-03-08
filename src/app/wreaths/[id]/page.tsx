import { notFound } from 'next/navigation';

import { getWreath } from '@/app/api/contentful';
import { Product } from '@/app/ui/Product';
import { isResponseError } from '@/app/types';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await getWreath(id);

    if (isResponseError(response)) {
        notFound();
    }

    return <Product {...response.fields} imageWidth={472} imageHeight={630} />;
}
