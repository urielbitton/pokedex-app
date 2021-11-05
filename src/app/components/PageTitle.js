import React from 'react'
import { StyleSheet, View, Text } from 'react-native'; 

export default function PageTitle(props) {

  const {title} = props

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({ 
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
    padding: 5
  }
})
