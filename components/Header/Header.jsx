import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import Search from '../Search';
import styles from './styles';

const { height } = Dimensions.get('window');

const transformValue = new Animated.Value(height);
const opacityValue = new Animated.Value(0);

const onFocusAnimation = () => {
  Animated.timing(transformValue, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();

  Animated.timing(opacityValue, {
    toValue: 1,
    duration:400,
    useNativeDriver: true,
  }).start();
};

const onBlurAnimation = () => {
  Animated.timing(transformValue, {
    toValue: height,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();

  Animated.timing(opacityValue, {
    toValue: 0,
    duration: 400,
    useNativeDriver: true,
  }).start();
};

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [keyword, setKeyword] = useState();

  return (
    <>
      <View style={styles.headerContainer}>
        <Search onChange={setKeyword} onSubmitEditing={onFocusAnimation} />
      </View>

      <Animated.View style={[ styles.animatedView, { transform: [{ translateY: transformValue }], opacity: opacityValue } ]}>
        <View style={styles.animatedViewContainer}>
          <TouchableOpacity onPress={onBlurAnimation} style={styles.backButton}>
            <Text style={{ fontSize:22, fontWeight: "500", color: 'white' }}>BACK</Text>
          </TouchableOpacity>

          <Text style={{ fontSize:24 }}>No searching functionality yet.</Text>
        </View>
      </Animated.View>
    </>
  )
};

export default Header;
