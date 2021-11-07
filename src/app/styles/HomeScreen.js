import { StyleSheet } from 'react-native'; 
import Colors from '../utilities/Colors';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({ 
  container: {  
    padding: 10,
    backgroundColor: '#fff',
    paddingBottom: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingTop: 30
  },
  greetText: {
    color: '#777',
    fontSize: 16,
    paddingLeft: 5
  },
  inputContainer: {
    display: 'flex',
    width: '95%',
    backgroundColor: '#eee',
    borderRadius: 40,
    paddingLeft: 15,
    marginTop: 0,
    height: 50,
    borderColor: 'transparent'
  },
  input: {
    fontSize: 14,
    borderColor: 'transparent'
  },
  cardContainer: {
    width: '100%',
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-around', 
    flexDirection: 'row', 
    flexWrap: "wrap",
  },
  newsContainer: {
    width: '100%',
    padding: 30
  },
  titleBar: {
    marginTop: 40,
    marginBottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  newsTitle: {
    fontSize: 24,
    fontWeight: '700'
  },
  viewAll: {
    fontSize: 13,
    color: Colors.blue
  },
  newsStoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  newsStoryFlex: {
    marginBottom: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1'
  },
  storyTextContainer: {
    width: '55%'
  },
  storyTitle: {
    fontWeight: '700',
    color: '#333'
  },
  storyDate: {
    color: '#777',
    fontSize: 12,
    marginTop: 4
  },  
  newsImg: {
    width: 130,
    height: 80,
    borderRadius: 20
  },
  myPokemon: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  myPokemonTitle: {
    fontSize: 24,
    fontWeight: '700'
  },
  myCardsContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-around', 
    flexDirection: 'row', 
    flexWrap: "wrap"
  }
})