import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  changeView (route) {
    console.log('do nothing')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{url: 'https://via.placeholder.com/140x100'}} />
        <Text style={styles.text}>Welcome to RN Training</Text>
        <TouchableOpacity 
          onPress={this.changeView}
          style={styles.button}
        >
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 140,
    height: 100,
    marginBottom: 20,
  },
  text: {
    marginBottom:20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
