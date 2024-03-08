import { notFound } from 'next/navigation';

import { Products, Product } from '../ui/Products';
import { PageTitle } from '../ui/PageTitle';
import { getWreaths } from '../api/contentful';
import { isResponseError } from '../types';

export default async function Page() {
    const response = await getWreaths();

    if (isResponseError(response)) {
        notFound();
    }

    return (
        <>
            <PageTitle>Венки</PageTitle>
            <Products>
                {response?.items.map((wreath) => (
                    <Product
                        {...wreath.fields}
                        href={`/wreaths/${wreath.sys.id}`}
                        key={wreath.sys.id}
                        imageWidth={220}
                        imageHeight={294}
                    />
                ))}
            </Products>
        </>
    );
}
