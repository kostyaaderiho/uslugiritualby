import { notFound } from 'next/navigation';

import { getEl } from '@/app/api/contentful';
import { isResponseError } from '@/app/types';

import { Product } from '../../ui/Product';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await getEl(id);

    if (isResponseError(response)) {
        notFound();
    }

    return <Product {...response.fields} imageWidth={472} imageHeight={630} />;
}
