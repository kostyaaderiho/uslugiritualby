import { notFound } from 'next/navigation';

import { getMonument } from '@/app/api/contentful';
import { isResponseError } from '@/app/types';
import { Product } from '@/app/ui/Product';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await getMonument(id);

    if (isResponseError(response)) {
        notFound();
    }

    return <Product {...response.fields} imageWidth={472} imageHeight={472} />;
}
