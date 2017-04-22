import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducer from './app/reducers';
import AppContainer from './app/containers/AppContainer';
import { AppRegistry } from 'react-native';

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(logger)
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const Album = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('Album', () => Album);
