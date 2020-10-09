import { CHANGE_MODAL_VISIBLE } from '../type';
import { TypeAction } from '../../interface';

const currentState: Object = {
  visibility: false,
  text: '',
};

interface Object {
  visibility: boolean,
  text: string,
}

interface ActionModalType {
  type: string;
  payload: Object
}

export const modalReducer = (state = currentState, action: ActionModalType) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_MODAL_VISIBLE:
      return state = payload;
    default:
      return state;
  }
}