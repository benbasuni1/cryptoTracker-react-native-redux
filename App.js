import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Provider connects all of the states from Redux to the state components
import { Provider } from 'react-redux'

// Import Store, which is basically where all your states live
import Store from './components/Store';

// Load the Components from index.js, Shorthand way
import { Header, CryptoContainer } from './components';

// This is the main App that renders everything. Think Top
export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}