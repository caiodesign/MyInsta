import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Camera from '../containers/Camera'
import { colors } from '../configs/platform'
import Icon from '../configs/icons'

const AppTabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon.home,
    },
  },
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarLabel: 'Camera',
      tabBarIcon: Icon.camera,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: Icon.profile,
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
