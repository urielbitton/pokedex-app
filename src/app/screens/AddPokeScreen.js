import React, { useState } from 'react'
import { ScrollView, Text, View, Image, Picker } from 'react-native'
import { styles } from '../styles/AddPokeScreen'
import pokeballColor from '../assets/imgs/pokeball-color.png'
import { Input } from 'react-native-elements'

export default function AddPokeScreen() {

  const [name, setName] = useState('')
  const [type1, setType1] = useState('')
  const [type2, setType2] = useState('')
  const [pokeNum, setPokeNum] = useState('')
  const [species, setSpecies] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState('')

  const typesArr = ['Pokemon Type','grass','fire','water','poison','normal','ice','electric','ground','flying','bug']
  
  const typesListItems = typesArr?.map((type,i) => {
    return <Picker.Item 
      label={type.charAt(0).toUpperCase()+type.slice(1)} 
      value={type} 
      key={i}
    />
  })


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
          <Input
            placeholder="Pokemon Name"
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
            placeholder="Pokemon Height"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setHeight(val)}
          />
          <Input
            placeholder="Pokemon Weight"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setWeight(val)}
          />
          <Input
            placeholder="Description"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setDescription(val)}
            numberOfLines={2}
          />
          <Input
            placeholder="Pokemon Picture Link"
            inputContainerStyle={styles.inputContainers}
            style={styles.inputs}
            onChangeText={(val) => setPicture(val)}
          />
        </View>
      </View>
    </ScrollView>
  )
}
