import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { ModalWindow } from './components/Modal';
import { getCurrentCourse } from './server';
import 'antd/dist/antd.css'; 
import './App.css';

type Course = {
  currency: string;
  count: number;
}

const App: React.FunctionComponent = () => {
  const [money, setMoney] = useState<Course>({ currency: 'USD', count: 1 })




  return (
    <div className="App">
      <Header />
      <Content />
      <ModalWindow />
    </div>
  );
}

export default App;
