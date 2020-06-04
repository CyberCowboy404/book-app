import { BASKET_ADD } from '../constants/actionTypes';

export default (state = {}, action: { type: any; payload: { items: any; }[]; }) => {
  switch (action.type) {
    case BASKET_ADD:
      return {
        ...state,
        items: action,
      };

    default:
      return state;
  }
};
