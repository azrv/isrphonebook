import React from 'react';
import styles from './styles';
import Description from './Description';
import Requisites from './Requisites';
import Map from './Map';

const Organisation = ({
  onAppearClipboard,
  onDisappearClipboard,
  org
}) => {
  return (
    <>
      <Description
        image={org.images[0]}
        title={org.title}
        category={org.category}
        description={org.description}
      />

      <Requisites
        onAppearClipboard={onAppearClipboard}
        onDisappearClipboard={onDisappearClipboard}
        phoneNumber={org.phoneNumber}
        siteURL={org.siteURL}
        site={org.site}
        address={org.address}
      />

      <Map
        latitude={org.latitude}
        longitude={org.longitude}
        title={org.title}
      />
    </>
  )
};
export default Organisation;
