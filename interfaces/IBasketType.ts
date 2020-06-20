import { IProductAttributes } from './IProductAttributes';

export type IBasketType = {
  [index: string]: BasketStorage;
}

export type BasketStorage = {
  quantity: number,
  item: IProductAttributes
}

export type BasketLinkProps = {
  items?: IBasketType,
  item: IProductAttributes,
  addToBasket?(item: any): void,
  removeFromBasket?(item: any): void

}

export type BasketProp = {
  items: IBasketType,
}
