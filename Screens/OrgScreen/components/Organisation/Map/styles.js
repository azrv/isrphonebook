import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mapViewContainer: {
    marginBottom: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  mapView: {
    borderRadius: 15,
    height: 300,
  }
});
