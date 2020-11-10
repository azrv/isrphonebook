import React, { useState } from 'react';
import ScreenWrapper from '../Components/ScreenWrapper';
import {
  Text,
  View,
  StyleSheet,
  Switch,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';



const SettingsScreen = () => {

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const toggleDarkMode = () => setIsDarkModeEnabled(previousState => !previousState);

  return (
    <ScreenWrapper>
      <Text style={orgScreenStyles.screenTitle}>Settings</Text>

      <View style={orgScreenStyles.settingsContainer}>
        <View style={orgScreenStyles.settingContainer}>
          <Text style={orgScreenStyles.settingTitle}>
            Dark Mode
          </Text>
          <View style={orgScreenStyles.settingContentContainer}>
            <Text style={orgScreenStyles.settingContent}>
              <Switch
                trackColor={{ false: "#fff", true: "#f1f1f1" }}
                thumbColor={!isDarkModeEnabled ? "#fff" : "#777"}
                ios_backgroundColor="#0F4C81"
                onValueChange={toggleDarkMode}
                value={isDarkModeEnabled}
              />
            </Text>
          </View>
        </View>

        <View style={orgScreenStyles.separator} />

        <Text style={orgScreenStyles.settingTitle}>
          Language
        </Text>
        <Picker
          selectedValue={selectedLanguage}
          style={orgScreenStyles.languagePicker}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="עִברִית" value="he" />
          <Picker.Item label="Русский" value="ru" />
        </Picker>

      </View>

      <Text style={[orgScreenStyles.screenTitle, {marginTop: 25,}]}>About</Text>

      <View style={orgScreenStyles.aboutContainer}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Text>

      </View>
    </ScreenWrapper>
)};

const orgScreenStyles = StyleSheet.create({
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  separator: {
    height: 1,
    marginTop: 15,
    marginBottom:15,
    backgroundColor: '#ddd',
  },
  settingsContainer: {
    marginTop:15,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 10,
  },
  settingContainer: {
    flexDirection: 'row',
  },
  settingTitle: {
    fontSize:16,
    fontWeight: '500',
    width: 120,
    marginRight:20,
  },
  settingContentContainer: {
    flex:1,
    alignItems: 'flex-end',
  },
  settingContent: {
    color: '#777',
    textAlign: 'right',
  },
  languagePicker: {
    flex: 1,
    justifyContent: 'center',
    height: 160,
  },
  aboutContainer: {
    marginTop:15,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity:  0.12,
    shadowRadius: 20,
    elevation: 10,
  },
});

export default SettingsScreen;
