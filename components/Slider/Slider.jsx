import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default Slider = ({ items }) => {
  return (
    <View style={sliderStyles.sliderContainer}>
      {items.map((item, index) => (

        <View key={index} style={sliderStyles.sliderCard}>
          <Image
            style={sliderStyles.cardImage}
            source={{
              uri: item.image
            }}
          />
          <Text style={sliderStyles.cardTitle}>{item.title}</Text>
        </View>

      ))}
    </View>
  )
};

Slider.defaultProps = {
  items: [{
      image: 'Default Image',
      title: 'Default Title',
  }]
}

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
    height:200,
    
  },
  cardTitle: {
    backgroundColor:'#6c6c6c',
    textAlign: 'center',
    height:50,
  },
});
