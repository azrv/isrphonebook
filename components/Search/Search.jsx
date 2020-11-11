import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Animated, Easing, Dimensions, View } from 'react-native';
import styles from './styles';

const { height } = Dimensions.get('window');

const Search = ({
  onChange,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchText}
        placeholder="Start your search"
        placeholderTextColor="#fff"
        returnKeyType={"search"}
        onSubmitEditing={onSubmitEditing}
        onChangeText={(value) => onChange(value)}
      />
    </View>
  )
}

export default Search;
