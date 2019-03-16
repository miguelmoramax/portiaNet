//FIXME : colors and stuffs
import React from 'react';
import { Image, View } from 'react-native';

const AvatarIcon = () => {
  const { avatarIcon } = styles;
  return (
    <View>
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
