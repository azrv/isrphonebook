import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';

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
        <Text style={styles.orgDescription}>
          {description}
        </Text>
      </View>
    </View>
  )
}

export default Description;
