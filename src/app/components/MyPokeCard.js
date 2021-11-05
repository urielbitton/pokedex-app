import React, {useEffect, useState} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import pokeballImg from '../assets/imgs/pokeball-white.png'
import { styles } from '../styles/PokeCard'
import axios from 'axios'
import typeColorConvert from '../utilities/typeColorConvert'
import Colors from '../utilities/Colors'
import TypeBubble from './TypeBubble'
import { useNavigation } from '@react-navigation/native'

export default function MyPokeCard(props) {

  const {name, pokeNum, description, height, weight, type1, type2, species, imageUrl} = props.poke
  const {pageTitle, width='48%'} = props
  const navigation = useNavigation() 

  return (
    <TouchableOpacity 
      style={[styles.pokeCard, {backgroundColor:typeColorConvert(type1 ?? Colors.color), flexBasis:width}]} 
      activeOpacity={.7}
      onPress={() => navigation.navigate(pageTitle)}
    >
      <View style={styles.pokeCardFlex}> 
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <TypeBubble name={type1} />
          <TypeBubble name={type2} />
        </View>
        <View style={styles.imgContainer}>
          <Image source={{uri: imageUrl}} style={styles.pokeImg}/>
          <Image source={pokeballImg} style={styles.pokeballImg}/>
        </View>
      </View> 
    </TouchableOpacity>
  )
}
