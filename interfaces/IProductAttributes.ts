/* eslint-disable semi */
/* eslint-disable no-extra-semi */

export interface IProductPhoto {
  url: string;
  alt?: string;
  order: number;
};

export interface IProductAttributes {
  id?: string;
  photos: IProductPhoto[];
  title: string;
  year?: number;
  author: string;
  price: number;
  type?: string;
  language?: string;
  pages?: number;
  stockAmount?: number;
  description?: string;
  category: string[];
  rating?: number;
  currency?: string;
  slug: string;
  country?: string;
};
