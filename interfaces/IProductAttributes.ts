export interface IProductPhoto {
    url: string;
    alt?: string;
    isMain: Boolean;
}

export interface IProductAttributes {
    id?: string;
    photos: IProductPhoto[];
    title: string;
    year?: number;
    author: string;
    price: Number;
    type?: string;
    pages?: Number;
    stockAmount?: Number;
    description?: string;
    category: [string];
    rating?: Number;
    currency?: string;
    slug: string;
}