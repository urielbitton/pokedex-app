import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  homecont: {
    flex: 1,
    width: '100%'
  },
  overlayContainer:  {
    paddingHorizontal: 30, 
    paddingVertical: 40, 
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444',
    marginBottom: 30
  },
  logoutImg: {
    width: 170, 
    height: 100,
    marginBottom: 30
  },
  btnContainer: {
    paddingHorizontal: 20,
    width: 150
  }
})