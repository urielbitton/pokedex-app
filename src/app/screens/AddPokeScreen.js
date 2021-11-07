import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text, View, Image, Picker, TouchableOpacity } from 'react-native'
import { styles } from '../styles/AddPokeScreen'
import pokeballColor from '../assets/imgs/pokeball-color.png'
import { Button, Input } from 'react-native-elements'
import { updateDB } from '../services/CrudDB'
import {StoreContext} from '../store/context'
import { useNavigation } from '@react-navigation/native'
import { getMyUser } from '../services/UserServices'
import ImagePicker from '../utilities/ImagePicker'
import UploadFireStorage from '../utilities/ImgurUpload'
import ImgurUpload from '../utilities/ImgurUpload'

export default function AddPokeScreen() {

  const {user} = useContext(StoreContext)
  const [name, setName] = useState('')
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('') 
  const [pokeNum, setPokeNum] = useState('')
  const [species, setSpecies] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [description, setDescription] = useState('')
  const [imgUrl, setImgUrl] = useState(null)
  const [storageUrl, setStorageUrl] = useState('')
  const [myPokedex, setMyPokedex] = useState([])
  const navigation = useNavigation() 

  const typesArr = ['Pokemon Type','grass','fire','water','poison','normal','ice','electric','ground','flying','bug']
  
  const typesListItems = typesArr?.map((type,i) => {
    return <Picker.Item 
      label={type.charAt(0).toUpperCase()+type.slice(1)} 
      value={type} 
      key={i}
    />
  })

  const addPokemon = () => {
    if(name.length) {
      ImgurUpload(imgUrl)
      const pokemonObj = { name, type1, type2, pokeNum, species, height, weight, description, imageUrl: imgUrl }
      myPokedex?.myPokedex.push(pokemonObj)
      updateDB('users', user.uid, myPokedex).then(() => {
        navigation.navigate('MyPokedex')
        window.alert('The pokemon was successfully added to your personal pokedex.')
      })
    }
    else {
      window.alert('Please fill in all required fields.')
    }
  }

  useEffect(() => {
    getMyUser(user.uid, setMyPokedex) 
  },[user])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.pokeballContainer}>
          <Image 
              source={pokeballColor}
              style={styles.pokeballColor}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.pageTitle}>Add A Pokemon</Text>
          <Text style={styles.pageSubtitle}>Add and manage pokemon to your personal collection.</Text>
        </View>
        <View style={styles.formContainer}>
          <ImagePicker 
            imgUrl={imgUrl} 
            setImgUrl={setImgUrl} 
          />
          <Input
            placeholder="Pokemon Name *"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setName(val)}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={type1}
              style={styles.inputPicker}
              onValueChange={(itemValue, itemIndex) => setType1(itemValue)}
              itemStyle={styles.pickerItems}
            >
              {typesListItems}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={type2}
              style={styles.inputPicker}
              onValueChange={(itemValue, itemIndex) => setType2(itemValue)}
            >
              {typesListItems}
            </Picker>
          </View>
          <Input
            placeholder="Pokemon Number"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setPokeNum(val)}
          />
          <Input
            placeholder="Species"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setSpecies(val)}
          />
          <Input
            placeholder="Pokemon Height (cm)"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setHeight(val)}
          />
          <Input
            placeholder="Pokemon Weight (kg)"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setWeight(val)}
          />
          <Input
            placeholder="Description"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setDescription(val)}
            numberOfLines={3}
            multiline
          />
          <Button 
            title="Add Pokemon"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnStyle}
            onPress={() => addPokemon()}
          />
        </View>
      </View>
    </ScrollView>
  )
}
