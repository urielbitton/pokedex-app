import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import {styles} from '../styles/PokeScreen'
import pokeballImg from '../assets/imgs/pokeball-gray.png'

export default function TabEvolution(props) {

  const {evolution} = props
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

  console.log(evolve?.chain?.species.name)
  console.log(evolve?.chain?.evolves_to[0].species.name)
  console.log(evolve?.chain?.evolves_to[0].evolves_to[0].species.name)

  return (
    <View>
      <Text style={styles.sectionTitle}>Evolution Chain</Text>
      <Text>{evolve?.chain?.species.name}</Text>
      <View>
        <Image 
          source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolve.id}.png`}}
          style={{width: 60, height: 60,zIndex:10}}
        />
        <Image source={pokeballImg} style={{position: 'absolute',width:90,height:90,opacity:0.25}}/>
      </View>
    </View>
  )
}
