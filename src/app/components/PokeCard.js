import React, {useEffect, useState} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import pokeballImg from '../assets/imgs/pokeball-white.png'
import { styles } from '../styles/PokeCard'
import axios from 'axios'
import typeColorConvert from '../utilities/typeColorConvert'
import Colors from '../utilities/Colors'
import TypeBubble from './TypeBubble'
import { useNavigation } from '@react-navigation/native'

export default function PokeCard(props) {

  const {name, url} = props.poke
  const {index, pageTitle} = props
  const [pokemon, setPokemon] = useState({})
  const navigation = useNavigation() 

  const pokeTypes = pokemon.types?.map((ty,i) => {
    return <TypeBubble name={ty.type.name} key={i} />
  })

  useEffect(() => {
    axios({
      method: 'get', 
      url: url,
    }).then((res) => {
      setPokemon(res.data)
    })
  },[])

  return (
    <TouchableOpacity 
      style={[styles.pokeCard, {backgroundColor:typeColorConvert(pokemon?.types ? pokemon?.types[0]?.type.name: Colors.color)}]} 
      activeOpacity={.7}
      onPress={() => navigation.navigate(pageTitle)}
    >
      <View style={styles.pokeCardFlex}> 
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          {pokeTypes}
        </View>
        <View style={styles.imgContainer}>
          <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png`}} style={styles.pokeImg}/>
          <Image source={pokeballImg} style={styles.pokeballImg}/>
        </View>
      </View> 
    </TouchableOpacity>
  )
}
