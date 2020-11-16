import { StyleSheet } from 'react-native';
import * as Localization from 'expo-localization';

const langTag = Localization.locale.split('-')[0];

export default StyleSheet.create({
  titleContainer: {
    alignItems: (langTag === 'he') ? 'flex-start' : 'flex-end',
  },
  title: {
    marginBottom: 10,
    fontSize: 26,
    fontWeight: '700',
  },
});
