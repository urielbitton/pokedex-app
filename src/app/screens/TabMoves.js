import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/PokeScreen'
import typeColorConvert from '../utilities/typeColorConvert'

export default function TabMoves(props) {

  const {pokemon} = props

  const movesRender = pokemon.moves?.slice(0,4).map((mv,i) => {
    return <View 
      style={[styles.movesContainer, {backgroundColor:typeColorConvert(pokemon?.types ? pokemon?.types[0]?.type.name: Colors.color)}]}
      key={i}
    >
      <Text style={styles.movesText}>{mv.move.name}</Text>
    </View>
  })

  return (
    <View style={styles.movesFlex}>
      <Text style={styles.sectionTitle}>Moves</Text>
      {movesRender}
    </View>
  )
}
