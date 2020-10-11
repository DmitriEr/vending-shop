import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Button } from 'antd';
import { changeMoney, changeVisible } from '../../redux/actions';
import { currency, initialPrices } from '../../constants';
import { getCurrentCourse } from '../../server';
import { declOfNum } from '../../helper';
import { RootReducer, TypePrice } from '../../interface';
import './index.scss';

export const Header: React.FunctionComponent = () => {
  const [currentPrice, setCurrentPrice] = useState<TypePrice>({ USD: 78, EUR: 92, current: '' });
  const [checkoutCurrency, setCheckoutCurrency] = useState<number>(0);

  const money: number = useSelector((state: RootReducer) => state.money);
  const dispatch = useDispatch();

  const { Option }: any = Select;

  useEffect(() => {
    const data = getCurrentCourse();
    data.then((items) => {
      const usd: number = items.rates.RUB;
      const eur: number = usd / items.rates.EUR;
      setCurrentPrice({...currentPrice, USD: usd, EUR: eur });
    })
  }, []);


  const changeSumRubles: (value: string, num: number) => number = (value, num) => {
    switch(value) {
      case 'Доллар':
        const valueUSD: number = Math.round(num * currentPrice.USD);
        if (valueUSD + money >= 25) {
          dispatch(changeMoney(valueUSD + money));
        }
        return valueUSD;
      case 'Евро':
        const valueEUR: number = Math.round(num * currentPrice.EUR);
        if (valueEUR + money >= 25) {
          dispatch(changeMoney(valueEUR + money));
        }
        return valueEUR;
      case 'Рубль':
        if (num + money >= 25) {
          dispatch(changeMoney(num + money));
        }
        return num;
      default:
        return 1;
    };
  }

  const handleOptionChange: (currencyName: string) => void = (currencyName) => {
    setCurrentPrice({...currentPrice, current: currencyName})
  }

  const handleInputChange: (event: any) => void = (event) => {
    const currentCurrency: number = parseInt(event.target.value, 10);
    const number = event.target.value === '' ? 0 : currentCurrency;
    setCheckoutCurrency(number);
  }

  const handleButtonAdd: () => void = () => {
    const count: number = changeSumRubles(currentPrice.current, checkoutCurrency)
    const availabile: number[] = initialPrices.filter((item: number) => item > count);
    const string: string = `${checkoutCurrency} ${declOfNum(money, ['Рубль', 'Рубля', 'Рублей'])} недостаточно. Минимальная первоночальная суммма 25 рублей.`;
    if (currentPrice.current.length === 0) {
      dispatch(changeVisible(true, 'Требуется выбрать валюту', 'info'));
    } else if (money === 0 && availabile.length === 9) {
      dispatch(changeVisible(true, string, 'info'));
    } else {
      changeSumRubles(currentPrice.current, checkoutCurrency);
      setCheckoutCurrency(0);
    }
  }

  const handleButtonDelete: () => void = () => {
    dispatch(changeMoney(0));
  }

  return (
    <div className="header">
      <div className="header-title">
        <h1>Вендинговый автомат</h1>
      </div>
      <div className="header-control">
        <div className="header-control__item header-price__result">{`${money} ${declOfNum(money, ['Рубль', 'Рубля', 'Рублей'])}` }</div>
        <Select defaultValue="Валюта" onSelect={handleOptionChange} className="header-control__item"	>
          {currency.map((currencyName: string) => {
            return (
              <Option key={currencyName} value={currencyName}>
                {currencyName}
              </Option>
            )
          })}
        </Select>
        <Input onChange={handleInputChange} value={checkoutCurrency} size="small" className="header-control__item" />
        <Button onClick={handleButtonAdd} className="header-control__item">Добавить</Button>
        <Button onClick={handleButtonDelete} className="header-control__item">Сбросить</Button>
      </div>
    </div>
  )
} 