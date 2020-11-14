import React from 'react';
import {
  Dimensions,
  Animated,
  Easing,
  View,
} from 'react-native';
import styles from './styles';

const { height } = Dimensions.get('window');
const goUp = new Animated.Value(height);

const showOverlay = () => {
  Animated.timing(goUp, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();
};

const hideOverlay = () => {
  Animated.timing(goUp, {
    toValue: height,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();
};

const Overlay = ({
  children,
  hidden,
}) => {
  hidden && hideOverlay();
  !hidden && showOverlay();

  return (
    <Animated.View style={[
      styles.overlay,
      { transform: [{ translateY: goUp }] }
    ]}>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </Animated.View>
  )
};

export default Overlay;
