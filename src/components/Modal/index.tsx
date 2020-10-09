import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'antd';
import { changeVisible, returnProduct, buyProduct, spendMoney } from '../../redux/actions';
import { RootReducer, TypeModal, TypeItems } from '../../interface';
import { declOfNum } from '../../helper';

export const ModalWindow: React.FunctionComponent = () => {
  const visible: TypeModal = useSelector((state: RootReducer) => state.modal);
  const products: TypeItems[] = useSelector((state: RootReducer) => state.products);
  const money: number = useSelector((state: RootReducer) => state.money);

  const dispatch = useDispatch();

  const { visibility, text, footer } = visible;

  const [currentProduct]: TypeItems[] = products.filter((item) => item.select === true ? item : null);

  const handelCancel: () => void = () => {
    dispatch(changeVisible(false,'', 'info'));
    dispatch(returnProduct(false));
  }

  const handleOk: () => void = () => {
    dispatch(buyProduct(currentProduct));
    const newValue: number = money - currentProduct.price;
    dispatch(spendMoney(newValue));
    dispatch(changeVisible(true, 'Примите товар', 'result'));
  }

  const showButtons: () => JSX.Element | null = () => {
    if (footer === 'complete') {
      return (
        <>
          <Button onClick={handelCancel}>Отмена</Button>
          <Button onClick={handleOk}>Да</Button>
        </>
      )
    }
    return null;
  }

  const showPrice: () => JSX.Element | null = () => footer === 'complete' ? <p>{`${currentProduct.price} ${declOfNum(currentProduct.price, ['Рубль', 'Рубля', 'Рублей'])}`}</p> : null;

  const showImage: () => JSX.Element | null = () => footer === 'complete' || footer === 'result' ? currentProduct.picture : null;

  return (
    <Modal
      title="Информация"
      visible={visibility}
      onCancel={handelCancel}
      footer={showButtons()}
    >
      {showImage()}
      <p>{text}</p>
      {showPrice()}
    </Modal>
  )
}

