import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import PropTypes from 'prop-types';

import Thumbnail from './Thumbnail';

class PhotoList extends Component {
  static renderSectionHeader(sectionData, sectionID) {
    return <Text>{sectionID}</Text>;
  }

  static renderRow(rowData) {
    return <Thumbnail uri={rowData.uri} />;
  }

  constructor(props) {
    super();

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.uri !== r2.uri,
      sectionHeaderHasChanged: (section1, section2) => section1 !== section2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections(props.photoCollections),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderSectionHeader={PhotoList.renderSectionHeader}
        renderRow={PhotoList.renderRow}
        stickySectionHeadersEnabled
      />
    );
  }
}

PhotoList.propTypes = {
  photoCollections: PropTypes.objectOf(PropTypes.array),
};

PhotoList.defaultProps = {
  photoCollections: {},
};

export default PhotoList;
