import React, { useContext, useState, useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { StoreContext } from '../store/context';
import {styles} from '../styles/SearchScreen'
import PokeCard from '../components/PokeCard'
import notFoundImg from '../assets/imgs/404.png'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import SearchCard from '../components/SearchCard';

export default function SearchScreen() {

  const {setPageTitle} = useContext(StoreContext)
  const [pokemon, setPokemon] = useState({})
  const [keyword, setKeyword] =  useState('')
  const [notFound, setNotFound] = useState(false)
  const navigation = useNavigation() 

  useEffect(() => setPageTitle('Search'), [navigation]) 

  useEffect(() => {
    axios({
      method: 'get', 
      url: `https://pokeapi.co/api/v2/pokemon/${keyword.toLowerCase()}`,
    }).then((res) => {
      setPokemon(res.data)
      setNotFound(false)
    }).catch((error)=>{
      console.log("Api call error");
      setNotFound(true)
    })
  },[keyword])

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
          { pokemon.name && !notFound?
            <SearchCard 
              poke={pokemon} 
              pageTitle={pokemon?.species?.name} 
              width={300}
              key={pokemon?.species?.name} 
            /> : 
            keyword.length || notFound ?
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
