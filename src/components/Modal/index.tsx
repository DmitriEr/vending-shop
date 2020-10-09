import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';
import { changeVisible } from '../../redux/actions';
import { RootReducer } from '../../interface';

export const ModalWindow = () => {
  const visible: { visibility: boolean, text: string }= useSelector((state: RootReducer) => state.modal);
  const dispatch = useDispatch();

  const handleOk = () => {
    dispatch(changeVisible(false,''));
  }

  const handelCancel = () => {
    dispatch(changeVisible(false,''));
  }
// доделать
  const showButtons = () => {
    if (true) {
      return (
        <>
          <Button>Ok</Button>
          <Button>Cancel</Button>
        </>
      )
    }
    return null;
  }
  
  return (
    <Modal
      title="Информация"
      visible={visible.visibility}
      onOk={handleOk}
      onCancel={handelCancel}
      footer={showButtons()}
    >
      <p>{visible.text}</p>
    </Modal>
  )
}

