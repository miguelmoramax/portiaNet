import React from 'react';
import { View } from 'react-native';

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    flex: 1,
    height: '100%'
  }
};
export { Card };
