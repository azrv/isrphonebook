import React, { useState } from 'react';
import {
  Animated,
  View,
  Easing,
  Text,
  Dimensions
} from 'react-native';
import styles from './styles';

export const NotificationContext = React.createContext();

export default NotificationProvider = ({
  children
}) => {
  const [notificationText, setNotificationText] = useState('Empty Notification');
  const triggerNotification = (text) => {
    setNotificationText(text);
    console.log('Triggered notification: ' + text);
    onAppearNotification();
    setTimeout(() => {  onDisappearNotification(); }, 1200);
  };

  const notificationTransformValue = new Animated.Value(0);

  const onAppearNotification = () => {
    Animated.timing(notificationTransformValue, {
      toValue: 95,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };

  const onDisappearNotification = () => {
    Animated.timing(notificationTransformValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };

  return (
    <NotificationContext.Provider value={triggerNotification}>
      {children}
      <Animated.View style={[
        styles.animatedView,
        {
          transform: [{
            translateY: notificationTransformValue,
          }]
        }
      ]}>
        <Text style={styles.animatedViewText}>{notificationText}</Text>
      </Animated.View>

    </NotificationContext.Provider>
  )
}
