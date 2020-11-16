import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  requisitesContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  separator: {
    height: 1,
    marginTop: 15,
    marginBottom:15,
    backgroundColor: '#ddd',
  },
  requisiteContainer: {
    flexDirection: 'row',
  },
  requisiteTitle: {
    fontSize:16,
    fontWeight: '500',
    width: 120,
    marginRight: 20,
    textAlign: 'left',
  },
  requisiteContentContainer: {
    flex:1,
    alignItems: 'flex-end'
  },
  requisiteContent: {
    color: '#777',
    textAlign: 'right'
  },
  requisiteHoursContentContainer: {
    alignItems: 'flex-end'
  },
  requisiteHoursOpenContent: {
    fontWeight: '600',
  },
  requisiteHoursContent: {
    color: '#777',
    textAlign: 'right',
  },
  requisiteHoursHiddenContent: {
    color: '#777',
    textAlign: 'right',
  },
});
