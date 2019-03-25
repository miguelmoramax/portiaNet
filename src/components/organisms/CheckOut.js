import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from '../atoms';
import CheckInCard4 from '../molecules/CheckInCard4';
import MyIcon from '../../assets/config/icon-font.js';
class CheckOut extends Component {
  onButtonPress() {
    console.log('bla');
  }
  render() {
    const { buttonContainer, buttonContainer2, buttonText, text, fullContainer, textContainer } = styles;
    return (
      <Card style={fullContainer}>
        <CardSection style={textContainer}>
          <CardSection>
            <MyIcon name={'location'} size={50} color={'#ff5722'} />
            <Text style={text}>¿Desea salir de este lugar?</Text>
            <Text>
              Al aceptar realizará el Check-Out de este Punto de Venta,
              registrando sus coordenadas GPS
            </Text>
          </CardSection>
        </CardSection>
        <CardSection style={fullContainer}>
          <CheckInCard4 />
          <Button
            style={buttonContainer}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={{marginTop:100}}>Correcto, quiero salir!</Text>
          </Button>

          <Button
            style={buttonContainer2}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={buttonText}>Continuar en este Punto de Venta</Text>
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  buttonContainer: {
    height: '10%',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '8%',
    backgroundColor: '#ff5722',
    borderColor: '#ff5722'
  },
  buttonContainer2: {
    height: '10%',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '8%',
  },
  fullContainer: {
    backgroundColor: '#fff',
    height: '80%'
  },
  textContainer: {
    height: '20%',
    backgroundColor: '#fff'
  },
  text: {
    color: '#ff5722'
  },
  buttonText: {
    color: '#4a90e2'
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
export default CheckOut;
