import { CHANGE_MODAL_VISIBLE } from '../type';
import { TypeModal } from '../../interface';

const currentState: Object = {
  visibility: false,
  text: '',
};

interface ActionModalType {
  type: string;
  payload: TypeModal
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