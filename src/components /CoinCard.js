import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {images} from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: 'bold'
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    seperator : {
        marginTop: 10
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontWeight: 'bold'
    },
    image:  {
        width: 35,
        height: 35
    },
    moneSymbol: {
        fontWeight: 'bold', 
    },
    statisticsContainer: {
        display: 'flex',
        borderTopColor: '#fafafa',
        borderTopWidth: 2,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    percentChangePlus: {
        color: "#00bfa5",
        fontWeight: 'bold',
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#dd2c00",
        fontWeight: 'bold',
        marginLeft: 5
    }
});

const {
    container,
    image,
    moneSymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus
} = styles;

const CoinCard = ({
    symbol, coin_name, price_usd, percent_change_24Hr, percet_change_7D})=> {
        return (
                <View style = {container}>
                    <View style = {upperRow}>
                            <image style = {styles.image} source={{uri: images[symbol]}}/>
                            <Text style = {coinSymbol}>{symbol}</Text>
                            <Text style = {seperator}>|</Text>
                            <Text style = {coinName}>{coin_name}</Text>
                            <Text style = {coinPrice}>{price_usd} <Text style={moneSymbol}>$</Text></Text>   
                    </View>
                    <View style= {statisticsContainer}>
                    <Text>24Hr:
                         <Text style={percent_change_24Hr < 0 ? percentChangeMinus: percentChangePlus}>  {percent_change_24Hr}</Text>
                        </Text> 

                    <Text>7D:
                            <Text style={percet_change_7D < 0 ? percentChangeMinus: percentChangePlus}>  {percet_change_7D}</Text>   
                    </Text>

                </View>
                </View>       
        )
    }
    export default CoinCard;