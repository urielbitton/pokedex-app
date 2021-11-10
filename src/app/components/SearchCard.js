import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import pokeballImg from '../assets/imgs/pokeball-white.png'
import { styles } from '../styles/PokeCard'
import typeColorConvert from '../utilities/typeColorConvert'
import Colors from '../utilities/Colors'
import TypeBubble from './TypeBubble'
import { useNavigation } from '@react-navigation/native'

export default function SearchCard(props) {

  const {id, name, types, species} = props.poke
  const {pageTitle, width='48%'} = props
  const navigation = useNavigation() 
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  const pokeTypes = types?.map((ty,i) => {
    return <TypeBubble name={ty.type.name} key={i} />
  })

  return (
    <TouchableOpacity 
      style={[styles.pokeCard, {backgroundColor:typeColorConvert(types ? types[0]?.type.name: Colors.color), flexBasis:width}]} 
      activeOpacity={.7}
      onPress={() => navigation.navigate("PokeScreen", {name, url: species.url.replace('-species','')})} 
    >
      <View style={styles.pokeCardFlex}> 
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          {pokeTypes}
        </View>
        <View style={styles.imgContainer}>
          <Image source={{uri: artwork}} style={styles.pokeImg}/>
          <Image source={pokeballImg} style={styles.pokeballImg}/>
        </View>
      </View> 
    </TouchableOpacity>
  )
}
