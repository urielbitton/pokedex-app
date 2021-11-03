import React, { useContext, useEffect } from 'react'
import { ScrollView, View, Text } from 'react-native'
import PageTitle from '../components/PageTitle'
import PokeCard from '../components/PokeCard'
import Screen from '../components/Screen'
import {styles} from '../styles/PokedexScreen'
import {StoreContext} from '../store/context'
// import {firebase} from '../firebase/Fire'

export default function PokedexScreen() {

  const {allPokemon} = useContext(StoreContext)

  const pokedex = allPokemon?.map((poke,i) => {
    return <PokeCard poke={poke} key={poke.name} pageTitle={poke.name}/>
  })

  // useEffect(() => {
  //   firebase.firestore().collection('test').doc('test').onSnapshot(snap => {
  //     console.log(snap.data())
  //   })
  // },[])
  
  return (
    <ScrollView>
      <Screen showPokeImg>
        <View style={styles.container}>
          <View style={styles.header}>
            <PageTitle title="Pokedex"/>
          </View>
          <Text></Text>
          <View style={styles.pokedexContainer}>
            {pokedex}
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
}
