import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, View, TouchableWithoutFeedback, TouchableOpacity, Text, Image, Animated, Easing } from 'react-native'
import {styles} from '../styles/PokeScreen'
import Colors from '../utilities/Colors'
import Screen from '../components/Screen'
import { FontAwesome, Ionicons  } from '@expo/vector-icons';
import TypeBubble from '../components/TypeBubble'
import pokeballImg from '../assets/imgs/pokeball-white.png'
import { Tab, TabView, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import typeColorConvert from '../utilities/typeColorConvert'
import {StoreContext} from '../store/context'
import { updateDB } from '../services/CrudDB'
import { getMyUser } from '../services/UserServices'

export default function PokeScreen(props) {

  const {setPageTitle, user, allFavs, setAllFavs} = useContext(StoreContext)
  const {name, pokeNum, description, height, imageUrl, species, type1, type2, weight} = props.route.params
  const [tabIndex, setTabIndex] = useState(0)
  const navigation = useNavigation() 
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  const rotateValueHolder = new Animated.Value(0)

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
    startImageRotateFunction()
  },[name, tabIndex])

  useEffect(() => {
    getMyUser(user.uid, setAllFavs)
  },[user])

  useEffect(() => setPageTitle(name), [navigation]) 

  return (
    <ScrollView>
      <Screen>
        <View style={[styles.container, {backgroundColor:typeColorConvert(type1??type2??Colors.color)}]}>
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
              <TypeBubble name={type1??type2??'Normal'} width="70%"/>
              <Button 
                title="Edit" 
                containerStyle={styles.editPokeCont} 
                buttonStyle={styles.editPokeBtn} 
                titleStyle={{color:'#333'}}
                onPress={() => {
                  navigation.navigate('EditPoke', {
                    name, pokeNum, description, height, imageUrl, species, type1, type2, weight
                  })
                }}
              />
            </View>
            <Text style={styles.number}>#{pokeNum}</Text>
          </View>
          <View style={styles.pokeImgsContainer}>
            <Image source={{uri:imageUrl}} style={styles.pokeImg}/>
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
                <MyTabAbout description={description} height={height} weight={weight} species={species} />
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <></>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <></>
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <></>
              </TabView.Item>
            </TabView>
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
}

export const MyTabAbout = ({description, height, weight, species}) => {

  const columnTitleArr = ['Species','Height','Weight','Abilities','Base Exp.','Habitat','Generation','Color']

  const columnTitleRender1 = columnTitleArr?.slice(0,4).map((title,i) => {
    return <Text style={styles.columnLabel} key={i}>{title}</Text>
  })
  const columnTitleRender2 = columnTitleArr?.slice(4).map((title,i) => {
    return <Text style={styles.columnLabel} key={i}>{title}</Text>
  })

  return (
    <View style={styles.content}>
      <View style={styles.tabSection}>
        <View style={styles.tabColumnLabel}>
          {columnTitleRender1}
        </View>
        <View style={styles.tabColumnText}>
          <Text style={styles.columnText}>{species??""}</Text>
          <Text style={styles.columnText}>{height} <Text style={{textTransform:'lowercase'}}>cm</Text></Text>
          <Text style={styles.columnText}>{weight} <Text style={{textTransform:'lowercase'}}>kg</Text></Text>
          <View style={styles.abilities}></View>
        </View>
      </View>
      <View style={styles.tabSection}>
        <Text style={styles.sectionTitle}>Other</Text>
      </View>
      <View style={styles.tabSection}>
        <View style={styles.tabColumnLabel}>
          {columnTitleRender2}
        </View>
        <View style={styles.tabColumnText}>
          <Text style={styles.columnText}>{0}</Text>
          <Text style={styles.columnText}>{""}</Text>
          <Text style={styles.columnText}>{}</Text>
          <Text style={styles.columnText}>{}</Text>
        </View>
      </View>
      <View style={styles.tabSection}>
        <Text style={styles.sectionTitle}>Description</Text>
      </View>
      <View>
        <Text numberOfLines={1} style={{ flex: 1, textAlign: "left",width:'80%' }}>
          {description}
        </Text>
      </View>
    </View>
  )
}