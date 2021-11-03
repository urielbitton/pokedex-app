import { StyleSheet } from 'react-native'; 
import Colors from '../utilities/Colors'

export const styles = StyleSheet.create({ 
  pokeCard: { 
    height: 120,
    borderRadius: 15,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal: 0,
    marginVertical: 8,
    backgroundColor: Colors.color,
    flexBasis: '48%'
  },
  pokeCardFlex: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: '100%'
  },
  infoContainer: {
    width: '100%',
    zIndex: 10
  },
  name: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'capitalize'
  },
  imgContainer: {
    position: 'absolute',
    bottom: 15,
    right: 15,
  },  
  pokeImg: {
    width: 70,
    height: 70
  },
  pokeballImg: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: 100,
    zIndex: 0,
    opacity: 0.13,
    top: 10
  }
})