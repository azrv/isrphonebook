import React from 'react'
import { StatusBar } from 'react-native';
import Header from './components/Header'
import { Localize, init } from './src/localization/Localize';
import NotificationProvider from './src/components/Notification';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from './src/routes';

const Tab = createBottomTabNavigator();

const App = () => {
  init();
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor:'#0F4C81'}}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <NotificationProvider>
          <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    return <Ionicons
                    name={ROUTES[route.name].icon}
                    size={size}
                    color={color}
                    />;
                  },
                })}

                tabBarOptions={{
                  activeTintColor: '#0F4C81',
                  inactiveTintColor: '#666',
                }}
              >
                {
                  Object.entries(ROUTES).map(([name, { component }])  => {
                    return (
                      <Tab.Screen
                        key={name}
                        name={name}
                        component={component}
                      />
                    )
                  })
                }
              </Tab.Navigator>

          </NavigationContainer>
        </NotificationProvider>
      </SafeAreaView>
    </>
  )
}

export default App;
