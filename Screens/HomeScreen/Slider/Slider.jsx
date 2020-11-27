import React from 'react'
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler"
import styles from './styles';
import TranslatedTitle from './TranslatedTitle';
import { useNavigation } from '@react-navigation/native';
import { ORG_ROUTE } from '../../../src/routes';

const { width } = Dimensions.get("window");

const Slider = ({
  items
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sliderContainer]}>
      <ScrollView
        horizontal
        snapToInterval={width * 0.65 + 15}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      >
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate(ORG_ROUTE, {
              organisationId: item.id
            })
          }}
          style={ (index === items.length - 1) ? styles.lastSliderCard : styles.sliderCard}
        >
          <Image
            style={styles.cardImage}
            source={{
              uri: item.images[0]
            }}
          />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>
              <TranslatedTitle item={item}/>
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  )
};


export default Slider;
