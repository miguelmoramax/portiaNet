// TODO : do the login form here
import React, { Component } from 'react';
import { Button, Input, Card, CardSection } from '../atoms';
import { Text, ImageBackground, Image, View } from 'react-native';

class LoginForm extends Component {
  onButtonPress() {
    console.log('bla');
  }
  render() {
    const { viewStyle, imageStyle, logo, buttonContainer } = styles;
    const source = { icon: require('../../assets/point.png') };
    return (
      <Card style={viewStyle}>
        <ImageBackground
          source={require('../../assets/loginBackground.png')}
          style={imageStyle}
        >
          <Image source={require('../../assets/logo.png')} style={logo} />
          <Input placeholder="E-mail" value={this.props.email} />
          <Input placeholder="Contraseña" value={this.props.email} />
          <Button
            style={buttonContainer}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text>Ingresar</Text>
          </Button>
        </ImageBackground>
      </Card>
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
  buttonContainer: {
    flex: 2,
    height: '10%',
    width: '100%',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '8%',
    backgroundColor: '#ff5722',
    borderColor: '#ff5722'
  },
  logo: {
    marginBottom: '5%',
    marginTop: '50%',
    marginLeft: '25%',
    marginRight: '25%',
    width: '50%',
    height: '15%'
  }
};
export default LoginForm;
