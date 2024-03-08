import { notFound } from 'next/navigation';

import { Products, Product } from '@/app/ui/Products';
import { PageTitle } from '@/app/ui/PageTitle';
import { getMonuments } from '@/app/api/contentful';

import { isResponseError } from '../types';

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
