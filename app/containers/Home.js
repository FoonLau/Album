import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text
  } from 'react-native';

import Main from '../components/Main';


class Home extends Component {
  render() {
    return (
      <Main />
    );
  }
}

export default connect(() => {return {}})(Home);