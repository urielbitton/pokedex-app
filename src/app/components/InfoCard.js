import React from 'react';
import { Text, View, Image } from 'react-native';
import { cardStyles } from '../styles/InfoCard';
import pokeballImg from '../assets/imgs/pokeball-white.png'
import { styles } from '../styles/HomeScreen';

export default function Card(props) {

  const {title, color} = props.card
  
  return (
    <View style={[cardStyles.card, {backgroundColor:color, shadowColor: color}]}>
      <View style={cardStyles.titleCont}>
        <Text style={cardStyles.title}>{title}</Text> 
      </View>
      <View style={cardStyles.circle}></View>
      <Image 
        style={cardStyles.pokeball} 
        source={pokeballImg}
      />
    </View>
  )
}