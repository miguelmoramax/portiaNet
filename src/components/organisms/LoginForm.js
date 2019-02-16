// TODO : do the login form here
import React, { Component } from 'react';
import { Button, Input } from '../atoms';
import { Text, View, ImageBackground, Image } from 'react-native';

class LoginForm extends Component {
  onButtonPress() {
    console.log('bla');
  }
  render() {
    const { viewStyle, imageStyle, logo } = styles;
    return (
      <View style={viewStyle}>
        <ImageBackground
          source={require('../../assets/loginBackground.png')}
          style={imageStyle}
        >
          <Image source={require('../../assets/logo.png')} style={logo} />
          <Input placeholder="E-mail" value={this.props.email} />
          <Input placeholder="Contraseña" value={this.props.email} />
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
    height: '10%',
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
    flexDirection: 'row'
  },
  logo: {
    // flex:1,
    marginBottom: '5%',
    marginTop: '50%',
    marginLeft: '25%',
    marginRight: '25%',
    width: '50%',
    height: '15%'
  }
};
export default LoginForm;
