import { StyleSheet, Dimensions } from 'react-native';
import * as Localization from 'expo-localization';

const langTag = Localization.locale.split('-')[0];

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
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
  cardTitleContainer: {
    alignItems: (langTag === 'he') ? 'flex-start' : 'flex-end',
  },
  cardTitle: {
    fontWeight: '500',
    color: '#333',
    fontSize: 20,
    marginTop: 10,
  },
});
