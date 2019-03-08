import React from 'react'
import { Platform } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

const isApple = Platform.OS === 'ios'

export const icons = {
  home: ({ tintColor }) => (
    <Ionicons
      name={isApple ? 'ios-home' : 'md-home'}
      size={30}
      color={tintColor}
    />
  ),
  profile: ({ tintColor }) => (
    <FontAwesome
      name={isApple ? 'user-o' : 'user'}
      size={30}
      color={tintColor}
    />
  ),
}

export const colors = {
  background: isApple ? '#fff' : 'purple',
  active: isApple ? 'purple' : '#fff',
}
