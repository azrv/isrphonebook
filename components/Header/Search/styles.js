import { StyleSheet } from 'react-native';
import * as Localization from 'expo-localization';

const langTag = Localization.locale.split('-')[0];

export default StyleSheet.create({
  searchContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    opacity: 0.4,
    borderRadius: 40,
    height: 50,
  },
  searchText: {
    justifyContent: 'center',
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    height: 60,
    textAlign: (langTag === 'he') ? 'right' : 'left',
  },
  searchIcon: {
    justifyContent: 'center',
    fontSize: 18,
    color: '#fff',
    marginRight:5,
  },
})
