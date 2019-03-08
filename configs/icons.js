import React from 'react'
import { Ionicons, FontAwesome, SimpleLineIcons, AntDesign } from '@expo/vector-icons'
import { isApple } from './platform'

export const icon = {
  home: ({ tintColor }) => (
    <Ionicons
      name={isApple ? 'ios-home' : 'md-home'}
      size={25}
      color={tintColor}
    />
  ),
  profile: ({ tintColor }) => (
    <FontAwesome
      name={isApple ? 'user-o' : 'user'}
      size={25}
      color={tintColor}
    />
  ),
  upload: () => <AntDesign name="upload" size={25} />,
  camera: ({ tintColor }) => {
    if (isApple) {
      return (
        <SimpleLineIcons
          name="camera"
          size={25}
          color={tintColor}
        />
      )
    }

    return (
      <FontAwesome
        name="camera"
        size={25}
        color={tintColor}
      />
    )
  },
}

export default icon
