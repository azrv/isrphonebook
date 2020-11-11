import React from 'react';
import {
  Text,
  View,
  Clipboard,
  TouchableOpacity,
  Linking
} from 'react-native';
import styles from './styles';


const Requisites = ({
  onAppearClipboard,
  onDisappearClipboard,
  phoneNumber,
  siteURL,
  site,
  address
}) => {
  return (
    <View style={styles.requisitesContainer}>
      <View style={styles.requisiteContainer}>
        <Text style={styles.requisiteTitle}>
          Phone Number
        </Text>
        <View style={styles.requisiteContentContainer}>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(phoneNumber);
              onAppearClipboard();
              setTimeout(() => {  onDisappearClipboard(); }, 1200);
            }
          }>
            <Text style={styles.requisiteContent}>
              {phoneNumber}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.requisiteContainer}>
        <Text style={styles.requisiteTitle}>
          Site
        </Text>
        <View style={styles.requisiteContentContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(siteURL);
            }
          }>
            <Text style={styles.requisiteContent}>
              {site}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.requisiteContainer}>
        <Text style={styles.requisiteTitle}>
          Address
        </Text>
        <View style={styles.requisiteContentContainer}>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(address);
              onAppearClipboard();
              setTimeout(() => {  onDisappearClipboard(); }, 1200);
            }
          }>
            <Text style={styles.requisiteContent}>
              {address}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.requisiteContainer}>
        <Text style={styles.requisiteTitle}>
          Hours
        </Text>
        <View style={styles.requisiteContentContainer}>
          <Text style={styles.requisiteContent}>
            Sunday: 10am-10pm{"\n"}
            Monday: 10am-10pm{"\n"}
            Tuesday: 10am-10pm{"\n"}
            Wednesday: 10am-10pm{"\n"}
            Thursday: 10am-10pm{"\n"}
            Friday: 10am-10pm{"\n"}
            Saturday: 10am-10pm{"\n"}
          </Text>
        </View>
      </View>
    </View>
  )
};

export default Requisites;
