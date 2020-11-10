import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  Easing
} from 'react-native';

import Search from '../Search';

const { height } = Dimensions.get('window');

const transformValue = new Animated.Value(height);
const opacityValue = new Animated.Value(0);

const onBlurAnimation = () => {
  Animated.timing(transformValue, {
    toValue: height,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();

  Animated.timing(opacityValue, {
    toValue: 0,
    duration: 400,
    useNativeDriver: true,
  }).start();
};

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [keyword, setKeyword] = useState();

  return (
    <>
      <View style={headerStyles.headerContainer}>
        <View style={headerStyles.searchContainer}>
          <Search onChange={setKeyword} />
        </View>
      </View>

      <Animated.View style={[ headerStyles.animatedView, { transform: [{ translateY: transformValue }], opacity: opacityValue } ]}>
        <View style={headerStyles.animatedViewContainer}>
          <TouchableOpacity onPress={onBlurAnimation} style={headerStyles.backButton}>
            <Text style={{ fontSize:22, fontWeight: "500", color: 'white' }}>BACK</Text>
          </TouchableOpacity>

          <Text style={{ fontSize:24 }}>No searching functionality yet.</Text>
        </View>
      </Animated.View>
    </>
  )
};

const headerStyles = StyleSheet.create({
  headerContainer: {
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom:15,
    backgroundColor: '#0F4C81',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 102,
    // shadowColor: '#000',
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity:  0.4,
    // shadowRadius: 4,
    // elevation: 5,
  },
  searchContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    opacity: 0.4,
    borderRadius: 40,
    height: 50,
  },
  animatedView: {
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 101,
    backgroundColor: 'white',
  },
  animatedViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height:40,
    width:80,
    marginBottom:20,
    backgroundColor: '#6c6c6c',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Header;
