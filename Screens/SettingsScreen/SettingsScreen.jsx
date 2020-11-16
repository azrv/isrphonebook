import React, { useState } from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  View,
  Switch,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Localize } from '../../src/localization/Localize';

const SettingsScreen = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const toggleDarkMode = () => { setIsDarkModeEnabled(!isDarkModeEnabled); }

  return (
    <ScreenWrapper>
      <View style={styles.screenTitleContainer}>
        <Text style={styles.screenTitle}>{Localize('settings')}</Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.settingContainer}>
          <Text style={styles.settingTitle}>
            {Localize('darkMode')}
          </Text>
          <View style={styles.settingContentContainer}>
            <Switch
              trackColor={{ false: "#fff", true: "#f1f1f1" }}
              thumbColor={!isDarkModeEnabled ? "#fff" : "#777"}
              ios_backgroundColor="#0F4C81"
              onValueChange={toggleDarkMode}
              value={isDarkModeEnabled}
            />
          </View>
        </View>
      </View>
      <View style={styles.screenTitleContainer}>
        <Text style={[styles.screenTitle, {marginTop: 25,}]}>{Localize('about')}</Text>
      </View>
      <View style={styles.settingsContainer}>
        <Text style={styles.aboutText}>
          {Localize('aboutContent')}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>{Localize('contactUs')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>{Localize('inaccuracyReport')}</Text>
          </TouchableOpacity>
        </View>
    </ScreenWrapper>
)};

export default SettingsScreen;
