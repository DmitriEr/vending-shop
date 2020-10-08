import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Button } from 'antd';
import { changeCurrency, changeMoney } from '../../redux/actions';
import { currency, initialPrices } from '../../constants';
import { getCurrentCourse } from '../../server';
import { declOfNum } from '../../helper';
import { RootReducer, TypePrice } from '../../interface';
import './index.scss';


export const Header: React.FunctionComponent = () => {
  const [currentPrice, setCurrentPrice] = useState<TypePrice>({ USD: 78, EUR: 92, current: 'Рубль' });
  const [checkoutCurrency, setCheckoutCurrency] = useState<number>(0);
  console.log(currentPrice.current)

  const money = useSelector((state: RootReducer) => state.money);

  const dispatch = useDispatch();

  const { Option }: any = Select;

  useEffect(() => {
    const data = getCurrentCourse();
    data.then((items) => {
      const usd: number = items.rates.RUB;
      const eur = usd / items.rates.EUR;
      setCurrentPrice({...currentPrice, USD: usd, EUR: eur });
    })
  }, []);


  const changeSumRubles = (value: string, num: number) => {
    switch(value) {
      case 'Доллар':
        const valueUSD: number = Math.round(num * currentPrice.USD) + money;
        dispatch(changeMoney(valueUSD));
        break;
      case 'Евро':
        const valueEUR: number = Math.round(num * currentPrice.EUR) + money;
        dispatch(changeMoney(valueEUR));
        break;
      default:
        dispatch(changeMoney(num + money));
    };
  }
  // лишнее
  // const changePrices = () => {
  //   const arrayOfPrice = initialPrices;
  //   switch(currentPrice.current) {
  //     case 'Доллар':
  //       const valueUSD = arrayOfPrice.map((item) => Math.round((item / currentPrice.USD + Number.EPSILON) * 10) / 10);
  //       dispatch(changeCurrency(valueUSD));
  //       break;
  //     case 'Евро':
  //       const valueEUR = arrayOfPrice.map((item) => Math.round((item / currentPrice.EUR + Number.EPSILON) * 10) / 10);
  //       dispatch(changeCurrency(valueEUR));
  //       break;
  //     default:
  //       dispatch(changeCurrency(arrayOfPrice));
  //   };
  // }

  const handleOptionChange = (currencyName: string) => {
    setCurrentPrice({...currentPrice, current: currencyName})
  }

  const handleInputChange = (event: any) => {
    const currentCurrency: number = parseInt(event.target.value, 10);
    const number = event.target.value === '' ? 0 : currentCurrency;
    setCheckoutCurrency(number);
  }

  const handleButtonAdd = () => {
    changeSumRubles(currentPrice.current, checkoutCurrency);
    setCheckoutCurrency(0);
  }

  const handleButtonDelete = () => {
    dispatch(changeMoney(0));
  }

  return (
    <div className="header">
      <div className="header-title">
        <h1>Вендинговый автомат</h1>
      </div>
      <div className="header-control">
        <span>{`${money} ${declOfNum(money, ['Рубль', 'Рубля', 'Рублей'])}` }</span>
        <Select defaultValue="Рубль" onSelect={handleOptionChange}>
          {currency.map((currencyName: string) => {
            return (
              <Option key={currencyName} value={currencyName}>
                {currencyName}
              </Option>
            )
          })}
        </Select>
        <Input onChange={handleInputChange} value={checkoutCurrency} />
        <Button onClick={handleButtonAdd}>Добавить</Button>
        <Button onClick={handleButtonDelete}>Сбросить</Button>
        {/* <Button onClick={changePrices}>Показать цену с учетом курса</Button> */}
      </div>
    </div>
  )
} 