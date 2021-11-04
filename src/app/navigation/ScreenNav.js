import React, { useContext, useRef } from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StoreContext } from '../store/context'
import BottomNav from './BottomNav'
import PokeScreen from '../screens/PokeScreen'
import HomeScreen from '../screens/HomeScreen'
import PokedexScreen from '../screens/PokedexScreen'
import AuthScreen from '../screens/AuthScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

export default function ScreenNav(props) {

  const {allPokemon} = useContext(StoreContext)

  const Stack = createStackNavigator()
  const navigRef = useRef() 

  const pokeScreensRender = allPokemon?.map((poke,i) => {
    return <Stack.Screen name={poke.name} key={i}>
        {props => <PokeScreen poke={poke} key={poke.id}/>} 
    </Stack.Screen>
  }) 

  return ( 
    <View style={styles.homecont}> 
      <NavigationContainer ref={navigRef}>
        <Stack.Navigator headerMode={false} initialRouteName="Home">  
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pokedex" component={PokedexScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
            {
              allPokemon.length ? pokeScreensRender : 
              <Stack.Screen name="Loading">
                {props => <Text>Loading</Text>}
              </Stack.Screen>
            }
        </Stack.Navigator>
        <BottomNav navigRef={navigRef} />
      </NavigationContainer>
    </View> 
  )
}

const styles = StyleSheet.create({
  homecont: {
    flex: 1,
    width: '100%'
  }
})
