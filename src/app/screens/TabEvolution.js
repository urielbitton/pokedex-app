import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

export default function TabEvolution(props) {

  const {evolution} = props
  const [chain, setChain] = useState({})
  const [evolve, setEvolve] = useState({})

  useEffect(() => {
    axios({
      method: 'get', 
      url: evolution,
    }).then((res) => {
      setChain(res.data)
    })
  },[evolution])

  useEffect(() => {
    axios({
      method: 'get', 
      url: chain?.evolution_chain?.url,
    }).then((res) => {
      setEvolve(res.data)
    })
  },[chain])

  console.log(evolve?.chain?.species.name)
  console.log(evolve?.chain?.evolves_to[0].species.name)
  console.log(evolve?.chain?.evolves_to[0].evolves_to[0].species.name)

  return (
    <View>
      
    </View>
  )
}
