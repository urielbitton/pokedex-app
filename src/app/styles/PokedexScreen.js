import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants'

export const styles = StyleSheet.create({ 
  header: {
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight
  },  
  pokedexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 20
  }
})