import { BASKET_ADD } from '../constants/actionTypes';
import { IProductAttributes } from '../../interfaces/IProductAttributes';
import { IBasketType } from '../../interfaces/IBasketType';

const initialState = { basket: {} };

export default function addToBasket(state: {
  basket: IBasketType
} = initialState, action: {
  type: string
  payload: IProductAttributes
}) {
  switch (action.type) {
    case BASKET_ADD:
      return {
        ...state,
        basket: { ...state.basket, ...action.payload },
      };

    default:
      return state;
  }
};
