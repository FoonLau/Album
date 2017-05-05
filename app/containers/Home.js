import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../actions';
import Main from '../components/Main';


class Home extends Component {

  render() {
    const {currentScreen} = this.props;

    return <Main />
  }
}

export default Home;