import React from 'react';
import {
  View
} from 'react-native';
import styles from './styles';
import MainOrgsListItem from './MainOrgsListItem';
import { OrgProvider } from '../../Components/OrgContext';

const MainOrgsList = ({
  items
}) => {

  return (
    <View style={styles.mainOrgsListContainer}>
      {items.map((item, index) => (
        <OrgProvider key={index} orgId={index}>
          <View style={ (index === items.length - 1) ? styles.lastOrgContainer : styles.orgContainer}>
            <MainOrgsListItem/>
          </View>
        </OrgProvider>
      ))}
    </View>
  )
}

export default MainOrgsList;
