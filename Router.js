import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './src/components/organisms/LoginForm';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: '#02b3af' }}
      titleStyle={{ color: '#fff', fontWeight: '800' }}
    >
      <Scene>
        <Scene key="init" component={LoginForm} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
