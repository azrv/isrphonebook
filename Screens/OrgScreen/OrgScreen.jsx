import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';
import Organisation from './components/Organisation';
import organisations from '../../organisations';

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
  return (
    <>
      <ScreenWrapper>
        <Organisation
            onAppearClipboard={onAppearClipboard}
            onDisappearClipboard={onDisappearClipboard}
            org={organisations[0]}
        />
      </ScreenWrapper>

      <Animated.View style={[styles.animatedView,{transform: [{ translateY: transformValue }]}]}>
        <Text style={{fontSize:14, color: '#fff'}}>Copied to the clipboard</Text>
      </Animated.View>
    </>
  )
};

export default OrgScreen;
