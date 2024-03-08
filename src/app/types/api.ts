export type ResponseErrorId =
    | 'BadRequest'
    | 'InvalidQuery'
    | 'AccessTokenInvalid'
    | 'AccessDenied'
    | 'NotFound'
    | 'VersionMismatch'
    | 'ValidationFailed'
    | 'UnknownField'
    | 'InvalidEntry'
    | 'ServerError'
    | 'Hibernated';

export type ResponseError = {
    sys: { type: 'Error'; id: ResponseErrorId };
    details: {
        type: 'Entry';
        id: string;
        environment: string;
        space: string;
    };
};

export const isResponseError = (response: any): response is ResponseError =>
    response?.sys?.type === 'Error';

export const isNotFoundError = (response: any): boolean =>
    isResponseError(response) && response.sys.id === 'NotFound';
