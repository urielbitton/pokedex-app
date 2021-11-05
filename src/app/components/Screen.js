import React from 'react'
import {SafeAreaView, StyleSheet, View, Image} from 'react-native'
import pokedexImg from '../assets/imgs/pokeball-gray.png'

export default function Screen({children, style, showPokeImg}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.pokedexImg}>
                <Image
                    style={[{display: showPokeImg?"flex":"none"}, styles.img]}
                    source={pokedexImg}
                />
            </View>
            {children}
        </SafeAreaView>
    ) 
} 

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    pokedexImg: {
        position: 'absolute',
        top: -85,
        right: -55,
        zIndex: 1,
        width: 160,
        height: 160,
        opacity: 0.25
    },
    img: {
        width: 200,
        height: 200,
    }
})