import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from '../atoms';
import CheckInCardSecond from '../molecules/CheckInCardSecond';
import MyIcon from '../../assets/config/icon-font.js';
class CheckIn extends Component {
  render() {
    const { iconStyle, text, fullContainer, textContainer } = styles;
    return (
      <Card style={fullContainer}>
        <CardSection style={textContainer}>
          <CardSection style={iconStyle}>
            <MyIcon name={'ok'} size={30} color={'#fff'} />
          </CardSection>
          <CardSection>
            <Text style={text}>Hemos encontrado los siguientes resultados</Text>
          </CardSection>
        </CardSection>
        <CardSection style={fullContainer}>
          <CheckInCardSecond />
          <CheckInCardSecond />
          <CheckInCardSecond />
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  fullContainer: {
    backgroundColor: '#fff',
    height: '100%;'
  },
  textContainer: {
    height: '20%',
    backgroundColor: '#fff'
  },
  text: {
    color: '#417505'
  },
  iconStyle: {
    backgroundColor: '#7ed321',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  }
};
export default CheckIn;
