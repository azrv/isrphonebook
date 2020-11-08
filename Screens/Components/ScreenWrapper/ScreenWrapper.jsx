import React from 'react';

import Header from '../../../components/Header'
import { View, SafeAreaView, StatusBar } from 'react-native';

import styles from './styles';

const ScreenWrapper = ({
  children,
}) => {
  return (
    <>
      <StatusBar backgroundColor='#fff'/>
      <Header />
      {children}
    </>
  )
};

export default ScreenWrapper;
