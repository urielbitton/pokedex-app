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

export default function AddPokeScreen(props) {

  const {user} = useContext(StoreContext)
  const {name, pokeNum, description, height, imageUrl, species, type1, type2, weight} = props.route.params
  const [editName, setEditName] = useState('')
  const [editType1, setEditType1] = useState('')
  const [editType2, setEditType2] = useState('') 
  const [editPokeNum, setEditPokeNum] = useState('')
  const [editSpecies, setEditSpecies] = useState('')
  const [editHeight, setEditHeight] = useState('')
  const [editWeight, setEditWeight] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editImgUrl, setEditImgUrl] = useState(null)
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

  const editPokemon = () => {
    if(name.length) {
      
    }
    else {
      window.alert('Please fill in all required fields.')
    }
  }
  const deletePokemon = () => {
   
  }

  useEffect(() => {
    getMyUser(user.uid, setMyPokedex) 
  },[user])

  useEffect(() => {
    setEditName(name)
    setEditType1(type1)
    setEditType2(type2)
    setEditPokeNum(pokeNum)
    setEditSpecies(species)
    setEditHeight(height)
    setEditWeight(weight)
    setEditDescription(description)
    setEditImgUrl(imageUrl)
  },[props.route.params])

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
          <Text style={styles.pageTitle}>Edit Pokemon</Text>
          <Text style={styles.pageSubtitle}>Edit or Delete your pokemon from your personal collection.</Text>
        </View>
        <View style={styles.formContainer}>
          <ImagePicker 
            imgUrl={editImgUrl} 
            setImgUrl={setEditImgUrl} 
          />
          <Input
            placeholder="Pokemon Name *"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setEditName(val)}
            value={editName}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={type1}
              style={styles.inputPicker}
              onValueChange={(itemValue, itemIndex) => setEditType1(itemValue)}
              itemStyle={styles.pickerItems}
            >
              {typesListItems}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={type2}
              style={styles.inputPicker}
              onValueChange={(itemValue, itemIndex) => setEditType2(itemValue)}
            >
              {typesListItems}
            </Picker>
          </View>
          <Input
            placeholder="Pokemon Number"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setEditPokeNum(val)}
            value={pokeNum}
          />
          <Input
            placeholder="Species"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setEditSpecies(val)}
            value={species}
          />
          <Input
            placeholder="Pokemon Height (cm)"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setEditHeight(val)}
            value={height}
          />
          <Input
            placeholder="Pokemon Weight (kg)"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setEditWeight(val)}
            value={weight}
          />
          <Input
            placeholder="Description"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setEditDescription(val)}
            numberOfLines={3}
            multiline
            value={description}
          />
          <View style={styles.btnGroup}>
            <Button 
              title="Save"
              containerStyle={[styles.btnContainer, {width: '45%'}]}
              buttonStyle={styles.btnStyle}
              onPress={() => editPokemon()}
            />
            <Button 
              title="Delete"
              containerStyle={[styles.btnContainer, {width: '45%'}]}
              buttonStyle={[styles.btnStyle, {backgroundColor: 'red'}]}
              onPress={() => deletePokemon()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
