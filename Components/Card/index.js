import React, { PureComponent } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import Line from '../ContentLine'
import { Img, Actions, CardContent, ActionButton, Card } from './styled'

class CardComponent extends PureComponent {
  render() {
    const { image, ContentLines, likes, date } = this.props

    return (
      <Card>
        <Img resizeMethod="resize" source={{ uri: image }} />
        <CardContent>
          <Actions>
            <ActionButton>
              <FontAwesome name="heart-o" size={25} />
            </ActionButton>
            <ActionButton>
              <FontAwesome name="comment-o" size={25} />
            </ActionButton>
          </Actions>
          <Line author={`${likes} likes`} />
          {ContentLines && ContentLines.map(item => (
            <Line
              key={item.id}
              author={item.author}
              small={item.small}
            >
              {item.children}
            </Line>
          ))}
          <Line small>{date}</Line>
        </CardContent>
      </Card>
    )
  }
}

export default CardComponent
