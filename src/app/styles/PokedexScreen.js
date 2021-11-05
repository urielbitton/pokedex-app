import { StyleSheet } from 'react-native'; 
import Colors from '../utilities/Colors';

export const styles = StyleSheet.create({ 
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },  
  tools: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 10
  },
  toolsIcon: {
    marginLeft: 15,
    marginBottom: 10
  },  
  flatListContainer: {
    paddingBottom: 170
  },
  pokedexContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 20
  },
  speedDialBtn: {
    backgroundColor: Colors.red
  }
})