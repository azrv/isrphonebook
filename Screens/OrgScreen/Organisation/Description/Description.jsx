import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import * as Localization from 'expo-localization';

const langTag = Localization.locale.split('-')[0];

const Description = ({
  image,
  title,
  category,
  description
}) => {
  return (
    <View style={styles.orgContainer}>
      <Image
        style={styles.orgImage}
        source={{
          uri: image
        }}
      />
      <View style={styles.orgTitleContainer}>
        <Text style={styles.orgTitle}>{title}</Text>
      </View>

      <View style={styles.orgCategoryContainer}>
        <Text style={styles.orgCategory}>{category}</Text>
      </View>

      <View style={styles.orgDescriptionContainer}>
        <Text style={langTag === 'he'? styles.heOrgDescription : styles.orgDescription }>
          {description}
        </Text>
      </View>
    </View>
  )
}

export default Description;
