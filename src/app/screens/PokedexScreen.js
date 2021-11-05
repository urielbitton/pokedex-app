import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import PageTitle from '../components/PageTitle'
import PokeCard from '../components/PokeCard'
import Screen from '../components/Screen'
import {styles} from '../styles/PokedexScreen'
import {StoreContext} from '../store/context'
import { SpeedDial } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../utilities/Colors'

export default function PokedexScreen() {

  const {allPokemon, setPokeLimit, setPageTitle} = useContext(StoreContext)
  const [isRefresh, setIsRefresh] = useState(false)
  const [openDial, setOpenDial] = useState(false)
  const [sort, setSort] = useState(0)
  const navigation = useNavigation() 

  const allPokemonSorted = (num) => {
    if(num === 1) {
      return allPokemon
    }
    else {
      return allPokemon.slice().sort((a,b) => {
        if(sort === 0) {
          return a.name > b.name ? 1 : -1
        }
      })
    }
  }

  useEffect(() => {
    setPageTitle('Pokedex')
    setPokeLimit(25)
    return() => setPokeLimit(25)
  },[])
  
  return (
    <>
      <Screen showPokeImg>
        <View>
          <View style={styles.header}>
            <PageTitle title="Pokedex"/>
            <View style={styles.tools}>
              <FontAwesome 
              name="sort-alpha-asc" 
              size={18}
              style={[styles.toolsIcon, {color:sort===0 ? Colors.red : "#777"}]}
              onPress={() => setSort(0)}
              />
              <FontAwesome 
                name="unsorted" 
                size={20} 
                style={[styles.toolsIcon, {color:sort===1 ? Colors.red : "#777"}]}
                onPress={() => setSort(1)}
              />
            </View>
          </View>
          <View style={styles.flatListContainer}>
            <FlatList 
              data={allPokemonSorted(sort)}
              keyExtractor={allPokemon => allPokemon.name}
              renderItem={poke => 
                <PokeCard poke={poke.item} pageTitle={poke.item.name}/>
              }
              contentContainerStyle={styles.pokedexContainer}
              numColumns={2} 
              maxToRenderPerBatch={25}
              onEndReached={() => setPokeLimit(prev => prev + 25)}
              onEndReachedThreshold={0.9}
              onRefresh={() => setIsRefresh(true)}
              refreshing={false}
              getItemLayout={(data, index) => (
                {length: 120, offset: 120 * index, index}
              )}
            />
          </View>
        </View>
      </Screen>
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
