import React, { Component } from 'react'
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { Location, Permissions } from 'expo'

const isBetween = (num, x, y) => {
  if (num >= x && num <= y) {
    return true
  }

  return false
}

const calculateDirection = (heading) => {
  let direction = ''

  if (isBetween(heading, 0, 22.5)) {
    direction = 'North'
  } else if (isBetween(heading, 22.5, 67.5)) {
    direction = 'North East'
  } else if (isBetween(heading, 67.5, 112.5)) {
    direction = 'East'
  } else if (isBetween(heading, 112.5, 157.5)) {
    direction = 'South East'
  } else if (isBetween(heading, 157.5, 202.5)) {
    direction = 'South'
  } else if (isBetween(heading, 202.5, 247.5)) {
    direction = 'South West'
  } else if (isBetween(heading, 247.5, 292.5)) {
    direction = 'West'
  } else if (isBetween(heading, 292.5, 337.5)) {
    direction = 'North West'
  } else if (isBetween(heading, 337.5, 360)) {
    direction = 'North'
  } else {
    direction = 'Calculating'
  }

  return direction
}

export default class Live extends Component {
  state = {
    coords: null,
    status: null,
    direction: '',
  }

  componentDidMount() {
    Permissions.getAsync(Permissions.LOCATION)
      .then(({ status }) => {
        if (status === 'granted') {
          return this.setLocation()
        }

        return this.setState({ status })
      })
      .catch((err) => {
        console.warn('Error getting location permission: ', err)

        this.setState(() => ({ status: 'undetermined' }))
      })
  }

  askPermission = () => {
    Permissions.askAsync(Permissions.LOCATION)
      .then(({ status }) => {
        if (status === 'granted') {
          return this.setLocation()
        }

        return this.setState({ status })
      })
      .catch(err => console.warn('Error asking location permission: ', err))
  }

  setLocation = () => {
    Location.watchPositionAsync({
      enableHighAccuracy: true,
      timeInterval: 1,
      distanceInterval: 1,
    }, ({ coords }) => {
      const newDirection = calculateDirection(coords.heading)
      // const { direction } = this.state

      this.setState({
        coords,
        status: 'granted',
        direction: newDirection,
      })
    })
  }

  render() {
    const { coords, status, direction } = this.state

    if (!status) {
      return <ActivityIndicator style={{ marginTop: 30 }} />
    }

    if (status === 'denied') {
      return (
        <View>
          <Text>Denied</Text>
          <Text>Chupaste Manga</Text>
          <TouchableOpacity onPress={() => this.askPermission()}>
            <Text>Click here to enable</Text>
          </TouchableOpacity>
        </View>
      )
    }

    if (status === 'undetermined') {
      return (
        <View>
          <Text>undetermined</Text>
          <TouchableOpacity onPress={() => this.askPermission()}>
            <Text>Click here to enable</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View>
        <Text>Live</Text>
        <Text>{JSON.stringify(this.state)}</Text>
      </View>
    )
  }
}
