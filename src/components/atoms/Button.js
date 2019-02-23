//FIXME : colors, stuffs pass style as props
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import MyIcon from '../../assets/config/icon-font.js';

const Button = ({ onPress, children, ...props }) => {
  const { textStyle } = styles;
  return (
    <View style={[props.style]}>
      <TouchableOpacity onPress={onPress}>
        {children ? (
          <Text style={textStyle}>{children}</Text>
        ) : (
          <MyIcon name={props.name} size={props.size} color={props.color}/>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = {
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
