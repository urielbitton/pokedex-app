import React, {useContext, useState, useEffect} from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Screen from '../components/Screen'
import regImg from '../assets/imgs/registerImg.png'
import pokeLogo from '../assets/imgs/pokeLogo.png'
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../utilities/Colors'
import { StoreContext } from '../store/context'
import firebase from 'firebase'
import {styles} from '../styles/LoginScreen'

export default function RegisterScreen() {

  const {setLogAuth} = useContext(StoreContext)
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [emailError, setEmailError] = useState('') 
  const [passError, setPassError] = useState('')

  return (
    <Screen showPokeImg>
      <View style={styles.container}>
        <View style={styles.authImgContainer}>
          <Image
            source={regImg}
            style={styles.authImg}
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
            title="Register"
            style={styles.loginBtn}
            buttonStyle={{backgroundColor: Colors.red}} 
            containerStyle={{borderRadius: 40}}
            titleStyle={{fontSize: 20}}
            onPress={() => handleLogin()}
          />
        </View>
        <View style={styles.registerText}>
          <Text>Already have an account? <Text style={{fontWeight: '700'}} onPress={() => setLogAuth(true)}>Login</Text></Text>
        </View>
      </View>
    </Screen>
  )
}
