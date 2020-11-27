import HomeScreen from '../Screens/HomeScreen';
import OrgScreen from '../Screens/OrgScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import { Localize } from './localization/Localize';

export const HOME_ROUTE = 'PhoneBook'
export const ORG_ROUTE = Localize('organisation')
export const SETTINGS_ROUTE = Localize('settings')

export const ROUTES = {
  [HOME_ROUTE]: {
    component: HomeScreen,
    icon: 'ios-albums',
  },
  [ORG_ROUTE]: {
    component: OrgScreen,
    icon: 'ios-list-box',
  },
  [SETTINGS_ROUTE]: {
    component: SettingsScreen,
    icon: 'ios-settings',
  },
}
