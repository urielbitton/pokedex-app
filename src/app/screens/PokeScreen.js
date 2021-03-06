import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, View, TouchableWithoutFeedback, TouchableOpacity, Text, Image, Animated, Easing } from 'react-native'
import {styles} from '../styles/PokeScreen'
import Colors from '../utilities/Colors'
import Screen from '../components/Screen'
import { FontAwesome, Ionicons  } from '@expo/vector-icons';
import TypeBubble from '../components/TypeBubble'
import pokeballImg from '../assets/imgs/pokeball-white.png'
import { Tab, TabView, Button } from 'react-native-elements';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import TabAbout from './TabAbout'
import TabBaseStats from './TabBaseStats'
import TabEvolution from './TabEvolution'
import TabMoves from './TabMoves'
import typeColorConvert from '../utilities/typeColorConvert'
import {StoreContext} from '../store/context'
import { updateDB } from '../services/CrudDB'
import { getMyUser } from '../services/UserServices'

export default function PokeScreen(props) {

  const {setPageTitle, user, allFavs, setAllFavs} = useContext(StoreContext)
  const {name, url} = props.route.params
  const [tabIndex, setTabIndex] = useState(0)
  const [pokemon, setPokemon] = useState({})
  const navigation = useNavigation() 
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  const pokeNum = zeroPad(pokemon.order, 3)
  const rotateValueHolder = new Animated.Value(0)
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const toggleFavorite = () => {
    if(!allFavs?.favorites?.includes(name)) 
      allFavs?.favorites?.push(name) 
    else
      allFavs?.favorites?.splice(allFavs?.favorites?.indexOf(name), 1)
    updateDB('users', user.uid, allFavs)
  }

  const tabsArr = [
    {name: 'About'},
    {name: 'Base Stats'},
    {name: 'Evolution'},
    {name: 'Moves'}
  ]

  const tabsRender = tabsArr?.map((tab,i) => {
    return <Button 
      title={tab.name} 
      buttonStyle={[styles.tabButton, tabIndex===i ? styles.activeTab : {}]} 
      titleStyle={[styles.tabTitle, tabIndex===i ? styles.activeTitle : {}]} 
      onPress={() => setTabIndex(i)}
      key={i}
    />
  })

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageRotateFunction());
  };
  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    axios({
      method: 'get', 
      url: url,
    }).then((res) => {
      setPokemon(res.data)
    }).catch((error)=>{
      console.log("Api call error");
    })
  },[name])

  useEffect(() => {
    startImageRotateFunction()
  },[pokemon, tabIndex])

  useEffect(() => {
    getMyUser(user.uid, setAllFavs)
  },[user])

  useEffect(() => setPageTitle(name), [navigation]) 

  return (
    <ScrollView>
      <Screen>
        <View style={[styles.container, {backgroundColor:typeColorConvert(pokemon?.types ? pokemon?.types[0]?.type.name: Colors.color)}]}>
          <View style={styles.sqBlob}></View>
          <View style={styles.toolbar}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={styles.goBackContainer}
            >
              <FontAwesome name="angle-left" size={33} color="#fff" />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={() => toggleFavorite()}>
              <Ionicons name={allFavs?.favorites?.includes(name)?"ios-heart":"ios-heart-outline"} size={30} color="#fff" />
            </TouchableWithoutFeedback> 
          </View>
          <View style={styles.titleBar}>
            <View style={styles.titles}>
              <Text style={styles.pokeName}>{name}</Text>
              <TypeBubble name={pokemon?.types ? pokemon?.types[0]?.type.name: 'Normal'} width="70%"/>
            </View>
            <Text style={styles.number}>#{pokeNum}</Text>
          </View>
          <View style={styles.pokeImgsContainer}>
            <Image source={{uri:artwork}} style={styles.pokeImg}/>
            <View style={styles.pokeballContainer}>
              <Animated.Image
                style={[styles.pokeballImg, {transform: [{rotate: rotateData}] }]}
                source={pokeballImg} 
              />
            </View>
          </View>
          <View style={styles.pokeInfo}>
            <Tab value={tabIndex} onChange={setTabIndex} disableIndicator>
              <View style={styles.tabsNav}>
                {tabsRender}
              </View>
            </Tab>
            <TabView value={tabIndex} onChange={setTabIndex}>
              <TabView.Item style={styles.tabContent}>
                <TabAbout speciesUrl={pokemon?.species ? pokemon?.species?.url : "."} pokemon={pokemon}/>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <TabBaseStats stats={pokemon.stats} />
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <TabEvolution evolution={pokemon?.species ? pokemon?.species?.url : "."} pokemon={pokemon}/>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <TabMoves pokemon={pokemon}/>
              </TabView.Item>
            </TabView>
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
}
