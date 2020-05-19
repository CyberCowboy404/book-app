/* eslint-disable semi */
/* eslint-disable no-extra-semi */
import { IProductAttributes } from './IProductAttributes';
import ICategory from './ICategory';

export default interface IFeaturedCategory {
  category: ICategory;
  products: IProductAttributes[]
};
