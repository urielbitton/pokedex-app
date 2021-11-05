import React, {useContext, useState, useEffect} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Screen from '../components/Screen'
import { styles } from '../styles/LoginScreen'
import authImg from '../assets/imgs/pokeAuth.png'
import pokeLogo from '../assets/imgs/pokeLogo.png'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../utilities/Colors'
import { StoreContext } from '../store/context'
import firebase from 'firebase'

export default function LoginScreen() {

  const {setAUser, setLogAuth} = useContext(StoreContext)
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [emailError, setEmailError] = useState('') 
  const [passError, setPassError] = useState('')
  const [isLogging, setIsLogging] = useState(false)

  const handleLogin = () => { 
    setIsLogging(true)
    clearErrors()
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      authListener()
    })
    .catch(err => {
      setIsLogging(false)
      switch(err.code) {
        case "auth/invalid-email":
            return setEmailError('Make sure to enter a valid email.')
        case "auth/user/disabled":
            return setEmailError('This user is disabled.')
        case "auth/user-not-found":
            return setEmailError('This user does not exist.')
        case "auth/wrong-password":
          setPassError('Password is incorrect')
        break
        default:
      }  
    }) 
  }
  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        setAUser(user)
        clearInputs()
      }
      else {
        setAUser(null)
      }
    })
  }
  const clearErrors = () => {
    setEmailError('')
    setPassError('')
  }
  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  useEffect(() => { 
    clearInputs()
    authListener() 
    return () => setIsLogging(false)
  },[])

  return (
    <ScrollView>
      <Screen showPokeImg>
        <View style={styles.container}>
          <View style={styles.authImgContainer}>
            <Image
              source={authImg}
              style={styles.authImg}
            />
            <Image 
              source={pokeLogo}
              style={styles.pokeLogo}
            />
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Login to your pokedex account</Text>
            <Input
              placeholder="Email address"
              errorStyle={{ color: Colors.red }}
              errorMessage={emailError}
              inputContainerStyle={styles.inputContainer}
              onChangeText={(val) => setEmail(val.toLowerCase().replace(' ',''))}
              autoCapitalize='none'
            />
            <Input 
              placeholder="Password" 
              secureTextEntry={true} 
              inputContainerStyle={[styles.inputContainer,{top:-3}]}
              onChangeText={(val) => setPassword(val)}
              errorMessage={passError}
              autoCapitalize='none'
            />
            <View style={styles.forgotRow}>
              <Text style={{opacity: 0}}>Remember Me</Text>
              <Text style={styles.forgotText}>Forgot your password?</Text>
            </View>
          </View>
          <View style={styles.loginBtnContainer}> 
            <Button
              title="Log In"
              iconPosition="right"
              style={styles.loginBtn}
              buttonStyle={{backgroundColor: Colors.red}} 
              containerStyle={{borderRadius: 40}}
              titleStyle={{fontSize: 20}}
              onPress={() => handleLogin()}
              icon={
                <Icon
                  name="arrow-right"
                  size={15}
                  color="white"
                  style={{marginLeft: 10}}
                />
              }
            />
          </View>
          <View style={styles.registerText}>
            <Text>Don't have an account? <Text style={{fontWeight: '700'}} onPress={() => setLogAuth(false)}>Register</Text></Text>
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
}
