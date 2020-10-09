import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Tag, Space } from 'antd';
import { changeVisible  } from '../../redux/actions';
import { columns } from '../../constants';
import { TypeItems, TypeColumns, RootReducer } from '../../interface';
import { declOfNum } from '../../helper';
import './index.scss';
import { isGetAccessor } from 'typescript';

export const Content: React.FunctionComponent = () => {
  const products: TypeItems[] = useSelector((state: RootReducer) => state.products);
  const money: number = useSelector((state: RootReducer) => state.money);
  // const modal: { visibility: boolean, text: string } = useSelector((state: RootReducer) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <Table 
        dataSource={products}
        columns={columns}
        size="small"
        className="content-table"
        pagination={false}
        rowClassName={'content-row'}
        onRow={(record: TypeItems, rowIndex) => {
          return {
            onClick: () => { 
              if (record.price > money) {
                dispatch(changeVisible(true, `Пополните баланс. Требуется ${record.price} рублей на счету`))
              } else {
                dispatch(changeVisible(true, `Куплено`))
              }
            },
          };
        }}
      />
    </div>
  )
}
