import React from 'react'
import { StatusBar } from 'react-native';
import Header from './components/Header'
import * as Localization from 'expo-localization';
import { Localize, init } from './src/localization/Localize';

import {
  SafeAreaView
} from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen';
import OrgScreen from './Screens/OrgScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  init();
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor:'#0F4C81'}}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1, overflow: 'hidden',}}>
        <Header />
        <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  Localize('hello')
                  if (route.name === 'PhoneBook') {
                    iconName = focused ? 'ios-albums' : 'ios-albums';
                  } else if (route.name === Localize('organisation')) {
                    iconName = focused ? 'ios-list-box' : 'ios-list-box';
                  } else if (route.name === Localize('settings')) {
                    iconName = focused ? 'ios-settings' : 'ios-settings';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}

              tabBarOptions={{
                activeTintColor: '#0F4C81',
                inactiveTintColor: '#666',
              }}
            >
              <Tab.Screen
                name="PhoneBook"
                component={HomeScreen}
              />
              <Tab.Screen
                name={Localize('organisation')}
                component={OrgScreen}
              />
              <Tab.Screen
                name={Localize('settings')}
                component={SettingsScreen}
              />
            </Tab.Navigator>

        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

export default App;
