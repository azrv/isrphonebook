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
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:5,
    backgroundColor: 'white',
  }
});


export default ScreenWrapper;
