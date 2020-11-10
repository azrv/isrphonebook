import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Animated, Easing, Dimensions } from 'react-native';

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


const Search = ({
  onChange,
}) => {
  return (
    <>
      <Icon name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchText}
        placeholder="Start your search"
        placeholderTextColor="#fff"
        returnKeyType={"search"}
        onSubmitEditing={onFocusAnimation}
        onChangeText={(value) => onChange(value)}
      />
    </>
  )
}

export default Search;