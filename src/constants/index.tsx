import React from 'react';
import { TypeItems, TypeColumns } from '../interface';
import orbit from '../assets/orbit.jpg';
import cocaCola from '../assets/coca-cola.jpg';
import snickers from '../assets/snickers.jpg';
import bounty from '../assets/bounty.jpg';
import mars from '../assets/mars.jpg';
import coffee from '../assets/coffee.jpg';
import sprite from '../assets/sprite.jpg';
import tea from '../assets/tea.jpg';
import cake from '../assets/cake.jpg';

export const items: TypeItems[] = [
  {
    number: 1,
    name: 'Orbit',
    picture: <img src={`${orbit}`} alt='Orbit' className="row-image" />,
    price: 25,
    count: 25,
    key: 'Orbit',
    enabled: false,
    select: false,
  },
  {
    number: 2,
    name: 'Coca-cola',
    picture: <img src={`${cocaCola}`} alt='Orbit' className="row-image" />,
    price: 50,
    count: 15,
    key: 'Coca-cola',
    enabled: false,
    select: false,
  },
  {
    number: 3,
    name: 'Snickers',
    picture: <img src={`${snickers}`} alt='Orbit' className="row-image" />,
    price: 30,
    count: 35,
    key: 'Snickers',
    enabled: false,
    select: false,
  },
  {
    number: 4,
    name: 'Bounty',
    picture: <img src={`${bounty}`} alt='Orbit' className="row-image" />,
    price: 30,
    count: 25,
    key: 'Bounty',
    enabled: false,
    select: false,
  },
  {
    number: 5,
    name: 'Mars',
    picture: <img src={`${mars}`} alt='Orbit' className="row-image" />,
    price: 30,
    count: 15,
    key: 'Mars',
    enabled: false,
    select: false,
  },
  {
    number: 6,
    name: 'Coffee',
    picture: <img src={`${coffee}`} alt='Orbit' className="row-image" />,
    price: 29,
    count: 35,
    key: 'Coffee',
    enabled: false,
    select: false,
  },
  {
    number: 7,
    name: 'Sprite',
    picture: <img src={`${sprite}`} alt='Orbit' className="row-image" />,
    price: 50,
    count: 3,
    key: 'Sprite',
    enabled: false,
    select: false,
  },
  {
    number: 8,
    name: 'Tea',
    picture: <img src={`${tea}`} alt='Orbit' className="row-image" />,
    price: 80,
    count: 55,
    key: 'Tea',
    enabled: false,
    select: false,
  },
  {
    number: 9,
    name: 'Cake',
    picture: <img src={`${cake}`} alt='Orbit' className="row-image" />,
    price: 40,
    count: 15,
    key: 'Cake',
    enabled: false,
    select: false,
  },
]

export const columns: TypeColumns[] = [
  {
    title: '#',
    dataIndex: 'number',
    key: 'number',
    className: 'content-column',
  },
  {
    title: 'Товар',
    dataIndex: 'picture',
    key: 'picture',
    className: 'content-column',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
    className: 'content-column',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    className: 'content-column',
  },
  {
    title: 'Количество',
    dataIndex: 'count',
    key: 'count',
    className: 'content-column',
  }
];

export const currency: string[] = ['Рубль', 'Доллар', 'Евро'];

export const initialPrices: number[] = [25, 50, 30, 30, 30 , 29, 50, 80, 40];