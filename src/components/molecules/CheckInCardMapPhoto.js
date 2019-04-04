import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../atoms/index';
import { Button, Icon } from '../atoms/index';
import { ImageBackground } from 'react-native';

export default class CheckInCardMapPhoto extends Component {
  render() {
    const {
      button,
      buttonContainer,
      cardStyle,
      leftSection,
      middleSection,
      middleUpper,
      middleCenter,
      rightSection,
      gestionStyle,
      textStyle,
      imgStyle
    } = styles;
    return (
      <CardSection style={cardStyle}>
        <CardSection style={leftSection}>
          <ImageBackground 
            source={require('../../assets/people.jpg')}
            style={imgStyle}
          />
        </CardSection>
        <CardSection style={middleSection}>
          <CardSection style={middleUpper}>
            <Text style={textStyle}> 9:48 </Text>
          </CardSection>
          <CardSection style={middleCenter}>
            <Text style={gestionStyle}> Tipo de Gestión </Text>
            <Text style={textStyle}> Gestiones
            </Text>
          </CardSection>
        </CardSection>
        <CardSection style={rightSection}>
          <CardSection style={buttonContainer}>
            <Button style={button} name={'ok'} size={15} color={'#fff'} />
          </CardSection>
        </CardSection>
      </CardSection>
    );
  }
}
const styles = {
  imgStyle: {
    height: '100%',
    width: '100%',
  },
  cardStyle: {
    paddingTop: '2%',
    paddingBottom: '2%',
    flexDirection: 'row',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginLeft: '2.5%',
    width: '100%',
    height: '25%'
  },
  button: {
    backgroundColor: '#cecece',
    borderColor: '#cecece',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2
  },
  buttonContainer:{
    marginTop: '30%',
  },
  leftSection: {
    width: '25%',
    height: '80%',
    flexDirection: 'row'
  },
  middleSection: {
    width: '60%',
    flexDirection: 'column'
  },
  middleUpper: {
    flexDirection: 'row',
    marginTop: '10%',
    marginLeft: '5%'
  },
  middleCenter: {
    flexDirection: 'column',
    marginLeft: '5%'
  },
  rightSection: {
    width: '15%'
  },
  gestionStyle: {
    color: '#000',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 14
  },
  textStyle: {
    fontSize: 10,
    color: '#9b9b9b',
    paddingTop: '3%'
  }
};
