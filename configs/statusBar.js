import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { colors } from './platform'

const AppStatusBar = ({ props }) => (
  <View
    style={{
      backgroundColor: "purple",
      color: "#fff",
      tintColor: colors.active,
      height: Constants.statusBarHeight,
    }}
  >
    <StatusBar translucent barStyle="light-content" {...props} tintColor={colors.active} />
  </View>
)

export default AppStatusBar
