import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View, Linking } from 'react-native'
import Screen from '../components/Screen'
import { styles } from '../styles/HomeScreen';
import { Image } from 'react-native-elements';
import InfoCard from '../components/InfoCard'
import { StoreContext } from '../store/context';
import PageTitle from '../components/PageTitle';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import { useNavigation } from '@react-navigation/native'
import Colors from '../utilities/Colors';

export default function HomeScreen() {
 
  const {menuLinks, newsStories, setPageTitle, user} = useContext(StoreContext)
  const [dayTime, setDayTime] = useState('')
  const navigation = useNavigation() 
  const time = new Date().getHours()

  const cardsRender = menuLinks?.map((card) => {
    return <InfoCard 
      card={card} 
      key={card.title} 
      onPress={() => navigation.navigate(card.title)}
    />
  })

  const myCardsArr = [
    {title: 'My Pokedex', color: Colors.color, link: 'MyPokedex'},
    {title: 'My Favorites', color: Colors.red, link: 'Favorites'},
  ]

  const myCardsRender = myCardsArr?.map((card,i) => {
    return <InfoCard 
      card={card} 
      key={card.title} 
      onPress={() => navigation.navigate(card.link)}
    />
  })

  const newsStoriesRender = newsStories?.map((news,i) => {
    return <TouchableWithoutFeedback 
      style={styles.newsStoryContainer} 
      onPress={() => Linking.openURL(news.url)}
      key={i}
    >
      <View style={styles.newsStoryFlex}>
        <View style={styles.storyTextContainer}>
          <Text style={styles.storyTitle}>{news.title}</Text>
          <Text style={styles.storyDate}>{news.date}</Text>
        </View>
        <Image 
          style={styles.newsImg} 
          source={news.img}
        />
      </View>
    </TouchableWithoutFeedback>
  })

  useEffect(() => {
    if(time >= 0 && time < 12) 
      setDayTime('Morning') 
    else if(time >= 12 && time <=18)
      setDayTime('Afternoon')
    else  
      setDayTime('Evening') 
  },[time])

  useEffect(() => setPageTitle('Home'), [navigation]) 

  return (
    <ScrollView>
      <Screen style={{backgroundColor:'#eee'}} showPokeImg>
        <View style={styles.container}>
        <Text style={styles.greetText}>Good {dayTime}, {user.displayName}</Text>
        <PageTitle title="What pokemon are you looking for?"/>
        <SearchBar 
          placeholder='Search pokemon, move, ability, etc'
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyles} 
          onTouchEnd={() => navigation.navigate('Search')}
        />
        <View style={styles.cardContainer}>
          {cardsRender}
        </View>
      </View>
      <View style={styles.newsContainer}>
          <View style={styles.titleBar}>
            <Text style={styles.newsTitle}>Pokemon News</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>
          {newsStoriesRender}
      </View>
      <View style={styles.myPokemon}>
        <Text style={styles.myPokemonTitle}>My Pokemon</Text>
        <View style={styles.myCardsContainer}>
          {myCardsRender}
        </View>
      </View>
      </Screen>
    </ScrollView>
  ) 
}


