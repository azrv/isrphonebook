import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom:15,
    backgroundColor: '#0F4C81',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 102,
  },
  animatedView: {
    position: 'absolute',
    top: 80,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 101,
    backgroundColor: 'white',
  },
  animatedViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    height:40,
    width:80,
    marginBottom:20,
    backgroundColor: '#6c6c6c',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
