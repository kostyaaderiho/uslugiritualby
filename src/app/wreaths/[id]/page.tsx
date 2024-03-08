import { notFound } from 'next/navigation';

import { getWreath } from '@/app/api/contentful';
import { PageProduct } from '@/app/ui/PageProduct';
import { isResponseError } from '@/app/types';

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;

    const response = await getWreath(id);

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <PageProduct {...response.fields} imageWidth={472} imageHeight={630} />
    );
}
