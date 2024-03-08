import { ResponseError } from '../types';

export const getRequestError = (
    id: ResponseError['sys']['id'] = 'NotFound'
): ResponseError => ({
    sys: {
        id,
        type: 'Error',
    },
    details: {
        environment: 'master',
        space: 'space',
        id: 'id',
        type: 'Entry',
    },
});
