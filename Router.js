import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeMenu from './src/components/organisms/HomeMenu';
import LoginForm from './src/components/organisms/LoginForm';
import CheckIn from './src/components/organisms/CheckIn';
import CheckOut from './src/components/organisms/CheckOut';
import GetInfo from './src/components/organisms/GetInfo';
import MySalesPoint from './src/components/organisms/MySalesPoint';
import SendData from './src/components/organisms/SendData';
import StockEnter from './src/components/organisms/StockEnter';
import LocalName from './src/components/organisms/LocalName';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: '#029794' }}
      titleStyle={{ color: '#fff', fontWeight: '800' }}
    >
      <Scene>
        <Scene key="home" title="Mi Ruta de hoy" component={HomeMenu} />
        <Scene key="checkin" title="Check-In" component={CheckIn} />
        <Scene key="checkout" title="Check-Out" component={CheckOut} initial={false}/>
        <Scene key="login" component={LoginForm} />
        <Scene key="getInfo" title="Capturar Información" component={GetInfo} initial={false}/>
        <Scene key="mySalesPoint" title="Mi Punto de Venta" component={MySalesPoint} initial={false}/>
        <Scene key="sendData" title="Enviar Gestión" component={SendData} initial={false}/>
        <Scene key="stockEnter" title="Ingreso de Stock" component={StockEnter} initial={false}/>
        <Scene key="localName" title="Nombre del local" component={LocalName} initial={true}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
