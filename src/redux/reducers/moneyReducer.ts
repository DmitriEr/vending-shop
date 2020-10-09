import { TypeActionMoney } from '../../interface';
import { SET_MONEY, SPEND_MONEY } from '../type';

const storage: string | null= localStorage.getItem('money');

const currentState: number = storage === null ? 0 : parseInt(storage, 10);

export const moneyRecuder = (state = currentState, action: TypeActionMoney) => {
  const {type, payload} = action;
  
  switch(type) {
    case SET_MONEY: 
      return payload;
    case SPEND_MONEY:
      return payload;
    default:
      return state; 
  }
}