import { TypeItems, TypeColumns } from '../types';
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
    picture: orbit,
    price: 25,
    count: 25
  },
  {
    number: 2,
    name: 'Coca-cola',
    picture: cocaCola,
    price: 50,
    count: 15
  },
  {
    number: 3,
    name: 'Snickers',
    picture: snickers,
    price: 30,
    count: 35
  },
  {
    number: 4,
    name: 'Bounty',
    picture: bounty,
    price: 30,
    count: 25
  },
  {
    number: 5,
    name: 'Mars',
    picture: mars,
    price: 30,
    count: 15
  },
  {
    number: 6,
    name: 'Coffee',
    picture: coffee,
    price: 29,
    count: 35
  },
  {
    number: 7,
    name: 'Sprite',
    picture: sprite,
    price: 50,
    count: 3
  },
  {
    number: 8,
    name: 'Tea',
    picture: tea,
    price: 80,
    count: 55
  },
  {
    number: 9,
    name: 'Cake',
    picture: cake,
    price: 40,
    count: 15
  },
]

export const columns: TypeColumns[] = [
  {
    title: '#',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Товар',
    dataIndex: 'picture',
    key: 'picture',
  },
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Количество',
    dataIndex: 'count',
    key: 'count',
  }
];