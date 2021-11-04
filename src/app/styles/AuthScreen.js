import { StyleSheet } from 'react-native'; 
import Colors from '../utilities/Colors';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({ 
  container: {  
    flex: 1,
    height: '100%', 
    paddingTop: Constants.statusBarHeight,
  },
  authImgContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  authImg: {
    width: '90%',
    height: 200
  },
  pokeLogo: {
    marginTop: 10,
    width: '90%',
    height: 130
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: '#333'
  },
  subtitle: {
    fontSize: 15,
    color: '#999',
    marginBottom: 30
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    padding: 10,
    elevation: 4,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: '100%'
  },
  forgotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -10
  },
  forgotText: {
    fontSize: 13,
    color: '#ccc',
    fontWeight: '700'
  },
  loginBtnContainer: {
    width: '100%',
    paddingHorizontal: 35,
    marginTop: 30
  },
  loginBtn: {
    paddingVertical: 20,
  },
  registerText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})