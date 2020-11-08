import React from 'react';

import ScreenWrapper from '../Components/ScreenWrapper';

import { StyleSheet, ScrollView, Text } from 'react-native';
import Slider from '../../components/Slider';

// import { ORGS, ORGS_PER_SLIDER } from './constants';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scrollViewContainer}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.title}>Government</Text>
        <Slider items={[
          {
            image: 'https://im.kommersant.ru/Issues.photo/CORP/2019/12/12/KMO_163712_00083_1_t241_060345.jpg',
            title: 'Israel Government'
          },
          {
            image: 'https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078',
            title: 'Office Building'
          },
          {
            image: 'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123',
            title: 'Cafeteria'
          },
          {
            image: 'https://www.shebaonline.ru/wp-content/uploads/2017/02/heart-center.jpg',
            title: 'Hospital'
          },
        ]} />
        <Text style={styles.primaryTitle}>Medicine</Text>
        <Slider items={[
          {
            image: 'https://www.shebaonline.ru/wp-content/uploads/2017/02/heart-center.jpg',
            title: 'Hospital'
          },
          {
            image: 'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123',
            title: 'Cafeteria'
          },
          {
            image: 'https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078',
            title: 'Office Building'
          },
          {
            image: 'https://im.kommersant.ru/Issues.photo/CORP/2019/12/12/KMO_163712_00083_1_t241_060345.jpg',
            title: 'Israel Government'
          },
        ]} />
        <Text style={styles.primaryTitle}>Socialities</Text>
        <Slider style={{marginBottom:0}} items={[
          {
            image: 'https://shalomisraeltours.com/wp-content/uploads/2019/06/Gan-HaShlosha.jpg',
            title: 'National Park of Israel'
          },
          {
            image: 'https://im.kommersant.ru/Issues.photo/CORP/2019/12/12/KMO_163712_00083_1_t241_060345.jpg',
            title: 'Israel Government'
          },
          {
            image: 'https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123',
            title: 'Cafeteria'
          },
          {
            image: 'https://images.adsttc.com/media/images/51d4/84a8/b3fc/4bea/e100/01d6/large_jpg/Portada.jpg?1372882078',
            title: 'Office Building'
          },
        ]} />

      </ScrollView>
    </ScreenWrapper>
  )
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingTop:20,
    zIndex: 100,
    backgroundColor: 'white'
  },
  lastSlider: {
    marginBottom: 20,
  },
  title: {
    marginLeft: 30,
    marginRight: 30,
    fontSize: 26,
    fontWeight: '700',
  },
  primaryTitle: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 26,
    fontWeight: '700',
  },
});

export default HomeScreen;
