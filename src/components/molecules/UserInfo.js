import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from '../atoms';

class UserInfo extends Component {
  render() {
    const {
      buttonContainer,
      cardSectionContainer,
      textDate,
      textName,
      textPosition
    } = styles;
    return (
      <Card>
        <CardSection style={cardSectionContainer}>
        {/* TODO: get date  */}
          <Text style={textDate}>17 de Febrero </Text> 
          <Text style={textName}>Jhon Doe</Text>
          <Text style={textPosition}>Supervisor Zona Centro</Text>
          <Button style={buttonContainer}>posicion</Button>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  cardSectionContainer: {
    height: '20%',
    backgroundColor: '#029794'
  },
  textDate: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 14
  },
  textName: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  textPosition: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14
  },
  buttonContainer: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    marginTop: '20%',
    marginLeft: '20%',
    marginBottom: '20%',
    marginRight: '20%',
    width: '50%',
    height: '50%'
  }
};
export default UserInfo;
