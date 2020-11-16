import React, { useState } from 'react';
import { Animated, Easing } from 'react-native';
import Search from './Search';
import NotFound from './Search/NotFound';
import styles from './styles';
import Overlay from './Overlay';
import BackButton from './BackButton';


const paddingValue = new Animated.Value(30);
const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [keyword, setKeyword] = useState();
  const [withOverlay, setWithOverlay] = useState(false);

  const showOverlay = () => {
    setWithOverlay(true);
  }
  const hideOverlay = () => {
    setWithOverlay(false);
  }



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

  withOverlay && stretchInSearch();
  !withOverlay && stretchOutSearch();
  return (
    <>
      <Animated.View style={[styles.headerContainer, {paddingLeft: paddingValue}]}>
        <Search
          onChange={setKeyword}
          onSubmitEditing={showOverlay}
        />

      </Animated.View>
      <BackButton
        hidden={withOverlay}
        onPressBack={hideOverlay}
      />
      <Overlay
        hidden={!withOverlay}
      >
        <NotFound />
      </Overlay>


    </>
  )
};

export default Header;
