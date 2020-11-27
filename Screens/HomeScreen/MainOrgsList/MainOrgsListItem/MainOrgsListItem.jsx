import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import { Localize } from '../../../../src/localization/Localize';
import { OrgContext } from '../../../Components/OrgContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Localization from 'expo-localization';
import { useNavigation } from '@react-navigation/native';
import { ORG_ROUTE } from '../../../../src/routes'

const langTag = Localization.locale.split('-')[0];

const MainOrgsListItem = () => {
  const org = useContext(OrgContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate(ORG_ROUTE, {
          organisationId: org.id,
        })
      }}
    >
      <Image
        style={styles.itemImage}
        source={{
          uri: org.images[0]
        }}
      />
      <View style={styles.itemContent}>
        <Text style={styles.itemContentTitle}>{org.title}</Text>
        <Text style={styles.itemContentCategory}>{org.category}</Text>
        <View style={styles.itemContentStatusContainer}>
          <Text style={[styles.itemContentStatus, { color: 'green' }]}>{Localize('open')}</Text>
          <Text style={styles.itemContentStatusInfo}>till 11pm</Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <Icon style={styles.icon} name={langTag === 'he' ? "keyboard-arrow-left" : "keyboard-arrow-right"}/>
      </View>
    </TouchableOpacity>
  )
}

export default MainOrgsListItem;
