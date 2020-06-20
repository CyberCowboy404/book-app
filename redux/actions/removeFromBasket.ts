import { BASKET_REMOVE } from '../constants/actionTypes';

export function removeFromBasket(payload: { ids: string[] }) {
  return { type: BASKET_REMOVE, payload };
}
