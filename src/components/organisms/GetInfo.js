import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from '../atoms';
import CheckInCardThird from '../molecules/CheckInCardThird';
import MyIcon from '../../assets/config/icon-font.js';
class GetInfo extends Component {
  render() {
    const { iconStyle, text, fullContainer, textContainer } = styles;
    return (
      <Card style={fullContainer}>
        <CardSection style={textContainer}>
          <CardSection>
            <Text style={text}>
              Seleccione del siguiente catálogo un Storecheck para levantar
              información de su Punto de Venta
            </Text>
          </CardSection>
        </CardSection>
        <CardSection style={fullContainer}>
          <CheckInCardThird />
          <CheckInCardThird />
          <CheckInCardThird />
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
    color: '#9b9b9b',
    fontSize: 14
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
export default GetInfo;
