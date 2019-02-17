//FIXME : colors, stuffs pass style as props
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children, ...props }) => {
  const { textStyle} = styles;
  
  return (
    <View style={[props.style]}>
      <TouchableOpacity onPress={onPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  viewStyle: {
    width: '20%',
    height: '20%'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
export { Button };
