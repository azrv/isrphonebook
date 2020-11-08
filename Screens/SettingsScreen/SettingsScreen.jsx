import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  View
} from 'react-native';

const OrgScreen = () => {
  return (
    <ScreenWrapper>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20 }}>I'am settings screen.</Text>
    </View>
    </ScreenWrapper>
  )
};

export default OrgScreen;
