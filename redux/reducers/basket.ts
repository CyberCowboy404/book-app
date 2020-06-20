import { BASKET_REMOVE, BASKET_ADD } from '../constants/actionTypes';
import { IBasketType } from '../../interfaces/IBasketType';

const initialState = { items: {} };

export function basket(
  state: {
    items: IBasketType;
  } = initialState,
  action: {
    type: string,
    payload: string[]
  },
) {
  switch (action.type) {
    case BASKET_ADD:
      return {
        ...state,
        items: { ...state.items, ...action.payload },
      };

    case BASKET_REMOVE: {
      const items = { ...state.items };

      action.payload.forEach((element) => {
        delete items[element];
      });

      return {
        ...state,
        items,
      };
    }
    default:
      return state;
  }
}
