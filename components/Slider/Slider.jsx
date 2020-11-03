import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default Slider = () => {
  return (
    <View style={sliderStyles.sliderContainer}>
      <View style={sliderStyles.sliderCard}>
        <View style={sliderStyles.cardImage}>
          <Text>Card Image</Text>
        </View>
        <Text style={sliderStyles.cardTitle}>Card Title</Text>
      </View>
      <View style={sliderStyles.sliderCard}>
        <View style={sliderStyles.cardImage}>
          <Text>Card Image2</Text>
        </View>
        <Text style={sliderStyles.cardTitle}>Card Title2</Text>
      </View>
    </View>
  )
};

const sliderStyles = StyleSheet.create({
  sliderContainer: {
    marginTop: 20,
    backgroundColor:'#6c6c6c',
  },
  sliderCard: {
    backgroundColor:'#ddd',
    height: 250,
  },
  cardImage: {
    backgroundColor:'red',
    height:200,
  },
  cardTitle: {
    backgroundColor:'#6c6c6c',
    textAlign: 'center',
    height:50,
  },
});
