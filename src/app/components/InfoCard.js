import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { cardStyles } from '../styles/InfoCard';
import pokeballImg from '../assets/imgs/pokeball-white.png'

export default function Card(props) {

  const {title, color} = props.card
  const {onPress} = props
  
  return (
    <TouchableOpacity 
      style={[cardStyles.card, {backgroundColor:color, shadowColor: color}]}
      onPress={() => onPress()}
    >
      <View style={cardStyles.titleCont}>
        <Text style={cardStyles.title}>{title}</Text> 
      </View>
      <View style={cardStyles.circle}></View>
      <Image 
        style={cardStyles.pokeball} 
        source={pokeballImg}
      />
    </TouchableOpacity>
  )
}