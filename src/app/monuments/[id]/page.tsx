import { notFound } from 'next/navigation';

import { getMonument } from '@/app/api/contentful';
import { isResponseError } from '@/app/types';
import { PageProduct } from '@/app/ui/PageProduct';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await getMonument(id);

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <PageProduct {...response.fields} imageWidth={472} imageHeight={472} />
    );
}
