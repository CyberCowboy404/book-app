import { BASKET_ADD } from '../constants/actionTypes';
import { IProductAttributes } from '../../interfaces/IProductAttributes';

export function addToBasket(payload: IProductAttributes) {
  return { type: BASKET_ADD, payload };
}
