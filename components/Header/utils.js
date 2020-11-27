import * as Localization from 'expo-localization';

import { ORG_ROUTE } from '../../src/routes';

export const buildOrgs = (searchSuggestions) => {
  const locale = Localization.locale.split('-')[0];

  return searchSuggestions.map((suggestion) => {
    return {
      id: `${suggestion.id}`,
      title: suggestion.title[locale],
      path: {
        route: ORG_ROUTE,
        params: {
          organisationId: suggestion.id
        },
      },
    }
  })
};