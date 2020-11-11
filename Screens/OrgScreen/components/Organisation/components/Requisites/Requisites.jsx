import React, { useState } from 'react';
import {
  Text,
  View,
  Clipboard,
  TouchableOpacity,
  Linking
} from 'react-native';
import styles from './styles';

const HiddenView = ({
  isHoursHidden,
  children
}) => {
  if (isHoursHidden) {
    return null;
  }
  return (
    <View>
      { children }
    </View>
  );
};

const Requisites = ({
  onAppearClipboard,
  onDisappearClipboard,
  phoneNumber,
  siteURL,
  site,
  address
}) => {

  const [isHoursHidden, setHoursHidden] = useState(true);
  const triggerHours = () => {
    setHoursHidden(!isHoursHidden);
  };

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
              { phoneNumber }
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
              { site }
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
              { address }
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

            <View style={styles.requisiteHoursContentContainer}>
              <Text style={[styles.requisiteHoursOpenContent, {color: 'green'}]}>
                Open
              </Text>
              <TouchableOpacity
                onPress={triggerHours}
              >
                <Text style={styles.requisiteHoursContent}>
                  Sunday: 10am-10pm
                </Text>
              </TouchableOpacity>
            </View>

          <HiddenView isHoursHidden={isHoursHidden}>
            <Text style={styles.requisiteHoursHiddenContent}>
              Monday: 10am-10pm{"\n"}
              Tuesday: 10am-10pm{"\n"}
              Wednesday: 10am-10pm{"\n"}
              Thursday: 10am-10pm{"\n"}
              Friday: 10am-10pm{"\n"}
              Saturday: 10am-10pm
            </Text>
          </HiddenView>
        </View>
      </View>
    </View>
  )
};

export default Requisites;
