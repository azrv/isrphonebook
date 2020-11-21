import * as Localization from 'expo-localization';

export const buildItems = (searchSuggestions, match) => {
  const locale = Localization.locale.split('-')[0];

  return searchSuggestions.map((suggestion) => {
    return {
      id: `${suggestion.id}`,
      title: suggestion.title[locale],
      match,
    }
  })
};