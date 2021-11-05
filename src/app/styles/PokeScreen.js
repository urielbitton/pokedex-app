import { StyleSheet, Dimensions  } from 'react-native'; 
import Constants from 'expo-constants'
import Colors from '../utilities/Colors';

let ScreenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    zIndex: 100,
    // paddingTop: Constants.statusBarHeight
  },
  sqBlob: {
    position: 'absolute',
    top: -85,
    left: -80,
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: [{ rotate: '-15deg'}],
    borderRadius: 50
  },  
  toolbar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    zIndex: 100,
    paddingHorizontal: 20
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  goBackContainer: {
    width: 40,
    height: 40,
    zIndex: 100
  },
  pokeName: {
    fontSize: 33,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
    textTransform: 'capitalize'
  },  
  number: {
    fontSize: 18,
    color: '#eee',
    fontWeight: '700'
  },
  pokeImgsContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeImg: {
    width: 210,
    height: 190,
    zIndex: 10,
    top: 33
  },
  pokeballContainer: {
    position: 'absolute',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    flexDirection: 'row'
  },  
  pokeballImg: {
    width: 200,
    height: 200,
    opacity: 0.2,
    top: 30
  },
  pokeInfo: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  activeTab: {
    borderBottomColor: Colors.blue,
    borderBottomWidth: 3,
    borderRadius: 0,
    paddingBottom: 20
  },
  tabTitle: {
    color: '#bbb',
    borderRadius: 0
  },
  activeTitle: {
    color: '#000',
    fontWeight: '600'
  },
  tabContent: {
    width: '100%',
    paddingTop: 20
  },
  tabsNav: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 0
  },
  tabSection: {
    flexDirection: 'row'
  },
  tabColumnLabel: {
    width: 130
  },
  columnText: {
    color: '#555',
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: 10
  },
  sectionTitle: {
    fontSize:17,
    fontWeight:'700',
    marginVertical:20,
    flexBasis: '100%'
  }, 
  columnLabel: {
    fontWeight: '700',
    color: "#aaa",
    marginBottom: 10
  },
  abilities: {
    flexDirection: 'row',
  },
  abilityText: {
    marginRight: 5,
    textTransform: 'capitalize'
  },
  evolutionRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f5f5f5'
  },
  evolveContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  evolveName: {
    textTransform: 'capitalize',
    marginTop: 5,
    color: '#333'
  },
  arrowContainer: {
    alignItems: 'center'
  },
  levelText: {
    fontWeight: '700',
    fontSize: 13,
    color: '#444'
  },
  movesFlex: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  movesContainer: {
    paddingHorizontal: 7,
    paddingVertical: 2,
    elevation: 3,
    marginBottom: 10,
    borderRadius: 5,
    marginRight: 7
  },
  movesText: {
    fontWeight: '700',
    color: '#fff',
    textTransform: 'capitalize'
  }
})