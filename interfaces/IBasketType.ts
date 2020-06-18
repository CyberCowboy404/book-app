import { IProductAttributes } from './IProductAttributes';

export type IBasketType = {
  [index: string]: BasketStorage;
}

export type BasketStorage = {
  quantity: number,
  item: IProductAttributes
}

export type BasketLinkProps = {
  basket: IBasketType,
  item: IProductAttributes,
  addToBasket(item: any): void
}

export type BasketProp = {
  basket: IBasketType,
}
