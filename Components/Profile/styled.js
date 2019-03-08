import styled from 'styled-components'
import { View, Image } from 'react-native'

export const Content = styled(View)`
  flex: 1;
  flex-direction: row;
  padding: 10px;
`

export const ContentText = styled(View)`
  padding-left: 10px;
`

export const Avatar = styled(Image)`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`
