import React from 'react'
import { ContentText as Text, Bold, Description } from '../ContentText'
import { ContentLine } from './styled'

const Line = (props) => {
  const { author, children, small } = props

  return (
    <ContentLine>
      {author && (<Bold>{author}</Bold>)}
      {small
        ? (<Description>{children}</Description>)
        : (<Text>{children}</Text>)
      }
    </ContentLine>

  )
}

export default Line
