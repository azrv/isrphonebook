import React from 'react';

import Button from '../../../../src/components/Button';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ResultItem = ({
  title,
  path,
}) => {
  const navigation = useNavigation()

  return (
    <Button
      onPress={() => {
        navigation.navigate(path.route, path.params);
      }}
      buttonStyle={styles.item}
      textStyle={styles.text}
    >
      {title}
    </Button>
  )
};

export default ResultItem;