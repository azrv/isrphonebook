import React from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import Organisation from './Organisation';
import { OrgProvider } from '../Components/OrgContext';

const OrgScreen = ({
  route
}) => {
  return (
    <OrgProvider orgId={route.params?.organisationId || 0}>
      <ScreenWrapper>
        <Organisation />
      </ScreenWrapper>
    </OrgProvider>
  )
};

export default OrgScreen;
