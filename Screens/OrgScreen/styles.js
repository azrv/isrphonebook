import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  animatedView: {
    position: 'absolute',
    zIndex: 103,
    left: width*0.25,
    backgroundColor: '#0F4C81',
    height:40,
    width: width*0.5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
