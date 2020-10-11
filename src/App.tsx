import React from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { ModalWindow } from './components/Modal';
import 'antd/dist/antd.css'; 
import './App.scss';

const App: React.FunctionComponent = () => (
  <div className="App">
    <Header />
    <Content />
    <ModalWindow />
  </div>
);

export default App;
