// TODO : do the login form here
import React, { Component } from 'react';
import { Button } from '../atoms/Button';
import { Text, View, ImageBackground, Image, StatusBar } from 'react-native';

class LoginForm extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  onButtonPress() {
    console.log('bla');
  }
  render() {
    const { viewStyle, imageStyle } = styles;
    return (
      <View style={viewStyle}>
      <StatusBar />
        <ImageBackground
          source={require('../../assets/loginBackground.png')}
          style={imageStyle}
        >
          <Image source={require('../../assets/logo.png')} />
          <Button
            style={styles.buttonStyle}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text>Ingresar</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover'
  },
  buttonStyle: {
    width: 30,
    height: 10
  }
};
export default LoginForm;
