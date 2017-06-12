import React, { Component } from 'react';
import { View, Modal, NavigatorIOS } from 'react-native';
import PropTypes from 'prop-types';

import PhotoList from './PhotoList';
import ImagePicker from './ImagePicker';

class PhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.onLeftButtonPress = this.onLeftButtonPress.bind(this);
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
    this.state = {
      modalVisible: false,
    };
  }

  onLeftButtonPress() {
    console.log(this);
  }

  onRightButtonPress() {
    this.setModalVisible(true);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.modalVisible}
        >
          <ImagePicker onExit={() => {}} onComplete={() => {}} />
        </Modal>
        <NavigatorIOS
          initialRoute={{
            component: PhotoList,
            title: 'Photos',
            passProps: { photoCollections: this.props.photoCollections },
          }}
          style={{ flex: 1 }}
          leftButtonIcon={{}}
          rightButtonTitle="+"
          onLeftButtonPress={this.onLeftButtonPress}
          onRightButtonPress={this.onRightButtonPress}
        />
      </View>
    );
  }
}

PhotoScreen.propTypes = {
  photoCollections: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default PhotoScreen;
