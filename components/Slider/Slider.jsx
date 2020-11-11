import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler"
import styles from './styles';

const { width, height } = Dimensions.get("window");

const Slider = ({
  items
}) => {
  return (
    <View style={[styles.sliderContainer]}>
      <ScrollView
        horizontal
        snapToInterval={width * 0.65 + 15}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      >
      {items.map((item, index) => (
        <View
          key={index}
          style={ (index === items.length - 1) ? styles.lastSliderCard : styles.sliderCard}
        >
          <Image
            style={styles.cardImage}
            source={{
              uri: item.images[0]
            }}
          />
          <Text style={styles.cardTitle}>{item.title} {/*(ID:{index})*/}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  )
};


export default Slider;
