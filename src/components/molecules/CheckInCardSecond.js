import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../atoms/index';
import { Button, Icon } from '../atoms/index';
import MyIcon from '../../assets/config/icon-font.js';

export default class CheckInCardSecond extends Component {
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
      locationStyle,
      textStyle
    } = styles;
    return (
      <CardSection style={cardStyle}>
        <CardSection style={leftSection}>
          <MyIcon
            style={{ marginTop: '50%', marginLeft: '30%' }}
            name={'location'}
            size={25}
            color={'#ff5722'}
          />
        </CardSection>
        <CardSection style={middleSection}>
        <CardSection style={middleUpper}>
            <Text style={textStyle}> A 3 Km </Text>
          </CardSection>
          <CardSection style={middleCenter}>
            <Text style={locationStyle}> Construmart Maipú Nº 28 </Text>
            <Text style={textStyle}>
              Avenida Pajaritos 2098, Maipú, Santiago
            </Text>
          </CardSection>
          
        </CardSection>
        <CardSection style={rightSection}>
          <CardSection style={buttonContainer}>
            <Button style={button} name={'plus'} size={20} color={'#fff'} />
          </CardSection>
        </CardSection>
      </CardSection>
    );
  }
}
const styles = {
  cardStyle: {
    flexDirection: 'row',
    borderColor: '#d6d6d6',
    borderWidth: 1,
    marginLeft: '2.5%',
    width: '96%',
    height: '25%'
  },
  button: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2
  },
  buttonContainer: {
    marginTop: '30%'
  },
  leftSection: {
    width: '20%',
    flexDirection: 'row'
  },
  middleSection: {
    width: '50%',
    marginLeft: '-10%',
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
    width: '30%',
    marginLeft: '20%'
  },
  locationStyle: {
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
