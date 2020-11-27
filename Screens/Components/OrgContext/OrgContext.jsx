import React from 'react';

import { buildOrgContext } from './utils';

export const OrgContext = React.createContext();

export const OrgProvider = ({
  children,
  orgId,
}) => {
  return (
    <OrgContext.Provider value={buildOrgContext(orgId)}>
      {children}
    </OrgContext.Provider>
  )
}
