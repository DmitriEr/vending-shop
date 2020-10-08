import { TypeActionMoney } from '../../interface';
import { SET_MONEY } from '../type';

const currentState = 0;

export const moneyRecuder = (state = currentState, action: TypeActionMoney) => {
  const {type, payload} = action;
  
  switch(type) {
    case SET_MONEY: 
      return payload;
    default:
      return state; 
  }
}