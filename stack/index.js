import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import { icons, colors } from '../configs/platform'

const AppTabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: icons.home,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: icons.profile,
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: colors.active,
    style: {
      height: 56,
      backgroundColor: colors.background,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
})


const AppNavigator = createStackNavigator({
  Home: AppTabs,
}, {
  initialRouteName: 'Home',
})


export const AppContaiberTabs = createAppContainer(AppTabs)
export const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
