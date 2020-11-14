import React, { useState } from 'react';
import * as Localization from 'expo-localization';
import orgs from '../../../organisations';

export const OrgContext = React.createContext();

export const OrgProvider = ({
  children,
  orgId,
}) => {


  const langLocale = Localization.locale.split('-')[0];

  let org;
  if (langLocale === 'en') {
    org = {
      title: orgs[orgId].title.en,
      description: orgs[orgId].description.en,
      address: orgs[orgId].address.en,
      images: orgs[orgId].images,
      category: orgs[orgId].category,
      phoneNumber: orgs[orgId].phoneNumber,
      siteURL: orgs[orgId].siteURL,
      site: orgs[orgId].site,
      latitude: orgs[orgId].latitude,
      longitude: orgs[orgId].longitude,
    }
  } else if (langLocale === 'ru') {
    org = {
      title: orgs[orgId].title.ru,
      description: orgs[orgId].description.ru,
      address: orgs[orgId].address.ru,
      images: orgs[orgId].images,
      category: orgs[orgId].category,
      phoneNumber: orgs[orgId].phoneNumber,
      siteURL: orgs[orgId].siteURL,
      site: orgs[orgId].site,
      latitude: orgs[orgId].latitude,
      longitude: orgs[orgId].longitude,
    }
  } else if (langLocale === 'he') {
    org = {
      title: orgs[orgId].title.he,
      description: orgs[orgId].description.he,
      address: orgs[orgId].address.he,
      images: orgs[orgId].images,
      category: orgs[orgId].category,
      phoneNumber: orgs[orgId].phoneNumber,
      siteURL: orgs[orgId].siteURL,
      site: orgs[orgId].site,
      latitude: orgs[orgId].latitude,
      longitude: orgs[orgId].longitude,
    }
  };

  return (
    <OrgContext.Provider value={org}>
      {children}
    </OrgContext.Provider>
  )
}
