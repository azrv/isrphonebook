import React from 'react';

import { View, ScrollView,StyleSheet } from 'react-native';

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
    paddingBottom:25,
    backgroundColor: 'white',
  }
});


export default ScreenWrapper;
