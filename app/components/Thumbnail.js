import React from 'react';
import { View, Image } from 'react-native';

export default function Thumbnail(props) {
  return (
    <View>
      <Image source={{ uri: props.uri }} style={{ width: 60, height: 60 }} />
    </View>
  );
}
