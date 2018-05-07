import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Images } from './CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    image : {
        height: 40,
        width: 40,
    }
})

const { container, image }  = styles;

const CoinCard = ({ symbol, name, price_usd, percent_change_24h, percent_change_7d }) => {
    return (
        <View style={container}>
            <Image
                style={styles.image}
                source={{uri : Images[symbol] }}
            />
            <Text>{symbol}</Text>
            <Text>{name}</Text>
            <Text>{price_usd}</Text>
            <Text>24 Hr Update :</Text><Text>{percent_change_24h}</Text>
            <Text>7 day Update :</Text><Text>{percent_change_7d}</Text>
        </View>
    )
}

export default CoinCard;