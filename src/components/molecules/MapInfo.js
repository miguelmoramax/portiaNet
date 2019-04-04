import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { AvatarIcon, Button, Card, CardSection } from '../atoms';
import { connect } from 'react-redux';
class MapInfo extends Component {
  onButtonPress() {}
  render() {
    const {
      button,
      buttonContainer,
      cardSectionContainer,
      imgStyle
    } = styles;
    return (
      <Card>
        <CardSection style={cardSectionContainer}>
          <ImageBackground
            source={require('../../assets/map.jpg')}
            style={imgStyle}
          />
          <CardSection style={buttonContainer}>
            <Button
              onPress={this.onButtonPress.bind(this)}
              style={button}
              name={'plus'}
              size={45}
              color={'#fff'}
            />
          </CardSection>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  imgStyle: {
    width: '100%',
    height: 186
  },
  buttonContainer: {
    marginTop: '-6%',
    marginLeft: '80%'
  },
  cardSectionContainer: {
    flexDirection: 'column',
    flex: 1,
    height: '20%'
  },
  button: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    shadowColor: '#3d0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5
  }
};

export default MapInfo;
