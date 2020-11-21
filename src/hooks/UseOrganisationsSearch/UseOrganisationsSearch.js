import * as Localization from 'expo-localization';
import { useMemo, useRef } from 'react';

import TextSearch from '../../../utils/TextSearch';
import getByDottedKey from '../../../utils/getByDottedKey';
import ORGANISATIONS from '../../../organisations';

const UseOrganisationsSearch = () => {
  const locale = Localization.locale.split('-')[0];

  const searchOptions = useMemo(() => {
    return {
      fields: [`title.${locale}`],
      storeFields: ['title'],
      extractField: getByDottedKey,
      searchOptions: { fuzzy: 0.5 },
    }
  }, [locale])

  const textSearch = useRef(new TextSearch(ORGANISATIONS, searchOptions))

  return textSearch.current;
};

export default UseOrganisationsSearch;