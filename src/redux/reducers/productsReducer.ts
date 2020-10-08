import { items } from '../../constants';
import { SALE_PRODUCT, CHANGE_CURRENCY } from '../type'; 
import { TypeAction } from '../../interface';

const currentState = items;

export const productsReducer = (state = currentState, action: TypeAction) => {
  switch (action.type) {
    case SALE_PRODUCT:
      return {};
    case CHANGE_CURRENCY:
      const list = state;
      return list.map((current, index) => {
        return {...current, price: action.payload[index]}
      })
    default: 
      return state; 
  }
}