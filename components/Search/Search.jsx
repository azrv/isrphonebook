import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, View } from 'react-native';
import styles from './styles';

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
