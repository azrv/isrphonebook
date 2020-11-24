import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import Slider from './Slider';
import organisations from '../../organisations';
import MainOrgsList from './MainOrgsList';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <Slider items={organisations} />
      <MainOrgsList items={organisations} />
    </ScreenWrapper>
  )
};

export default HomeScreen;
