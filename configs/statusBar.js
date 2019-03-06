import React from 'react'
import { Constants } from 'expo'
import { View, StatusBar } from 'react-navigation'

const AppStatusBar = ({ backgroundColor, props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
)

export default AppStatusBar
