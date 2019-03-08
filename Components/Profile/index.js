import React from 'react'
import { Avatar, Content, ContentText } from './styled'
import { Bold, Description as Small } from '../ContentText'

const Profile = (props) => {
  const { image, nickname, location } = props

  return (
    <Content>
      <Avatar source={{ uri: image }} />
      <ContentText>
        <Bold>{nickname}</Bold>
        <Small>{location}</Small>
      </ContentText>
    </Content>
  )
}

export default Profile
