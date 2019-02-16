//FIXME : colors and stuffs
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, props }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={[buttonStyle]} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: '3%'
  },
  buttonStyle: {
    backgroundColor: '#ff5722',
    borderColor: '#ff5722',
    height: '10%',
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '8%',
  }
};
export { Button };
