import React, { useState, useRef } from 'react';
import {
  Animated,
  Easing,
  Text
} from 'react-native';
import styles from './styles';

export const NotificationContext = React.createContext();

const NotificationProvider = ({
  children
}) => {
  const notificationTransformValue = useRef(new Animated.Value(-40)).current;

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
      toValue: -40,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };

  const [notificationText, setNotificationText] = useState('Empty Notification');
  const triggerNotification = (text) => {
    setNotificationText(text);
    onAppearNotification();
    setTimeout(() => {  onDisappearNotification(); }, 1200);
  };
  return (
    <NotificationContext.Provider value={triggerNotification}>
      {children}
      <Animated.View style={[
        styles.animatedView,
        {
          transform: [{
            translateY: notificationTransformValue
          }]
        }
      ]}>
        <Text style={styles.animatedViewText}>{notificationText}</Text>
      </Animated.View>
    </NotificationContext.Provider>
  )
}

export default NotificationProvider;
