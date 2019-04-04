import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../atoms/index';
import { Button, Icon } from '../atoms/index';
import MyIcon from '../../assets/config/icon-font.js';

export default class CheckInCard extends Component {
  render() {
    const {
      cardStyle,
      leftSection,
      middleSection,
      middleUpper,
      middleCenter,
      locationStyle,
      textStyle
    } = styles;
    return (
      <CardSection style={cardStyle}>
        <CardSection style={leftSection}>
          <MyIcon
            style={{ marginTop: '50%', marginLeft: '30%' }}
            name={'commerical-building'}
            size={25}
            color={'#9b9b9b'}
          />
          <MyIcon
            style={{ marginTop: '65%', marginLeft: '15%' }}
            name={'commerical-building'}
            size={15}
            color={'#9b9b9b'}
          />
        </CardSection>
        <CardSection style={middleSection}>
          <CardSection style={middleUpper}>
            <MyIcon name={'location'} size={15} color={'#9b9b9b'} />
            <Text style={textStyle}> 9:58 </Text>
          </CardSection>
          <CardSection style={middleCenter}>
            <Text style={locationStyle}> Nombre del Local Nº1 </Text>
            <Text style={textStyle}>Dirección del Local, Santiago de Chile</Text>
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
