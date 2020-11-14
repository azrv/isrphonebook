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

const transformValue = new Animated.Value(-100);

const onAppearClipboard = () => {
  Animated.timing(transformValue, {
    toValue: height*0.017,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();
};

const onDisappearClipboard = () => {
  Animated.timing(transformValue, {
    toValue: -100,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.in(Easing.elastic(0.7))
  }).start();
}

const OrgScreen = () => {
  const organisationId = 0;
  return (
    <OrgProvider orgId={organisationId}>
      <ScreenWrapper>
        <Organisation
            onAppearClipboard={onAppearClipboard}
            onDisappearClipboard={onDisappearClipboard}
        />
      </ScreenWrapper>

      <Animated.View style={[styles.animatedView,{transform: [{ translateY: transformValue }]}]}>
        <Text style={{fontSize:14, color: '#fff'}}>Copied to the clipboard</Text>
      </Animated.View>
    </OrgProvider>
  )
};

export default OrgScreen;
