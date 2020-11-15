import React, { useState } from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default BackButton = ({
  hidden,
  onPressBack
}) => {
  const [opacityValue, setOpacityValue] = useState(new Animated.Value(0));
  const onBackButtonAppear = () => {
    Animated.timing(opacityValue, {
      toValue: 0.4,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };

  const onBackButtonDisappear = () => {
    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };


  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  hidden && onBackButtonAppear();
  !hidden && onBackButtonDisappear();
  return (
    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={onPressBack}>
        <AnimatedIcon name="keyboard-arrow-left" style={[styles.backButton, {opacity: opacityValue}]} />
      </TouchableOpacity>
    </View>
  )
};
