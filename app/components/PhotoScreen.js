import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import PhotoList from './PhotoList';

const photos = [
  { date: '1', uri: 'https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E9%A3%8E%E6%99%AF&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=1880046917,3205009241&os=1790350177,2380570752&simid=&pn=0&rn=1&di=1&ln=1986&fr=&fmq=1459502303089_R&fm=&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=&istype=2&ist=&jit=&bdtype=-1&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg.tuku.cn%2Ffile_big%2F201502%2Fd130653bfb884152b8a5ba9e846362d1.jpg&rpstart=0&rpnum=0&adpicid=0' },
];

const sections = {};

photos.forEach((photo) => {
  if (sections[photo.date]) {
    sections[photo.date].push(photo);
  } else {
    sections[photo.date] = [photo];
  }
});

class PhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.onLeftButtonPress = this.onLeftButtonPress.bind(this);
    this.onRightButtonPress = this.onRightButtonPress.bind(this);
  }

  onLeftButtonPress() {
    console.log(this);
  }

  onRightButtonPress() {
    console.log(this);
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: PhotoList,
          title: 'Photos',
          passProps: { photoCollections: sections },
        }}
        style={{ flex: 1 }}
        leftButtonIcon={{}}
        rightButtonIcon={{}}
        onLeftButtonPress={this.onLeftButtonPress}
        onRightButtonPress={this.onRightButtonPress}
      />
    );
  }
}

export default PhotoScreen;
