import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import MapInfo from '../molecules/MapInfo';
import CheckInCardMap from '../molecules/CheckInCardMap';
import CheckInCardMapPhoto from '../molecules/CheckInCardMapPhoto';
import { Card, CardSection } from '../atoms';
import { Button, Icon } from '../atoms/index';
import MyIcon from '../../assets/config/icon-font.js';

class LocalName extends Component {
  render() {
    const {
      homeMenuContainer,
      textContainer,
      textStyle,
      button,
      container
    } = styles;
    return (
      <Card style={homeMenuContainer}>
        <CardSection style={{ zIndex: 999, flex: 1 }}>
          <MapInfo />
        </CardSection>
        <CardSection
          style={{ paddingTop: '15%', height: '80%', backgroundColor: '#fff' }}
        >
          <CheckInCardMap />
          <CardSection style={container}>
              <Button style={button} name={'plus'} size={20} color={'#fff'} />
            <CardSection style={textContainer}>
              <Text style={textStyle}>Store-check Levantados</Text>
            </CardSection>
          </CardSection>
          <CheckInCardMapPhoto />
          <CheckInCardMapPhoto />
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  container: {
    paddingTop: '4%',
    backgroundColor: '#efefef',
    height: '15%',
    width:'100%',
    flexDirection:'row',
    alignItems: 'flex-start'
  },
  button: {
    marginLeft: '2%',
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2
  },
  homeMenuContainer: {
    backgroundColor: '#fff',
    zIndex: 1
  },
  checkPointStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%'
  },
  textStyle: {
    color: '#9b9b9b',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: '5%',
    paddingTop: '3%',
    paddingLeft: '5%'
  },
};

export default LocalName;
