import React from 'react'

import {
  SafeAreaView
} from 'react-native-safe-area-context';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen';
import OrgScreen from './Screens/OrgScreen';
import SettingsScreen from './Screens/SettingsScreen';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>

          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'PhoneBook') {
                  iconName = focused ?
                    'ios-information-circle'
                  :
                    'ios-information-circle-outline';
                } else if (route.name === 'Organisation') {
                  iconName = focused ?
                    'ios-list-box'
                  :
                    'ios-list';
                } else if (route.name === 'Settings') {
                  iconName = focused ?
                    'ios-settings'
                  :
                    'ios-settings';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen
              name="PhoneBook"
              component={HomeScreen}
            />
            <Tab.Screen
              name="Organisation"
              component={OrgScreen}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
            />
          </Tab.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;
