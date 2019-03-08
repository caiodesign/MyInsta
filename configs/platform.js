import { Platform } from 'react-native'

export const isApple = Platform.OS === 'ios'

export const colors = {
  background: isApple ? '#fff' : 'purple',
  active: isApple ? 'purple' : '#fff',
}
