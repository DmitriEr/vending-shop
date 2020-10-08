import { combineReducers } from 'redux';
import { moneyRecuder } from '../reducers/moneyReducer';
import { productsReducer } from '../reducers/productsReducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  money: moneyRecuder,
})