import * as Localization from 'expo-localization';

export default TranslatedTitle = ({
  item
}) => {
  let title = '';
  const langLocale = Localization.locale.split('-')[0];
  if (langLocale === 'en') {
    title = item.title.en;
  } else if (langLocale === 'ru') {
    title = item.title.ru;
  } else if (langLocale === 'he') {
    title = item.title.he;
  }
  return (
    title
  )
};
