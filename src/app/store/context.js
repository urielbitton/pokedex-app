import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import firebase from 'firebase'
import Colors from '../utilities/Colors'
import newsImg1 from '../assets/imgs/news1.jpg'
import newsImg2 from '../assets/imgs/news2.webp'
import newsImg3 from '../assets/imgs/news3.jpg'
import {db} from '../firebase/Fire'

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

  const [allPokemon, setAllPokemon] = useState([])
  const [activeNav, setActiveNav] = useState('')
  const [pokeLimit, setPokeLimit] = useState(25)
  const user = firebase.auth().currentUser
  const [myUser, setMyUser] = useState({})
  const [aUser, setAUser] = useState({})
  const [pageTitle, setPageTitle] = useState('Pokedex')
  const [allFavs, setAllFavs] = useState([])
  const [logAuth, setLogAuth] = useState(true)
  
  const menuLinks = [
    {title: 'Pokedex', color: Colors.aqua},
    {title: 'Moves', color: Colors.red},
    {title: 'Abilities', color: Colors.blue},
    {title: 'Items', color: Colors.yellow},
    {title: 'Locations', color: Colors.purple},
    {title: 'Type Chart', color: Colors.brown},
  ]
  const newsStories = [
    {id: 0, title: 'Pokemon Rumble Rash Arrives Soon', date: 'May 10 2021', img: newsImg1, url: 'https://www.pokemon.com/us/app/pokemon-rumble-rush/'},
    {id: 1, title: 'Detective Pikachu Film Out In Theatres', date: 'May 10 2021', img: newsImg2, url: 'https://www.imdb.com/title/tt5884052/'},
    {id: 2, title: 'New Pokedex API to feature latest pokemon generation', date: 'July 21 2021', img: newsImg3, url: 'https://pokeapi.co/docs/v2'}
  ]

  useEffect(() => {
    axios({
      method: 'get', 
      url: `https://pokeapi.co/api/v2/pokemon?limit=${pokeLimit <= 150 ? pokeLimit : 150}`,
    }).then((res) => {
      setAllPokemon(res.data.results)
    }).catch((error)=>{
      console.log("Api call error");
    })
  },[pokeLimit])

  useEffect(() => {
    if(user) {
      db.collection('users').doc(user.uid).onSnapshot(snap => {
        setMyUser(snap.data()) 
      })
    }
  },[user])
 
  return (
    <StoreContext.Provider value={{
      allPokemon, setAllPokemon, menuLinks, newsStories, activeNav, setActiveNav, 
      pokeLimit, setPokeLimit, user, myUser, setMyUser, aUser, setAUser, pageTitle, setPageTitle,
      allFavs, setAllFavs, logAuth, setLogAuth
    }}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider