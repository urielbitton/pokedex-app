import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import {styles} from '../styles/PokeScreen'
import pokeballImg from '../assets/imgs/pokeball-gray.png'
import { AntDesign } from '@expo/vector-icons';

export default function TabEvolution(props) {

  const {evolution, pokemon} = props
  const [chain, setChain] = useState({})
  const [evolve, setEvolve] = useState({})

  useEffect(() => {
    axios({
      method: 'get', 
      url: evolution,
    }).then((res) => {
      setChain(res.data)
    })
  },[evolution])

  useEffect(() => {
    axios({
      method: 'get', 
      url: chain?.evolution_chain?.url,
    }).then((res) => {
      setEvolve(res.data)
    })
  },[chain])

  return (
    <View>
      <Text style={styles.sectionTitle}>Evolution Chain</Text>
      { evolve?.chain?.evolves_to?.length &&
        <View style={styles.evolutionRow}>
        <View style={styles.evolveContainer}>
          <Image 
            source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}}
            style={{width: 60, height: 60,zIndex:10}}
          />
          <Image source={pokeballImg} style={{position: 'absolute',top: -5,width:70,height:70,opacity:0.25}}/>
          <Text style={styles.evolveName}>{evolve?.chain?.species?.name}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={28} color="#ddd" />
          <Text style={styles.levelText}>Lvl {evolve?.chain?.evolves_to[0]?.evolution_details[0]?.min_level}</Text>
        </View>
        <View style={styles.evolveContainer}>
          <Image 
            source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolve?.chain?.evolves_to[0]?.species?.url?.split('/')[6]}.png`}}
            style={{width: 60, height: 60,zIndex:10}}
          />
          <Image source={pokeballImg} style={{position: 'absolute',top: -5,width:70,height:70,opacity:0.25}}/>
          <Text style={styles.evolveName}>{evolve?.chain?.evolves_to[0]?.species?.name}</Text>
        </View>
      </View>}

      { evolve?.chain?.evolves_to[0]?.evolves_to?.length ?
      <View style={styles.evolutionRow}>
        <View style={styles.evolveContainer}>
          <Image 
            source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolve?.chain?.evolves_to[0]?.species?.url?.split('/')[6]}.png`}}
            style={{width: 60, height: 60,zIndex:10}}
          />
          <Image source={pokeballImg} style={{position: 'absolute',top: -5,width:70,height:70,opacity:0.25}}/>
          <Text style={styles.evolveName}>{evolve?.chain?.evolves_to[0]?.species?.name}</Text>
        </View>
        <View style={styles.arrowContainer}>
          <AntDesign name="arrowright" size={28} color="#ddd" />
          <Text style={styles.levelText}>Lvl {evolve?.chain?.evolves_to[0]?.evolves_to[0]?.evolution_details[0]?.min_level}</Text>
        </View>
        <View style={styles.evolveContainer}>
          <Image 
            source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolve?.chain?.evolves_to[0]?.evolves_to[0]?.species?.url?.split('/')[6]}.png`}}
            style={{width: 60, height: 60,zIndex:10}}
          />
          <Image source={pokeballImg} style={{position: 'absolute',top: -5,width:70,height:70,opacity:0.25}}/>
          <Text style={styles.evolveName}>{evolve?.chain?.evolves_to[0]?.evolves_to[0]?.species.name}</Text>
        </View>
      </View> : <Text></Text>
      }
    </View>
  )
}
