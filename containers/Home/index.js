import React, { Component, Fragment } from 'react'
import { FlatList } from 'react-native'
import Card from '../../Components/Card'
import Profile from '../../Components/Profile'
import posts from './posts.json'

class Home extends Component {
  renderItem = ({ item }) => (
    <Fragment key={item.id}>
      <Profile {...item.author} />
      <Card {...item} />
    </Fragment>
  )

  render() {
    return (
      <FlatList
        data={posts}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

export default Home
