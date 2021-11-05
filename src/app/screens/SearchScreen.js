import React, { useContext, useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { StoreContext } from '../store/context';
import {styles} from '../styles/SearchScreen'
import PokeCard from '../components/PokeCard'
import notFoundImg from '../assets/imgs/404.png'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';

export default function SearchScreen() {

  const {allPokemon, setPageTitle, setPokeLimit} = useContext(StoreContext)
  const [keyword, setKeyword] =  useState('')
  const clean = text => text.replace(/[^a-zA-Z0-9 ]/g, "")
  let pattern = new RegExp('\\b' + clean(keyword), 'i')
  const searchFilter = allPokemon?.filter(x => pattern.test(x.name) && keyword.length)
  const navigation = useNavigation() 

  const pokedex = searchFilter.map((poke,i) => {
    return <PokeCard 
      poke={poke} 
      pageTitle={poke.name} 
      width={300}
      key={poke.name} 
    />
  })

  useEffect(() => setPageTitle('Search'), [navigation]) 

  useEffect(() => {
    setPokeLimit(150)
    return() => setPokeLimit(25)
  },[])

  return (
    <ScrollView>
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
    </ScrollView>
  )
}
