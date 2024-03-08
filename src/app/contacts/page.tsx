import { getMap } from '../api/contentful';
import { PageTitle } from '../ui/PageTitle';
import { isResponseError } from '../types';

export default async function Page() {
    const response = await getMap();

    const mapContent = isResponseError(response) ? (
        <div>Не удалось подгрузить карту</div>
    ) : (
        response?.items[0].fields.code || ''
    );

    return (
        <>
            <PageTitle>Мы находимся</PageTitle>
            <div
                dangerouslySetInnerHTML={{
                    __html: mapContent,
                }}
            />
        </>
    );
}
