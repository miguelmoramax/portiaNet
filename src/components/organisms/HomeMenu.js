import React, { Component } from 'react';
import UserInfo from '../molecules/UserInfo';
import { Card } from '../atoms';
class HomeMenu extends Component {
  render() {
    const { homeMenuContainer } = styles;
    return (
      <Card style={homeMenuContainer}>
        <UserInfo />
      </Card>
    );
  }
}
const styles = {
  homeMenuContainer: {
    background: '#d6d6d6',
    heigth: '100%',
    width: '100%'
  }
};
export default HomeMenu;
