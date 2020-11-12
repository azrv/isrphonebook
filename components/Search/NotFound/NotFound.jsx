import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const NotFound = ({
  onPressBack,
}) => {
  return (
    <>
      <Text>Not Found</Text>
      <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
        <Text style={styles.text}>BACK</Text>
      </TouchableOpacity>
    </>
  )
};

export default NotFound;