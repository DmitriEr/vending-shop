import { 
  CHANGE_CURRENCY,
  SET_MONEY,
  CHANGE_MODAL_VISIBLE,
  UPDATE_COUNT,
  SELECT_PRODUCT,
  RETURN_PRODUCT,
  BUY_PRODUCT,
  SPEND_MONEY 
} from '../type';
import { TypeItems } from '../../interface';

export function selectProduct(product: TypeItems) {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  }
}

export function returnProduct(product: boolean) {
  return {
    type: RETURN_PRODUCT,
    payload: product,
  }
}

export function buyProduct(product: TypeItems) {
  return {
    type: BUY_PRODUCT,
    payload: product,
  }
}

export function changeCurrency(currency: number[]) {
  return {
    type: CHANGE_CURRENCY,
    payload: currency,
  }
}

export function updateCount(item: number) {
  return {
    type: UPDATE_COUNT,
    payload: item,
  }
}

export function changeMoney(money: number) {
  return {
    type: SET_MONEY,
    payload: money,
  }
}

export function spendMoney(money: number) {
  return {
    type: SPEND_MONEY,
    payload: money,
  }
}

export function changeVisible(visible: boolean, content: string, footerContent: string) {
  return {
    type: CHANGE_MODAL_VISIBLE,
    payload: { visibility: visible, text: content, footer: footerContent }
  }
}