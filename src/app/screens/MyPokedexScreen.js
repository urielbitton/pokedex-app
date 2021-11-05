import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, View, FlatList } from 'react-native'
import PageTitle from '../components/PageTitle'
import MyPokeCard from '../components/MyPokeCard'
import Screen from '../components/Screen'
import {styles} from '../styles/PokedexScreen'
import {StoreContext} from '../store/context'
import { SpeedDial } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { getMyUser } from '../services/UserServices'

export default function MyPokedexScreen() {

  const {pokeLimit, setPokeLimit, setPageTitle, user} = useContext(StoreContext)
  const [isRefresh, setIsRefresh] = useState(false)
  const [openDial, setOpenDial] = useState(false)
  const [myPokedex, setMyPokedex] = useState([])
  const navigation = useNavigation() 

  useEffect(() => {
    setPageTitle('My Pokedex')
    return() => setPokeLimit(25)
  },[])
  
  useEffect(() => {
    getMyUser(user.uid, setMyPokedex) 
  },[user])

  return (
    <>
      <ScrollView>
        <Screen showPokeImg>
          <View style={styles.container}>
            <View style={styles.header}>
              <PageTitle title="My Pokedex"/>
            </View>
            <View>
              <FlatList 
                data={myPokedex?.myPokedex}
                keyExtractor={myPokedex => myPokedex.name}
                renderItem={poke => 
                  <MyPokeCard poke={poke.item} pageTitle={poke.item.name}/>
                }
                contentContainerStyle={styles.pokedexContainer}
                numColumns={2} 
                onEndReached={() => setPokeLimit(prev => pokeLimit < 150 && prev + 25)}
                onEndReachedThreshold={0.9}
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
