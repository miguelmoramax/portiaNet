import React from 'react';
import { Image, View } from 'react-native';

const Icon = ({...props}) => {
  return (
    <View>
      <Image source={[...props]}/>
    </View>
  );
};

export { Icon };
