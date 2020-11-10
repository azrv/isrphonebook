import React from 'react';

import Header from '../../../components/Header'
import { View, SafeAreaView, StatusBar, ScrollView,StyleSheet } from 'react-native';

const ScreenWrapper = ({
  children,
}) => {
  return (
    <ScrollView
      style={wrapperStyles.scrollView}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    >
      <View style={wrapperStyles.screenContainer}>
        {children}
      </View>
    </ScrollView>
  )
};
const wrapperStyles = StyleSheet.create({
  scrollView: {
    zIndex: 100,
    backgroundColor: 'white',
  },
  statusBarContainer: {
    backgroundColor: '#0F4C81',
  },
  screenContainer: {
    paddingTop:20,
    paddingLeft:30,
    paddingRight:30,
    paddingBottom:20,
    backgroundColor: 'white',
  }
});


export default ScreenWrapper;
