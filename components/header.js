import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Crypto App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 25,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
