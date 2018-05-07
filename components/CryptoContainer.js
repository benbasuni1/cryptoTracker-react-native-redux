import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class CryptoContainer extends Component {
  render() {
    return (
      <View>
        <Text>Container</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoContainer)