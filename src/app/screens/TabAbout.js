import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../styles/PokeScreen'

export default function TabAbout(props) {

  const {pokemon, speciesUrl} = props
  const [species, setSpecies] = useState({})
  const columnTitleArr = ['Species','Height','Weight','Abilities','Base Exp.','Habitat','Generation','Color']

  const columnTitleRender1 = columnTitleArr?.slice(0,4).map((title,i) => {
    return <Text style={styles.columnLabel} key={i}>{title}</Text>
  })
  const columnTitleRender2 = columnTitleArr?.slice(4).map((title,i) => {
    return <Text style={styles.columnLabel} key={i}>{title}</Text>
  })
  const abilitiesRender = pokemon.abilities?.slice(0,2).map((abs,i) => {
    return <Text style={styles.abilityText} key={i}>{abs.ability.name}</Text>
  })

  useEffect(() => {
    axios({
      method: 'get', 
      url: speciesUrl,
    }).then((res) => {
      setSpecies(res.data)
    })
  },[speciesUrl])

  return (
    <View style={styles.content}>
      <View style={styles.tabSection}>
        <View style={styles.tabColumnLabel}>
          {columnTitleRender1}
        </View>
        <View style={styles.tabColumnText}>
          <Text style={styles.columnText}>{species?.egg_groups && species?.egg_groups[0]?.name}</Text>
          <Text style={styles.columnText}>{pokemon.height} <Text style={{textTransform:'lowercase'}}>cm</Text></Text>
          <Text style={styles.columnText}>{pokemon.weight} <Text style={{textTransform:'lowercase'}}>kg</Text></Text>
          <View style={styles.abilities}>{abilitiesRender}</View>
        </View>
      </View>
      <View style={styles.tabSection}>
        <Text style={styles.sectionTitle}>Other</Text>
      </View>
      <View style={styles.tabSection}>
        <View style={styles.tabColumnLabel}>
          {columnTitleRender2}
        </View>
        <View style={styles.tabColumnText}>
          <Text style={styles.columnText}>{pokemon.base_experience}</Text>
          <Text style={styles.columnText}>{species?.habitat && species?.habitat?.name}</Text>
          <Text style={styles.columnText}>{species?.generation && species?.generation?.name}</Text>
          <Text style={styles.columnText}>{species?.color && species?.color?.name}</Text>
        </View>
      </View>
      <View style={styles.tabSection}>
        <Text style={styles.sectionTitle}>Description</Text>
      </View>
      <View>
        <Text numberOfLines={1} style={{ flex: 1, textAlign: "left",width:'80%' }}>
          {species?.flavor_text_entries && species.flavor_text_entries[0].flavor_text}
        </Text>
      </View>
    </View>
  )
}
