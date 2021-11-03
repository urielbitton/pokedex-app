import React, { useEffect, useState } from 'react'
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
import typeColorConvert from '../utilities/typeColorConvert'

export default function PokeScreen(props) {

  const {name, url} = props.poke
  const [favorite, setFavorite] = useState(true)
  const [tabIndex, setTabIndex] = useState(0)
  const [pokemon, setPokemon] = useState({})
  const navigation = useNavigation() 
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  const pokeNum = zeroPad(pokemon.order, 3)
  let rotateValueHolder = new Animated.Value(0)

  const addToFavorite = () => {
    setFavorite(prev => !prev)
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
      buttonStyle={[styles.tabButton, tabIndex===i && styles.activeTab]} 
      titleStyle={[styles.tabTitle, tabIndex===i && styles.activeTitle]} 
      onPress={() => setTabIndex(i)}
      key={i}
    />
  })

  useEffect(() => {
    axios({
      method: 'get', 
      url: url,
    }).then((res) => {
      setPokemon(res.data)
    })
  },[])

  useEffect(() => {
    startImageRotateFunction()
  },[pokemon, tabIndex])

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
            <TouchableWithoutFeedback onPress={() => addToFavorite()}>
              <Ionicons name={favorite?"ios-heart":"ios-heart-outline"} size={30} color="#fff" />
            </TouchableWithoutFeedback> 
          </View>
          <View style={styles.titleBar}>
            <View style={styles.titles}>
              <Text style={styles.pokeName}>{name}</Text>
              <TypeBubble name={pokemon?.types ? pokemon?.types[0]?.type.name: 'Normal'}/>
            </View>
            <Text style={styles.number}>#{pokeNum}</Text>
          </View>
          <View style={styles.pokeImgsContainer}>
            <Image source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.order}.png`}} style={styles.pokeImg}/>
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
                <TabEvolution evolution={pokemon?.species ? pokemon?.species?.url : "."}/>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <Text h1>Moves</Text>
              </TabView.Item>
            </TabView>
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
}
