import React from 'react';
import { FlatList } from 'react-native';

import ResultItem from '../ResultItem';
import styles from './styles';

const SearchResult = ({
  items,
}) => {
  return (
    <FlatList
      data={items}
      style={styles.container}
      renderItem={({ item }) => {
        return (
          <ResultItem
            title={item.title}
            match={item.match}
          />
        )
      }}
    />
  )
};

export default SearchResult;