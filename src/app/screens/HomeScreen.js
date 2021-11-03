import React, { useContext } from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View, Linking } from 'react-native'
import Screen from '../components/Screen'
import { styles } from '../styles/HomeScreen';
import { Button, Image, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import InfoCard from '../components/InfoCard'
import { StoreContext } from '../store/context';
import PageTitle from '../components/PageTitle';
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';

export default function HomeScreen() {
 
  const {menuLinks, newsStories} = useContext(StoreContext)

  const cardsRender = menuLinks?.map((card) => {
    return <InfoCard card={card} key={card.title} />
  })

  const newsStoriesRender = newsStories?.map(news => {
    return <TouchableWithoutFeedback style={styles.newsStoryContainer} onPress={() => Linking.openURL(news.url)}>
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

  return (
    <ScrollView>
      <Screen style={{backgroundColor:'#eee'}} showPokeImg>
        <View style={styles.container}>
        <PageTitle title="What pokemon are you looking for?"/>
        <SearchBar 
          placeholder='Search pokemon, move, ability, etc'
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyles} 
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
      </Screen>
    </ScrollView>
  ) 
}

