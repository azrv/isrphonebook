import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  Clipboard,
  TouchableOpacity,
  Linking
} from 'react-native';
import styles from './styles';
import { Localize } from '../../../../src/localization/Localize';
import { NotificationContext } from '../../../../src/components/Notification';



const Requisites = ({
  phoneNumber,
  siteURL,
  site,
  address
}) => {
  const triggerNotification = useContext(NotificationContext);
  const [isHoursHidden, setHoursHidden] = useState(true);
  const triggerHours = () => {
    setHoursHidden(!isHoursHidden);
  };

  return (
    <View style={styles.requisitesContainer}>
      <View style={styles.requisiteContainer}>
        <Text style={styles.requisiteTitle}>
          {Localize('phoneNumber')}
        </Text>
        <View style={styles.requisiteContentContainer}>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(phoneNumber);
              triggerNotification('Copied to the clipboard');
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
          {Localize('site')}
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
          {Localize('address')}
        </Text>
        <View style={styles.requisiteContentContainer}>
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(address);
              triggerNotification('Copied to the clipboard');
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
          {Localize('hours')}
        </Text>
        <View style={styles.requisiteContentContainer}>

            <View style={styles.requisiteHoursContentContainer}>
              <Text style={[styles.requisiteHoursOpenContent, {color: 'green'}]}>
                {Localize('open')}
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

export default Requisites;
