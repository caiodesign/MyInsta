import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 100,
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})

class profile extends Component {
  render() {
    console.log('profile')

    return (
      <View>
        <Image
          style={styles.img}
          source={{ url: 'https://via.placeholder.com/140x100' }}
        />
        <Text style={styles.text}>profile</Text>
        <TouchableOpacity
          onPress={() => console.log(this.props)}
          style={styles.button}
        >
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default profile
