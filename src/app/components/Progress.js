import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Progress(props) {

  const {text, percent, color, style} = props

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>
        {text}
      </Text>
      <View style={styles.progContainer}>
        <View style={[styles.progress, {width:(percent < 100 ? percent : 100)+"%", backgroundColor:color}]}></View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({ 
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: '700',
    color: '#444',
    fontSize: 14,
    width: 40
  },
  progContainer: {
    width: '63%',
    borderRadius: 20,
    height: 3,
    backgroundColor: '#f1f1f1'
  },
  progress: {
    borderRadius: 20,
    height: 3
  }
})