import React from 'react';

import Header from '../../../components/Header'
import { View, SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';

const ScreenWrapper = ({
  children,
}) => {
  return (
    <SafeAreaView styles={styles.ScreenWrapper}>
      <StatusBar backgroundColor='#fff'/>
      <Header />
      <View>
        {children}
      </View>
    </SafeAreaView>
  )
};

export default ScreenWrapper;