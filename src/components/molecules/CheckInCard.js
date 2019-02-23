import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../atoms/index';
import { Button, Icon } from '../atoms/index';
import MyIcon from '../../assets/config/icon-font.js';

export default class CheckInCard extends Component {
  render() {
    const {
      button,
      cardStyle,
      leftSection,
      middleSection,
      rightSection,
      locationStyle,
      textStyle
    } = styles;
    return (
      <CardSection style={cardStyle}>
        <CardSection style={leftSection}>
          <MyIcon name={'commerical-building'} size={35} color={'#cecece'} />
        </CardSection>
        <CardSection style={middleSection}>
          <MyIcon name={'location'} size={30} color={'#cecece'} />
          <Text style={textStyle}> 3 Km </Text>
          <Text style={locationStyle}> Construmart Maipú Nº 28 </Text>
          <Text style={textStyle}>
            {' '}
            Avenida Pajaritos 2098, Maipú, Santiago{' '}
          </Text>
        </CardSection>
        <CardSection style={rightSection}>
          <Button style={button} name={'ok'} size={30} color={'#fff'} />
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
    marginTop: '30%',
    marginLeft: '30%',
    marginRight: '30%',
    backgroundColor: '#cecece',
    borderColor: '#cecece',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  },
  leftSection: {
    width: '15%',
    backgroundColor: '#455'
  },
  middleSection: {
    width: '65%',
    backgroundColor: '#475'
  },
  rightSection: {
    width: '20%',
    backgroundColor: '#435'
  },
  locationStyle: {
    color: '#f5a623',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 14
  },
  textStyle: {
    fontSize: 10
  }
};
