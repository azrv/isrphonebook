import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import Organisation from './Organisation';
import organisations from '../../organisations';
import { OrgProvider } from './OrgContext';

const { height } = Dimensions.get("window");

const OrgScreen = () => {
  const organisationId = 0;
  return (
    <OrgProvider orgId={organisationId}>
      <ScreenWrapper>
        <Organisation />
      </ScreenWrapper>
    </OrgProvider>
  )
};

export default OrgScreen;
