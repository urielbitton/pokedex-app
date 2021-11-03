import { StyleSheet } from 'react-native'; 

export const cardStyles = StyleSheet.create({ 
  card: { 
    padding: 15,
    width: '44%',
    height: 60,
    borderRadius: 15,
    shadowOffset: {width: -2, height: 11},
    shadowOpacity: 0.4,
    shadowRadius: 13,
    elevation:6,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginVertical: 8,
    paddingHorizontal: 20,
  },
  titleCont: {
    width: '100%'
  },
  pokeball: {
    zIndex: 100,
    position: 'absolute',
    top: -18,
    right: -15,
    width: 80,
    height: 80,
    borderRadius: 10,
    opacity: 0.25
  },
  circle: {
    position: 'absolute',
    top: -20,
    left: -10,
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#fff',
    opacity: 0.15
  },
  title: {
    color: '#fff',
    fontSize: 16
  }
})