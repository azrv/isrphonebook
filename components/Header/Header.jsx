import React, { useState } from 'react';
import { Animated, Easing } from 'react-native';
import Search from './Search';
import NotFound from './Search/NotFound';
import styles from './styles';
import Overlay from './Overlay';
import BackButton from './BackButton';
import SearchResult from './Search/SearchResult'
import { buildOrgs } from './utils';
import UseOrganisationsSearch from '../../src/hooks/UseOrganisationsSearch';

const paddingValue = new Animated.Value(30);

const Header = () => {
  const [withOverlay, setWithOverlay] = useState(false);
  const [foundItems, setFoundItems] = useState([]);

  const showOverlay = () => {
    setWithOverlay(true);
  }

  const hideOverlay = () => {
    setWithOverlay(false);
  }

  // TODO take this into Search component
  const stretchInSearch = () => {
    Animated.timing(paddingValue, {
      toValue: 50,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };

  const stretchOutSearch = () => {
    Animated.timing(paddingValue, {
      toValue: 30,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.in(Easing.elastic(0.7))
    }).start();
  };

  const search = UseOrganisationsSearch()

  const onKeywordChange = (text) => {
    const suggestions = search.searchBy(text);

    setFoundItems(buildOrgs(suggestions));
  }

  withOverlay ? stretchInSearch() : stretchOutSearch();

  return (
    <>
      <Animated.View style={[styles.headerContainer, {paddingLeft: paddingValue}]}>
        <Search
          onChange={onKeywordChange}
          onKeyPress={showOverlay}
        />

      </Animated.View>
      <BackButton
        hidden={withOverlay}
        onPressBack={hideOverlay}
      />
      <Overlay
        hidden={!withOverlay}
      >
        {
          foundItems.length ? <SearchResult items={foundItems} /> : <NotFound />
        }
      </Overlay>
    </>
  )
};

export default Header;
