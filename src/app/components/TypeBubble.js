import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function TypeBubble(props) {

  const {name, width="50%"} = props

  return (
    <View style={[styles.typeBubble, {width}]}>
      <Text style={styles.type}>{name}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({ 
  typeBubble: {
    paddingHorizontal: 2,
    paddingVertical: 4,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6
  },
  type: {
    color: '#fff',
    opacity: 0.85,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'capitalize'
  }
})