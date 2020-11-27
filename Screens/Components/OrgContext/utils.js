import * as Localization from 'expo-localization';
import orgs from '../../../organisations';

const langLocale = Localization.locale.split('-')[0];

export const buildOrgContext = (orgId) => {
  return {
    id: orgId,
    title: orgs[orgId].title[langLocale],
    description: orgs[orgId].description[langLocale],
    address: orgs[orgId].address[langLocale],
    images: orgs[orgId].images,
    category: orgs[orgId].category[langLocale],
    phoneNumber: orgs[orgId].phoneNumber,
    siteURL: orgs[orgId].siteURL,
    site: orgs[orgId].site,
    latitude: orgs[orgId].latitude,
    longitude: orgs[orgId].longitude,
  }
};