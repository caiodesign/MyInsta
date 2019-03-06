import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppContainer from './stack'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View styles={styles.container}>
        <AppContainer />
      </View>
    )
  }
}
