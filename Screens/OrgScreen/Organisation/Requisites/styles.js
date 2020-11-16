import { StyleSheet } from 'react-native';
import * as Localization from 'expo-localization';

const langTag = Localization.locale.split('-')[0];

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
    flexDirection: (langTag === 'he') ? 'row-reverse' : 'row',
  },
  heRequisiteContainer: {
    flexDirection: 'row-reverse',
  },
  requisiteTitle: {
    fontSize:16,
    fontWeight: '500',
    width: 120,
    marginRight: (langTag === 'he') ? 0 : 20,
    marginLeft: (langTag === 'he') ? 20 : 0,
    textAlign: (langTag === 'he') ? 'right' : 'left',
  },
  requisiteContentContainer: {
    flex:1,
    alignItems: (langTag === 'he') ? 'flex-start' : 'flex-end',
  },
  requisiteContent: {
    color: '#777',
    textAlign: (langTag === 'he') ? 'left' : 'right',
  },
  requisiteHoursContentContainer: {
    alignItems: (langTag === 'he') ? 'flex-start' : 'flex-end',
  },
  requisiteHoursOpenContent: {
    fontWeight: '600',
  },
  requisiteHoursContent: {
    color: '#777',
    textAlign: (langTag === 'he') ? 'left' : 'right',
  },
  requisiteHoursHiddenContent: {
    color: '#777',
    textAlign: (langTag === 'he') ? 'left' : 'right',
  },
});
