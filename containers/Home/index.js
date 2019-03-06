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

class Home extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.img}
          source={{ url: 'https://via.placeholder.com/140x100' }}
        />
        <Text style={styles.text}>Welcome to RN Training</Text>
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

export default Home
