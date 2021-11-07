import React, {useContext, useEffect, useState} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import regImg from '../assets/imgs/registerImg.png'
import pokeLogo from '../assets/imgs/pokeLogo.png'
import { Input, Button } from 'react-native-elements';
import Colors from '../utilities/Colors'
import { StoreContext } from '../store/context'
import firebase from 'firebase'
import {styles} from '../styles/AuthStyles'
import { db } from '../firebase/Fire';

export default function RegisterScreen() {

  const {setLogAuth, logAuth, setAUser} = useContext(StoreContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [emailError, setEmailError] = useState('') 
  const [passError, setPassError] = useState('')

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        setAUser(user)
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

  const handleSignup = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
          setEmailError('Please enter a valid email address.'); break;
        case "auth/invalid-email":
          setEmailError('Please enter a valid email address.'); break;
        case "auth/weak-password":
          setPassError('The password is not long enough or too easy to guess.')
        break
        default: 
      }
    })
    firebase.auth().onAuthStateChanged(user => {
      if(user && !logAuth) {
        user.updateProfile({
          displayName: `${firstName} ${lastName}`
        })
        db.collection('users').doc(user.uid).set({
          firstName,
          lastName,
          email,
          password,
          userId: user.uid,
          favorites: [],
          myPokedex: [],
          dateCreated: new Date()
        }).then(res => { 
          setAUser(user)
        })
      }
      else {
        setAUser(null)
      } 
    })
    clearErrors()
  }

  useEffect(() => { 
    clearErrors()
    authListener()
    return() => setLogAuth(true)
  },[]) 

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.authImgContainer}>
          <Image
            source={regImg}
            style={[styles.authImg, {width: '100%'}]}
          />
          <Image 
            source={pokeLogo}
            style={styles.pokeLogo}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Create An Account</Text>
          <Input
            placeholder="First Name"
            errorStyle={{ color: Colors.red }}
            inputContainerStyle={styles.inputContainer}
            onChangeText={(val) => setFirstName(val)}
            autoComplete="name-given"
          />
          <Input
            placeholder="Last Name"
            errorStyle={{ color: Colors.red }}
            inputContainerStyle={styles.inputContainer}
            onChangeText={(val) => setLastName(val)}
            autoComplete="name-family"
          />
          <Input
            placeholder="Email address"
            errorStyle={{ color: Colors.red }}
            errorMessage={emailError}
            inputContainerStyle={styles.inputContainer}
            onChangeText={(val) => setEmail(val.toLowerCase().replace(' ',''))}
            autoCapitalize='none'
            autoComplete="email"
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
            title="Register"
            style={styles.loginBtn}
            buttonStyle={{backgroundColor: Colors.red}} 
            containerStyle={{borderRadius: 40}}
            titleStyle={{fontSize: 20}}
            onPress={handleSignup}
          />
        </View>
        <View style={styles.registerText}>
          <Text>Already have an account? 
            <Text style={{fontWeight: '700'}} onPress={() => setLogAuth(true)}> Login</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
