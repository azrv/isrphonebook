import React, { useState } from 'react';
import { View } from 'react-native';
import Search from '../Search';
import NotFound from '../Search/NotFound';
import styles from './styles';

import Overlay from '../Overlay';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [keyword, setKeyword] = useState();
  const [withOverlay, setWithOverlay] = useState();

  const showOvelay = () => { setWithOverlay(true) }
  const hideOvelay = () => { setWithOverlay(false) }

  return (
    <>
      <View style={styles.headerContainer}>
        <Search 
          onChange={setKeyword} 
          onSubmitEditing={showOvelay}
        />
      </View>

      <Overlay
        hidden={!withOverlay}
      >
        <NotFound
          onPressBack={hideOvelay}
        />
      </Overlay>
    </>
  )
};

export default Header;
