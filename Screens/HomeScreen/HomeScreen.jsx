import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {  Text } from 'react-native';
import Slider from './Slider';
import organisations from '../../organisations';
import groupBy from '../../utils/groupBy';
import styles from './styles';
import { translate } from '../../utils/translateCategory';
import HomeHeader from './HomeHeader';

const HomeScreen = () => {

  const organisationsByCategories = groupBy(organisations, 'category');

  return (
    <ScreenWrapper>
      {/*<HomeHeader />*/}
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
