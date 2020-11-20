import * as Localization from 'expo-localization';

export const CATEGORY_GOVERNMENT = 'categoryGovenment';
export const CATEGORY_GOVERNMENT2 = 'categoryGovenment2';

export const translations = {
  [CATEGORY_GOVERNMENT]: {
    en: 'Government',
    ru: 'Правительство',
    he: 'מֶמְשָׁלָה',
  },
  [CATEGORY_GOVERNMENT2]: {
    en: 'Government2',
    ru: 'Правительство2',
    he: 'מֶמְשָׁלָה2',
  },
};

export const translate = (label) => {
  const locale = Localization.locale.split('-')[0];
  return translations[label][locale];
};
