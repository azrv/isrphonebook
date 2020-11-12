import React, { useState } from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  View,
  Switch,
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

const SettingsScreen = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  return (
    <ScreenWrapper>
      <Text style={styles.screenTitle}>Settings</Text>

      <View style={styles.settingsContainer}>
        <View style={styles.settingContainer}>
          <Text style={styles.settingTitle}>
            Dark Mode
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

        <View style={styles.separator} />

        <Text style={styles.settingTitle}>
          Language
        </Text>
        <Picker
          selectedValue={selectedLanguage}
          style={styles.languagePicker}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="עִברִית" value="he" />
          <Picker.Item label="Русский" value="ru" />
        </Picker>

      </View>

      <Text style={[styles.screenTitle, {marginTop: 25,}]}>About</Text>

      <View style={styles.settingsContainer}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Contact us</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Report about inaccuracy</Text>
          </TouchableOpacity>
        </View>
    </ScreenWrapper>
)};

export default SettingsScreen;
