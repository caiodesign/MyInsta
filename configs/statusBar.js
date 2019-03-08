import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { colors } from './platform'

const AppStatusBar = ({ props }) => (
  <View
    style={{
      backgroundColor: colors.background,
      color: '#fff',
      tintColor: colors.active,
      height: Constants.statusBarHeight,
    }}
  >
    <StatusBar translucent {...props} tintColor={colors.active} />
  </View>
)

export default AppStatusBar
