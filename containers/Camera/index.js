import React, { PureComponent } from 'react'
import { CameraRoll, TouchableOpacity, View, ScrollView, Image, Text } from 'react-native'
import { Camera, Permissions } from 'expo'
import Icon from '../../configs/icons'


class CameraView extends PureComponent {
  state = {
    photos: [],
    hasPermission: false,
  }

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasPermission: status === 'granted' })
  }

  handleUploadEvent = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(({ edges }) => {
        this.setState({ photos: edges })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const { upload: IconUpload } = Icon
    const { photos } = this.state

    return (
      <View>
        <TouchableOpacity onPress={() => this.handleUploadEvent()}>
          <IconUpload />
        </TouchableOpacity>
        <ScrollView>
          {photos && photos.map((photo, index) => (
            <Image
              key={index}
              style={{ width: 300, height: 100 }}
              source={{ uri: photo.node.image.uri }}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default CameraView
