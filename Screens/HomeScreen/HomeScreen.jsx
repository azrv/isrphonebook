import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {  Text } from 'react-native';
import Slider from '../../components/Slider';
import organisations from '../../organisations';
import groupBy from '../../utils/groupBy';
import styles from './styles';
import { translate } from '../../utils/translateCategory';
import * as Localization from 'expo-localization';

const HomeScreen = () => {

  const organisationsByCategories = groupBy(organisations, 'category');

  return (
    <ScreenWrapper>
      {
        Object.entries(organisationsByCategories).map(([category, organisationsByCategory], id) => {
          return (
            <React.Fragment key={id}>
              <Text style={styles.title}>
                {translate(category)}
              </Text>
              <Slider items={organisationsByCategory} />
            </React.Fragment>
          )
        })
      }
    </ScreenWrapper>
  )
};

export default HomeScreen;
