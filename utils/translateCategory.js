import * as Localization from 'expo-localization';

export const CATEGORY_GOVERNMENT = 'categoryGovenment';

export const translations = {
  [CATEGORY_GOVERNMENT]: {
    en: 'Government',
    ru: 'Правительство',
    he: 'מֶמְשָׁלָה',
  }
};

export const translate = (label) => {
  const locale = Localization.locale.split('-')[0];
  return translations[label][locale];
};
