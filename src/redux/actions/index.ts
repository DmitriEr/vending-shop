import { SALE_PRODUCT, CHANGE_CURRENCY, SET_MONEY } from '../type';

export function changeCount(product: any) {
  return {
    type: SALE_PRODUCT,
    payload: product,
  }
}

export function changeCurrency(currency: number[]) {
  return {
    type: CHANGE_CURRENCY,
    payload: currency,
  }
}

export function changeMoney(money: number) {
  return {
    type: SET_MONEY,
    payload: money,
  }
}