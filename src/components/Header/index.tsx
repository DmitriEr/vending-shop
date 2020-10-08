import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Select } from 'antd';
import { changeCurrency } from '../../redux/actions';
import { currency, initialPrices } from '../../constants';
import { getCurrentCourse } from '../../server';
import { TypePrice } from '../../interface';
import './index.scss';


export const Header: React.FunctionComponent = () => {
  const [currentPrice, setCurrentPrice] = useState<TypePrice>({ USD: 78, EUR: 92});

  const dispatch = useDispatch();
  const { Option }: any = Select;

  useEffect(() => {
    const data = getCurrentCourse();
    data.then((items) => {
      const usd: number = items.rates.RUB;
      const eur = usd / items.rates.EUR;
      setCurrentPrice({ USD: usd, EUR: eur });
    })
  }, [])

  const handleChange = (event: any) => {
    const arrayOfPrice = initialPrices;

    switch(event) {
      case 'Доллар':
        const valueUSD = arrayOfPrice.map((item) => Math.round((item / currentPrice.USD + Number.EPSILON) * 100) / 100);
        dispatch(changeCurrency(valueUSD));
        break;
      case 'Евро':
        const valueEUR = arrayOfPrice.map((item) => Math.round((item / currentPrice.EUR + Number.EPSILON) * 100) / 100);
        dispatch(changeCurrency(valueEUR));
        break;
      default:
        dispatch(changeCurrency(arrayOfPrice));
    };
  }

  return (
    <div className="header">
      <div className="header-title">
        <h1>Вендинговый автомат</h1>
      </div>
      <div className="header-control">
        <span>0</span>
        <Select defaultValue="Рубль" onChange={handleChange}>
          {currency.map((currencyName: string) => {
            return (
              <Option key={currencyName} value={currencyName}>
                {currencyName}
              </Option>
            )
          })}
        </Select>
      </div>
    </div>
  )
} 