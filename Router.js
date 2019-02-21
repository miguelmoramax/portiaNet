import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeMenu from './src/components/organisms/HomeMenu';
import LoginForm from './src/components/organisms/LoginForm';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: '#029794' }}
      titleStyle={{ color: '#fff', fontWeight: '800' }}
    >
      <Scene>
        <Scene key="init" title="Mi Ruta de hoy" component={HomeMenu} />
        <Scene key="main" component={LoginForm} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
