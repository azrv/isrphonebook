import React from 'react';
import {
  Animated,
  Text
} from 'react-native';
import styles from './styles';

export default NotificationOverlay = ({
  transformValue,
  text
}) => {
  return (
    <Animated.View style={[
      styles.animatedView,
      {
        transform: [{
          translateY: transformValue
        }]
      }
    ]}>
      <Text style={styles.animatedViewText}>{text}</Text>
    </Animated.View>
  )
}
