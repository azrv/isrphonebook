import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  orgContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  orgImage: {
    aspectRatio: 16/9,
    borderRadius: 15,
  },
  orgTitleContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  orgTitle: {
    fontWeight: '600',
    color: '#333',
    fontSize: 26,
    textAlign: 'center',
  },
  orgCategoryContainer: {
    marginTop: 3,
    alignItems: 'center',
  },
  orgCategory: {
    fontWeight: '400',
    color: '#777',
    fontSize: 14,
  },
  orgDescriptionContainer: {
    marginTop: 10,
  },
  orgDescription: {
    fontSize: 14,
    textAlign: 'left',
  },
});
