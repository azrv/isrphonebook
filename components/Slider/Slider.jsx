import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("window");

const Slider = ({ items }) => {
  return (
    <View style={[sliderStyles.sliderContainer]}>
      <ScrollView
        horizontal
        snapToInterval={width * 0.65 + 15}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      >
      {items.map((item, index) => (
        <View
          key={index}
          style={ (index === items.length - 1) ? sliderStyles.lastSliderCard : sliderStyles.sliderCard}
        >
          <Image
            style={sliderStyles.cardImage}
            source={{
              uri: item.images[0]
            }}
          />
          <Text style={sliderStyles.cardTitle}>{item.title} {/*(ID:{index})*/}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
};

Slider.defaultProps = {
  items: [{
      image: 'Default image url',
      title: 'Default Title',
  }]
}

const sliderStyles = StyleSheet.create({
  sliderContainer: {
  },
  sliderCard: {
    marginRight: 15,
    width: width * 0.65,
  },
  lastSliderCard: {
    marginRight: 0,
    width: width * 0.65,
  },
  cardImage: {
    height: height * 0.24,
    borderRadius: 7,
  },
  cardTitle: {
    fontWeight: '500',
    color: '#333',
    fontSize: 20,
    marginTop: 10,
  },
});


export default Slider;
