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
          <CardSection style={middleCenter}>
            <Text style={locationStyle}> Construmart Maipú Nº 28 </Text>
            <Text style={textStyle}>
              Avenida Pajaritos 2098, Maipú, Santiago
            </Text>
          </CardSection>
          <CardSection style={middleUpper}>
            <Text style={textStyle}> A 3 Km </Text>
          </CardSection>
        </CardSection>
        <CardSection style={rightSection}>
          <CardSection style={buttonContainer}>
            <Button style={button} name={'ok'} size={30} color={'#fff'} />
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
    width: '95%',
    height: '25%'
  },
  button: {
    backgroundColor: '#cecece',
    borderColor: '#cecece',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  },
  buttonContainer: {
    marginTop: '30%'
  },
  leftSection: {
    width: '15%',
    flexDirection: 'row'
  },
  middleSection: {
    width: '65%',
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
    width: '20%'
  },
  locationStyle: {
    color: '#f5a623',
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
