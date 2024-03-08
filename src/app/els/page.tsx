import { notFound } from 'next/navigation';

import { Products, Product } from '@/app/ui/Products';
import { PageTitle } from '@/app/ui/PageTitle';
import { getEls } from '@/app/api/contentful';

import { isResponseError } from '../types';

export default async function Page() {
    const response = await getEls();

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <>
            <PageTitle>Ель</PageTitle>
            <Products>
                {response?.items.map((el) => (
                    <Product
                        {...el.fields}
                        href={`/els/${el.sys.id}`}
                        key={el.sys.id}
                        imageWidth={220}
                        imageHeight={294}
                    />
                ))}
            </Products>
        </>
    );
}
