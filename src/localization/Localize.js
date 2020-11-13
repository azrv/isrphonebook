import { I18nManager } from 'react-native';
import memoize from 'lodash.memoize';
import i18n from 'i18n-js';
import * as Localization from 'expo-localization';

export const translationGetters = {
  'en': () => require('./langs/en.json'),
  'ru': () => require('./langs/ru.json'),
  'he': () => require('./langs/he.json'),
};

export const Localize = memoize(
  (key, config) =>
    i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const init = () => {
  let localeLanguageTag = Localization.locale.split('-')[0];
  let isRTL = Localization.isRTL;
  Localize.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = {
    [localeLanguageTag]: translationGetters[localeLanguageTag](),
  };
  i18n.locale = localeLanguageTag;
}
