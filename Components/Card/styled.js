import { Image, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const Card = styled(View)`
  margin-bottom: 30px;
`

export const Img = styled(Image)`
  width: 100%;
  height: 400;
`

export const ActionButton = styled(TouchableOpacity)`
  padding-right: 15px;
`

export const Actions = styled(View)`
  flex: 1;
  flex-direction: row;
  margin-bottom: 6;
`

export const CardContent = styled(View)`
  padding: 15px;
`
