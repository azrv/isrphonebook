import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import { Text, View } from 'react-native';
import Slider from './Slider';
import organisations from '../../organisations';
import groupBy from '../../utils/groupBy';
import styles from './styles';
import { translate } from '../../utils/translateCategory';

const HomeScreen = () => {

  const organisationsByCategories = groupBy(organisations, 'category');

  return (
    <ScreenWrapper>
      {
        Object.entries(organisationsByCategories).map(([category, organisationsByCategory], id) => {
          return (
            <React.Fragment key={id}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {translate(category)}
                </Text>
              </View>
              <Slider items={organisationsByCategory} />
            </React.Fragment>
          )
        })
      }
    </ScreenWrapper>
  )
};

export default HomeScreen;
