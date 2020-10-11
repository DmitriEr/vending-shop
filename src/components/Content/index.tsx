import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { changeVisible, selectProduct  } from '../../redux/actions';
import { columns } from '../../constants';
import { TypeItems, RootReducer } from '../../interface';
import './index.scss';

export const Content: React.FunctionComponent = () => {
  const products: TypeItems[] = useSelector((state: RootReducer) => state.products);
  const money: number = useSelector((state: RootReducer) => state.money);

  useEffect(() => {
    const str: string = money.toString();
    localStorage.setItem('money', str);
  }, [money])

  useEffect(() => {
    const str: string = JSON.stringify(products);
    localStorage.setItem('products', str);
  }, [products])

  const dispatch = useDispatch(); 

  return (
    <div className="content">
      <Table 
        dataSource={products}
        columns={columns}
        size="small"
        className="content-table"
        pagination={false}
        rowClassName={(record) => record.count === 0 ? 'content-row__disabled' : 'content-row'}
        onRow={(record: TypeItems, rowIndex) => {
          return {
            onClick: () => {
              dispatch(selectProduct(record));

              if (record.price > money) {
                dispatch(changeVisible(true, `Пополните баланс. Требуется ${record.price} рублей на счету`, 'info'))
              } else {
                dispatch(changeVisible(true, `Выбрать данный товар?`, 'complete'))
              }
            },
          };
        }}
      />
    </div>
  )
}
