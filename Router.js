import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeMenu from './src/components/organisms/HomeMenu';
import LoginForm from './src/components/organisms/LoginForm';
import CheckIn from './src/components/organisms/CheckIn';
import CheckOut from './src/components/organisms/CheckOut';
import GetInfo from './src/components/organisms/GetInfo';
const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: '#029794' }}
      titleStyle={{ color: '#fff', fontWeight: '800' }}
    >
      <Scene>
        <Scene key="home" title="Mi Ruta de hoy" component={HomeMenu} />
        <Scene key="checkin" title="Check-In" component={CheckIn} />
        <Scene key="checkout" title="Check-Out" component={CheckOut} initial={true}/>
        <Scene key="login" component={LoginForm} />
        <Scene key="getInfo" title="Capturar Información" component={GetInfo} initial={false}/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
