import React from 'react';
import {
  View,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Localization from 'expo-localization';

const langTag = Localization.locale.split('-')[0];
const opacityValue = new Animated.Value(0);

const BackButton = ({
  hidden,
  onPressBack
}) => {

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
        <AnimatedIcon name={langTag === 'he' ? "keyboard-arrow-right" : "keyboard-arrow-left"} style={[styles.backButton, {opacity: opacityValue}]} />
      </TouchableOpacity>
    </View>
  )
};

export default BackButton;
