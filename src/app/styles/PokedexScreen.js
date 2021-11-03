import { StyleSheet } from 'react-native'; 
import Constants from 'expo-constants'

export const styles = StyleSheet.create({ 
  header: {
    paddingHorizontal: 20,
    paddingTop: Constants.statusBarHeight
  },  
  pokedexContainer: {
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    flexWrap: "wrap",
    padding: 20,
    flex: 1
  }
})