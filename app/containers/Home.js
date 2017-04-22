import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
  } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <Text style={{height: 200, lineHeight: 200, textAlign: 'center'}}>Album</Text>
      </View>
    );
  }
}

export default connect(() => {return {}})(Home);