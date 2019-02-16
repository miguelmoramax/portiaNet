import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#cecece',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    color: '#cecece',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    backgroundColor: '#994a4a4a',
    borderColor: '#fff',
    height: '10%',
    width: '84%',
    marginLeft: '8%',
    marginRight: '8%',
    marginBottom: '2%',
    flexDirection: 'row',
    alignItems: 'center'
  }
};
export { Input };
