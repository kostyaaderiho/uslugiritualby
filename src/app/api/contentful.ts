import { createClient, EntriesQueries, EntryQueries } from 'contentful';

import { Monument, El, Wreath, Map, CompanyInfo } from '../types';

import { isResponseError } from '../types';

const client = createClient({
    accessToken: process.env['CONTENTFUL_ACCESS_TOKEN'] as string,
    environment: process.env['CONTENTFUL_ENVIRONMENT'] as string,
    space: process.env['CONTENTFUL_SPACE'] as string,
});

// More info - https://github.com/contentful/contentful.js/blob/master/TYPESCRIPT.md#withoutunresolvablelinks
const adjustedClient = client.withoutUnresolvableLinks;

export const getWreaths = async (
    query: EntriesQueries<Wreath, undefined> = {}
) => {
    try {
        const response = await adjustedClient.getEntries<Wreath>({
            content_type: 'wreath',
            ...query,
        });

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getWreath = async (
    id: string,
    query?: EntryQueries<undefined>
) => {
    try {
        const response = await adjustedClient.getEntry<Wreath>(id, query);

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getMonuments = async (
    query: EntriesQueries<Monument, undefined> = {}
) => {
    try {
        const response = await adjustedClient.getEntries<Monument>({
            content_type: 'monument',
            ...query,
        });

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getMonument = async (
    id: string,
    query?: EntryQueries<undefined>
) => {
    try {
        const response = await adjustedClient.getEntry<Monument>(id, query);

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getEls = async (query: EntriesQueries<El, undefined> = {}) => {
    try {
        const response = await adjustedClient.getEntries<El>({
            content_type: 'el',
            ...query,
        });

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getEl = async (id: string, query?: EntryQueries<undefined>) => {
    try {
        const response = await adjustedClient.getEntry<El>(id, query);

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getMap = async (query: EntriesQueries<Map, undefined> = {}) => {
    try {
        const response = await adjustedClient.getEntries<Map>({
            content_type: 'map',
            ...query,
        });

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};

export const getCompanyInfo = async (
    query: EntriesQueries<CompanyInfo, undefined> = {}
) => {
    try {
        const response = await adjustedClient.getEntries<CompanyInfo>({
            content_type: 'ip',
            ...query,
        });

        return response;
    } catch (err) {
        if (isResponseError(err)) {
            return err;
        } else {
            throw new Error('Failed to fetch entity');
        }
    }
};
