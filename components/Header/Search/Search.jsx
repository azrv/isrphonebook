import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, View } from 'react-native';
import styles from './styles';
import { Localize } from '../../../src/localization/Localize';


const Search = ({
  onChange,
  onKeyPress,
}) => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchText}
        placeholder={Localize('searchPlaceholder')}
        placeholderTextColor="#fff"
        returnKeyType={"search"}
        onKeyPress={onKeyPress}
        onChangeText={(value) => onChange(value)}
      />
    </View>
  )
}

export default Search;
