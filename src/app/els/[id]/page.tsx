import { notFound } from 'next/navigation';

import { getEl } from '@/app/api/contentful';
import { isResponseError } from '@/app/types';

import { PageProduct } from '../../ui/PageProduct';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await getEl(id);

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <PageProduct {...response.fields} imageWidth={472} imageHeight={630} />
    );
}
