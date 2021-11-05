import React, { useContext, useEffect, useState } from 'react'
import { FlatList, View, Text } from 'react-native'
import {StoreContext} from '../store/context'
import {styles} from '../styles/FavoritesScreen.js'
import PageTitle from '../components/PageTitle'
import { getMyUser } from '../services/UserServices'
import PokeCard from '../components/PokeCard'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements/dist/buttons/Button'
import Colors from '../utilities/Colors'
import { useNavigation } from '@react-navigation/native'

export default function FavoritesScreen() {

  const {setPageTitle, user, allPokemon, setPokeLimit, allFavs, setAllFavs} = useContext(StoreContext)
  const favPokemon = allPokemon.filter(x => allFavs?.favorites?.includes(x.name))
  const navigation = useNavigation() 

  useEffect(() => setPageTitle('Favorites'), [])

  useEffect(() => {
    getMyUser(user.uid, setAllFavs)
    setPokeLimit(150)
    return() => setPokeLimit(25)
  },[user]) 

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageTitle title="My Favorites"/>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarText}>{favPokemon.length} Pokemon</Text>
          <Button 
            title="Add"
            buttonStyle={{backgroundColor: Colors.red, width: 100}}
            onPress={() => navigation.navigate('Pokedex')}
          />
        </View>
        <View style={styles.favContainer}>
          <FlatList 
            data={favPokemon}
            keyExtractor={allPokemon => allPokemon.name}
            renderItem={poke => 
              <PokeCard poke={poke.item} pageTitle={poke.item.name} />
            }
            contentContainerStyle={styles.pokedexContainer}
            numColumns={2} 
            onEndReachedThreshold={1}
          />
        </View>
      </View>
    </ScrollView>
  )
}
