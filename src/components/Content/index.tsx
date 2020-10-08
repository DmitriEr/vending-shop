import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Tag, Space } from 'antd';
import { columns } from '../../constants';
import { TypeItems, TypeColumns, RootReducer } from '../../interface';
import './index.scss';

export const Content: React.FunctionComponent = () => {
  const products = useSelector((state: RootReducer) => state.products);

  return (
    <div className="content">
      <Table dataSource={products} columns={columns} size="small" className="content-table" />
    </div>
  )
}
