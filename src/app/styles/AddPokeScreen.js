import { StyleSheet } from 'react-native'; 
import Colors from '../utilities/Colors'

export const styles = StyleSheet.create({ 
  container: {  
    flex: 1,
    paddingTop: 20
  },
  header: {
    paddingBottom: 20,
    paddingTop: 10,
    alignItems: 'center'
  },
  pokeballContainer: {
    alignItems: 'center'
  },
  pokeballColor: {
    width: 90,
    height: 90,
    opacity: 1
  },
  pageTitle: {
    fontSize: 35,
    fontWeight: '700'
  },
  pageSubtitle: {
    color: '#aaa'
  },
  formContainer: {
    alignItems: 'center',
    paddingHorizontal: 20
  },
  inputContainers: {
    borderBottomWidth: 0
  },
  inputs: {
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2
  },
  pickerContainer: {
    width: '95%',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 40,
    elevation: 2,
    paddingHorizontal: 20,
  },
  inputPicker: {
    width: '100%',
    color: '#777'
  },
  btnContainer: {
    marginBottom: 30,
    width: '100%',
    height: 40
  },
  btnStyle: {
    borderRadius: 10,
    height: 40,
    backgroundColor: Colors.red
  },
  btnGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})