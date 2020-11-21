import React from 'react';

import Button from '../../../../src/components/Button';
import styles from './styles';

const ResultItem = ({
  title,
}) => {
  return (
    <Button
      buttonStyle={styles.item}
      textStyle={styles.text}
    >
      {title}
    </Button>
  )
};

export default ResultItem;