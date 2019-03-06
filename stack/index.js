import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import Home from '../containers/Home'

const AppTabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="plus-square" size={30} color={tintColor} />
      ),
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: 'purple',
    style: {
      height: 56,
      backgroundColor: '#fff',
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
  Home: {
    screen: AppTabs,
  },
})


export const AppContaiberTabs = createAppContainer(AppTabs)
export const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
