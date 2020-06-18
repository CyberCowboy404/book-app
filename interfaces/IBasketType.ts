import { IProductAttributes } from './IProductAttributes';

export type IBasketType = {
  [index: string]: {
    quantity: number,
    item: IProductAttributes
  }
}
