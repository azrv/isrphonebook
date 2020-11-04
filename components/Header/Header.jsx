import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default Search = () => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text>I am header.</Text>
    </View>
  )
};

const headerStyles = StyleSheet.create({
  headerContainer: {
    marginTop: 30,
    marginLeft: 30,
  },
});
