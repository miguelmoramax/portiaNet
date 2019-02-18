import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection } from '../atoms';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Avatar
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
            }}
          />

          <Text style={textDate}>17 de Febrero </Text>
          <Text style={textName}>Jhon Doe</Text>
          <Text style={textPosition}>Supervisor Zona Centro</Text>
          {/* <Button icon={<Icon name="arrow-right" size={15} color="white" />} /> */}

          <Button style={buttonContainer}></Button>
          {/* <Icon name="sc-telegram" type="evilicon" color="#517fa4" /> */}
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
    width: 50,
    height: 50
  }
};
export default UserInfo;
