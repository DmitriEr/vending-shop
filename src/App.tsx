import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { getCurrentCourse } from './server';
import { items } from './constants';
import 'antd/dist/antd.css'; 
import './App.css';

type Course = {
  currency: string;
  count: number;
}

const App: React.FunctionComponent = () => {
  const [money, setMoney] = useState<Course>({ currency: 'USD', count: 1 })
  console.log(items)
  useEffect(() => {
    const data = getCurrentCourse()
    data.then((items) => console.log(items))
  }, [])


  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;