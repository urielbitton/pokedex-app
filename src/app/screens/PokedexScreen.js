import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, View, FlatList } from 'react-native'
import PageTitle from '../components/PageTitle'
import PokeCard from '../components/PokeCard'
import Screen from '../components/Screen'
import {styles} from '../styles/PokedexScreen'
import {StoreContext} from '../store/context'
import { SpeedDial } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'

export default function PokedexScreen() {

  const {allPokemon, setPokeLimit, setPageTitle} = useContext(StoreContext)
  const [isRefresh, setIsRefresh] = useState(false)
  const [openDial, setOpenDial] = useState(false)
  const navigation = useNavigation() 

  useEffect(() => {
    setPageTitle('Pokedex')
    return() => setPokeLimit(15)
  },[])
  
  return (
    <>
      <ScrollView>
        <Screen showPokeImg>
          <View style={styles.container}>
            <View style={styles.header}>
              <PageTitle title="Pokedex"/>
            </View>
            <View>
              <FlatList 
                data={allPokemon}
                keyExtractor={allPokemon => allPokemon.name}
                renderItem={poke => 
                  <PokeCard poke={poke.item} pageTitle={poke.item.name}/>
                }
                contentContainerStyle={styles.pokedexContainer}
                numColumns={2} 
                // onEndReached={() => setPokeLimit(prev => prev + 15)}
                onEndReachedThreshold={1}
                onRefresh={() => setIsRefresh(true)}
                refreshing={isRefresh}
              />
            </View>
          </View>
        </Screen>
      </ScrollView>
      <SpeedDial
          isOpen={openDial}
          icon={{ name: 'add', color: '#fff' }}
          openIcon={{ name: 'close', color: '#fff' }}
          onOpen={() => setOpenDial(prev => !prev)}
          onClose={() => setOpenDial(prev => !prev)}
          buttonStyle={[styles.speedDialBtn, styles.speedDial]}
        >
          <SpeedDial.Action
            icon={{ name: 'add', color: '#fff' }}
            title="Add"
            onPress={() => {
              navigation.navigate('AddPoke')
              setOpenDial(false)
            }}
            buttonStyle={styles.speedDialBtn}
          />
        </SpeedDial>
    </>
  )
}
