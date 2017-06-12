import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';

import CameraRollPicker from 'react-native-camera-roll-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 40,
    marginTop: 20,
  },
  main: {
    flex: 1,
  },
  footer: {
    height: 40,
  },
});

class ImagePicker extends Component {

  constructor() {
    super();

    this.state = {
      selectedPhotos: [],
    };

    this.onSelectImage = this.onSelectImage.bind(this);
  }

  onSelectImage(data) {
    this.setState({ selectedPhotos: data });
  }

  exit() {
    console.log(this.getState('selectedPhotos'));
  }

  complete() {
    this.props.onComplete(this.getState('selectedPhotos'));
    this.exit();
  }

  render() {
    const completedButtonLabel = `${this.state.selectedPhotos.length
                                  ? this.state.selectedPhotos.length
                                  : ''} 完成`;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>所有照片</Text>
          <Button title="取消" onPress={this.exit} />
        </View>
        <View style={styles.main}>
          <CameraRollPicker
            callback={this.onSelectImage}
          />
        </View>
        <View style={styles.footer}>
          <Button title={completedButtonLabel} onPress={this.complete} />
        </View>
      </View>
    );
  }
}

ImagePicker.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default ImagePicker;
