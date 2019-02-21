//FIXME : colors and stuffs
import React from 'react';
import { Image, View } from 'react-native';
import { white } from 'ansi-colors';

const AvatarIcon = () => {
  const { avatarIcon } = styles;
  return (
    <View style={avatarIcon}>
      <Image style={avatarIcon} source={require('../../assets/avatar.jpg')} />
    </View>
  );
};

const styles = {
  avatarIcon: {
    borderColor: '#fff',
    borderWidth: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60/2
  }
};
export { AvatarIcon };
