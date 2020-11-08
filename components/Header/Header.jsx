import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ServerContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

var searchKeyword = '';
const updateKeyword = (value) => {
  searchKeyword=value;
};

const transformValue = new Animated.Value(height);
const opacityValue = new Animated.Value(0);

const onFocusAnimation = () => {
  Animated.timing(transformValue, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();

  Animated.timing(opacityValue, {
    toValue: 1,
    duration:400,
    useNativeDriver: true,
  }).start();
};

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
  return (
    <>
      <View style={headerStyles.headerContainer}>
        <View style={headerStyles.searchContainer}>
          <Icon name="search" style={headerStyles.searchIcon} />
          <TextInput
            style={headerStyles.searchText}
            placeholder="Start your search"
            placeholderTextColor="#fff"
            returnKeyType={"search"}
            onSubmitEditing={onFocusAnimation}
            onChangeText={(value) => updateKeyword(value)}
          />
        </View>
      </View>

      <Animated.View style={[headerStyles.animatedView, {transform: [{ translateY: transformValue }], opacity: opacityValue}]}>
        <View style={headerStyles.animatedViewContainer}>
          <TouchableOpacity onPress={onBlurAnimation} style={headerStyles.backButton}>
            <Text style={{fontSize:22, fontWeight: "500", color: 'white'}}>BACK</Text>
          </TouchableOpacity>

          <Text style={{fontSize:24}}>No searching functionality yet.</Text>


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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 102,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.2,
    shadowRadius:5,
    elevation: 5,
  },
  searchContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F4C81',
    borderRadius: 40,
    height: 50,
  },
  searchText: {
    justifyContent: 'center',
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    height: 60,
  },
  searchIcon: {
    justifyContent: 'center',
    fontSize: 18,
    color: '#fff',
    marginRight:5,
  },
  animatedView: {
    position: 'absolute',
    top: 105,
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
