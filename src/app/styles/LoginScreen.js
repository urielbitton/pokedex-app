import { StyleSheet } from 'react-native'; 
import Colors from '../utilities/Colors';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({ 
  container: {  
    flex: 1,
    height: '100%', 
    // paddingTop: Constants.statusBarHeight,
    paddingBottom: 40,
    backgroundColor: 'rgba(200,200,200,0.22)'
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
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 0,
    padding: 10,
    elevation: 3,
    paddingHorizontal: 20,
    borderRadius: 40,
    width: '100%'
  },
  forgotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: -5,
    width: '100%'
  },
  forgotText: {
    fontSize: 13,
    color: '#ccc',
    fontWeight: '700'
  },
  loginBtnContainer: {
    width: '100%',
    paddingHorizontal: 35,
    marginTop: 20
  },
  loginBtn: {
    paddingVertical: 20
  },
  registerText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})