import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Fetch Coin Data from action folder
import FetchCoinData from './../action/fetchCoinData';

// Connect here is how you 'connect' your application state to the one in your redux store
import { connect } from 'react-redux';

// CryptoContainer Component now has access to the redux store
class CryptoContainer extends Component {

  componentDidMount() {
    this.props.FetchCoinData()
  }

  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    );
  }
}

// This function connects the redux store and accesses whatever it needs for this function
function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

// Pay attention here, look at how the CryptoContainer is being attached with redux
export default connect(mapStateToProps, { FetchCoinData }) (CryptoContainer)