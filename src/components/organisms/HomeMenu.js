import React, { Component } from 'react';
import {Text} from 'react-native';
import UserInfo from '../molecules/UserInfo';
import CheckInCard from '../molecules/CheckInCard';
import { Card, CardSection } from '../atoms';
class HomeMenu extends Component {
  render() {
    const { homeMenuContainer } = styles;
    return (
      <Card style={homeMenuContainer}>
        <CardSection style={{ zIndex:999 ,flex: 1 }}>
          <UserInfo />
        </CardSection>
        <CardSection style={{ paddingTop:'15%', height:'80%', backgroundColor: '#fff' }}>
          <Text>Check-In Pendientes (3)</Text>
          <CheckInCard />
          <CheckInCard />
          <CheckInCard />
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  homeMenuContainer: {
    backgroundColor: '#fff',
    zIndex:1,
    // flex: 1,
    // flexDirection: 'column',
    // heigth: '100%',
    // width: '100%'
  }
};
export default HomeMenu;
