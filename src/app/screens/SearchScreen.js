import React, { useContext, useState } from 'react'
import { Text, View, Image } from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { StoreContext } from '../store/context';
import {styles} from '../styles/SearchScreen'
import PokeCard from '../components/PokeCard'
import notFoundImg from '../assets/imgs/404.png'

export default function SearchScreen() {

  const {allPokemon} = useContext(StoreContext)
  const [keyword, setKeyword] =  useState('')
  const clean = text => text.replace(/[^a-zA-Z0-9 ]/g, "")
  let pattern = new RegExp('\\b' + clean(keyword), 'i')
  const searchFilter = allPokemon?.filter(x => pattern.test(x.name) && keyword.length)

  const pokedex = searchFilter.map((poke,i) => {
    return <PokeCard poke={poke} key={poke.name} pageTitle={poke.name}/>
  })

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Search The Pokedex</Text>
      <SearchBar 
        placeholder='Find a Pokemon...'
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputStyles} 
        onChangeText={(text) => setKeyword(text)}
        value={keyword}
      />
      <View style={styles.resultsContainer}>
        { searchFilter.length?
          pokedex : keyword.length ?
          <View style={styles.noResults}>
            <Image 
              source={notFoundImg}
              style={{width: 200,height: 200}}
            />
            <Text style={styles.notFoundText}>Oops, No Results</Text>
            <Text style={styles.subtitle}>Try another search</Text>
          </View> : <Text></Text>
        }
      </View>
    </View>
  )
}
