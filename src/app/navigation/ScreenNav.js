import React, { useContext, useRef, useState } from 'react'
import { View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {styles} from '../styles/ScreenNav'
import { StoreContext } from '../store/context'
import BottomNav from './BottomNav'
import PokeScreen from '../screens/PokeScreen'
import HomeScreen from '../screens/HomeScreen'
import PokedexScreen from '../screens/PokedexScreen'
import LoginScreen from '../auth/LoginScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import { Header, Overlay, Button, Image } from 'react-native-elements'
import Colors from '../utilities/Colors'
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase'
import logoutImg from '../assets/imgs/logoutImg.png'
import AddPokeScreen from '../screens/AddPokeScreen'
import MyPokedexScreen from '../screens/MyPokedexScreen'

export default function ScreenNav(props) {

  const {allPokemon, pageTitle} = useContext(StoreContext)
  const [showOverlay, setShowOverlay] = useState(false)
  const Stack = createStackNavigator()
  const navigRef = useRef() 

  const pokeScreensRender = allPokemon?.map((poke,i) => {
    return <Stack.Screen name={poke.name} key={i}>
        {props => <PokeScreen poke={poke} key={poke.id}/>} 
    </Stack.Screen>
  }) 
  const confirmLogOut = () => {
    firebase.auth().signOut().then(() => {
      setShowOverlay(false)
    })
  }

  return ( 
    <View style={styles.homecont}> 
      <Header
          leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
          centerComponent={{ text: pageTitle, style: {color: '#fff', fontSize: 20, fontWeight: '600', textTransform:'capitalize'} }}
          rightComponent={
            <MaterialIcons name="logout" size={22} color="#fff" onPress={() => setShowOverlay(true)} />
          }
          containerStyle={{backgroundColor: Colors.red, zIndex: 900}}
          backgroundColor={Colors.red}
      />
      <Overlay 
        isVisible={showOverlay} 
        onBackdropPress={() => setShowOverlay(prev => !prev)}
        overlayStyle={styles.overlayContainer}
      >
        <Text style={styles.overlayTitle}>Are you sure you want to log out?</Text>
        <Image 
          source={logoutImg}
          style={styles.logoutImg}
        />
        <Button 
          title="Log Out" 
          containerStyle={styles.btnContainer} 
          buttonStyle={{backgroundColor: Colors.red}} 
          onPress={() => confirmLogOut()}
        />
      </Overlay>
      <NavigationContainer ref={navigRef}>
        <Stack.Navigator headerMode={false} initialRouteName="Home">  
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pokedex" component={PokedexScreen} />
          <Stack.Screen name="Auth" component={LoginScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="AddPoke" component={AddPokeScreen} />
          <Stack.Screen name="MyPokedex" component={MyPokedexScreen} />
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


