import { combineReducers } from 'redux';
import { moneyRecuder } from '../reducers/moneyReducer';
import { productsReducer } from '../reducers/productsReducer';
import { modalReducer } from '../reducers/modalReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  money: moneyRecuder,
  modal: modalReducer,
})