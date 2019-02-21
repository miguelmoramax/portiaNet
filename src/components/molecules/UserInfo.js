import React, { Component } from 'react';
import { Text } from 'react-native';
import { AvatarIcon, Button, Card, CardSection } from '../atoms';


class UserInfo extends Component {
  render() {
    const {
      avatarContainer,
      button,
      buttonContainer,
      centerContainer,
      cardSectionContainer,
      dateContainer,
      rightContainer,
      textDate,
      textName,
      textPosition
    } = styles;
    return (
      <Card>
        <CardSection style={cardSectionContainer}>
          <CardSection style={avatarContainer}>
            <AvatarIcon />
          </CardSection>
          <CardSection style={centerContainer}>
            <Text style={textName}>Jane Doe</Text>
            <Text style={textPosition}>Supervisor Zona Centro</Text>
          </CardSection>
          <CardSection style={rightContainer}>
            <CardSection style={dateContainer}>
              <Text style={textDate}>17 de Febrero </Text>
            </CardSection>

            <CardSection style={buttonContainer}>
              <Button style={button} />
            </CardSection>
          </CardSection>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  avatarContainer: {
    marginTop: '10%',
    marginLeft: '5%'
  },
  buttonContainer: {
    marginTop: '50%',
    marginRight: '15%'
  },
  cardSectionContainer: {
    flexDirection: 'row',
    height: '20%',
    backgroundColor: '#029794'
  },
  centerContainer: {
    marginTop: '12%',
    marginLeft: '5%'
  },
  dateContainer: {
    marginTop: '7%',
    marginRight: '8%'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 56 / 2
  },
  textDate: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 14,
    fontWeight: 'normal'

  },
  textName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'

  },
  textPosition: {
    color: '#fff',
    fontSize: 14
  }
};
export default UserInfo;
