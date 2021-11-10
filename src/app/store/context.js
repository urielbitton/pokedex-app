import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import firebase from 'firebase'
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
      allPokemon, setAllPokemon, activeNav, setActiveNav, pokeLimit, setPokeLimit, 
      user, myUser, setMyUser, aUser, setAUser, pageTitle, setPageTitle,
      allFavs, setAllFavs, logAuth, setLogAuth
    }}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider