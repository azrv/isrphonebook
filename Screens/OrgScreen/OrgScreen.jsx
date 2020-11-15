import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import Organisation from './Organisation';
import { OrgProvider } from './OrgContext';

const OrgScreen = () => {
  const organisationId = 0;
  return (
    <OrgProvider orgId={organisationId}>
      <ScreenWrapper>
        <Organisation />
      </ScreenWrapper>
    </OrgProvider>
  )
};

export default OrgScreen;
