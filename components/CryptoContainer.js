import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

// Fetch Coin Data from action folder
import FetchCoinData from './../action/fetchCoinData';
import CoinCard from './CoinCard';

// Connect here is how you 'connect' your application state to the one in your redux store
import { connect } from 'react-redux';

// CryptoContainer Component now has access to the redux store
class CryptoContainer extends Component {

  componentWillMount() {
    this.props.FetchCoinData()
  }

  renderCoinCard() {
    const { crypto } = this.props;
    return crypto.data.map(coin => {
      <CoinCard
        key={coin.name}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    })
  }

  render() {
    const { crypto } = this.props;

    if (crypto.isFetching) {
        return (
          <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            animation="fade"
          />
          </View>
        )
    }
    return (
      <View>
        {this.renderCoinCard()}
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