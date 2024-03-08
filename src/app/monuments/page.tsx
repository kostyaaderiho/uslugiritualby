import { notFound } from 'next/navigation';

import { Products, Product } from '@/app/ui/Products';
import { PageTitle } from '@/app/ui/PageTitle';
import { getMonuments } from '@/app/api/contentful';

import { isResponseError } from '../types';

// Force page to be dynamic as we fetch dynamic data from CSM.
// See API docs - https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
export const dynamic = 'force-dynamic';

export default async function Page() {
    const response = await getMonuments();

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <>
            <PageTitle>Памятники</PageTitle>
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
        </>
    );
}
