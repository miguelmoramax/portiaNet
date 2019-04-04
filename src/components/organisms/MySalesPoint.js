import React, { Component } from 'react';
import { Text } from 'react-native';
import MapInfo from '../molecules/MapInfo';
import CheckInCardMap from '../molecules/CheckInCardMap';
import { Card, CardSection } from '../atoms';
import { Button } from '../atoms/index';

class MySalesPoint extends Component {
  render() {
    const {
      homeMenuContainer,
      container,
      textStyle,
      button,
      buttonText,
      buttonContainer,
      bottomContainer
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
            <CardSection>
              <Text style={textStyle}>Store-check Levantados (3)</Text>
            </CardSection>
          </CardSection>
          <CardSection style={bottomContainer}>
            <Button style={buttonContainer}>
              <Text style={buttonText}>Comenzar con uno!</Text>
            </Button>
          </CardSection>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  bottomContainer: {
    width: '100%',
    height: '20%'
  },
  buttonText: {
    color: '#ff5722',
    marginTop: '5%',
    textAlign: 'auto'
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
  buttonContainer: {
    flex: 2,
    width: '80%',
    marginTop: '8%',
    marginLeft: '8%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff5722'
  },
  container: {
    paddingTop: '4%',
    backgroundColor: '#efefef',
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start'
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
  }
};
export default MySalesPoint;
