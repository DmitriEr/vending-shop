import { items } from '../../constants';
import { CHANGE_CURRENCY, SELECT_PRODUCT, RETURN_PRODUCT, BUY_PRODUCT } from '../type'; 
import { TypeAction, TypeItems } from '../../interface';

const storage: any = localStorage.getItem('products');

const counts = JSON.parse(storage);

const currentState: TypeItems[] = storage === null ? items : [...items.map((item, index) => {
  return {...item, count: counts[index].count}
})]; 

export const productsReducer = (state = currentState, action: TypeAction) => {
  const { type, payload } = action;
  
  switch (type) {
    case CHANGE_CURRENCY:
      const listChange: TypeItems[] = state;
      return listChange.map((current: TypeItems, index: number) => {
        return {...current, price: payload[index]};
      });
    case SELECT_PRODUCT:
      const indSelect: number = payload.number - 1;
      const listSelect: TypeItems[] = state;
      return listSelect.filter((item: TypeItems, index: number) => {
        if (index === indSelect) {
          return item.select = true;
        }
        return item;
      });
    case RETURN_PRODUCT:
      const listReturn: TypeItems[] = state;
      return listReturn.map((item: TypeItems) => {
        return {...item, select: payload};
      });
    case BUY_PRODUCT:
      const listBuy: TypeItems[] = state;
      const indBuy: number = payload.number - 1;
      return listBuy.map((item: TypeItems, index: number) => {
        if (index === indBuy) {
          return {...item, count: payload.count - 1};
        }
        return item;
      });
    default: 
      return state; 
  }
}