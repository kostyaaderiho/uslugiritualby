import * as Contentful from 'contentful';

export type ProductSize = {
    text: string;
    size: string;
};

export type Monument = {
    contentTypeId: 'monument';
    fields: {
        title: Contentful.EntryFieldTypes.Text;
        description: Contentful.EntryFieldTypes.Text;
        price: Contentful.EntryFieldTypes.Text;
        images: Contentful.EntryFieldTypes.Array<Contentful.EntryFieldTypes.AssetLink>;
        sizes: Contentful.EntryFieldTypes.Object<ProductSize[]>;
    };
};

export type Wreath = {
    contentTypeId: 'wreath';
    fields: {
        title: Contentful.EntryFieldTypes.Text;
        description: Contentful.EntryFieldTypes.Text;
        price: Contentful.EntryFieldTypes.Text;
        images: Contentful.EntryFieldTypes.Array<Contentful.EntryFieldTypes.AssetLink>;
        sizes: Contentful.EntryFieldTypes.Object<ProductSize[]>;
    };
};

export type El = {
    contentTypeId: 'el';
    fields: {
        title: Contentful.EntryFieldTypes.Text;
        description: Contentful.EntryFieldTypes.Text;
        price: Contentful.EntryFieldTypes.Text;
        images: Contentful.EntryFieldTypes.Array<Contentful.EntryFieldTypes.AssetLink>;
        sizes: Contentful.EntryFieldTypes.Object<ProductSize[]>;
    };
};

export type Map = {
    contentTypeId: 'map';
    fields: {
        code: Contentful.EntryFieldTypes.Text;
    };
};

export type CompanyInfo = {
    contentTypeId: 'ip';
    fields: {
        text: Contentful.EntryFieldTypes.Text;
    };
};
