import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Screen from '../components/Screen'
import { styles } from '../styles/AuthScreen'
import authImg from '../assets/imgs/pokeAuth.png'
import pokeLogo from '../assets/imgs/pokeLogo.png'
import { Input, Button  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../utilities/Colors'

export default function AuthScreen() {
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
              inputContainerStyle={styles.inputContainer}
            />
            <Input 
              placeholder="Password" 
              secureTextEntry={true} 
              inputContainerStyle={[styles.inputContainer,{top:-10}]}
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
              containerStyle={{borderRadius: 40}}
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
            <Text>Don't have an account? <Text style={{fontWeight: '700'}}>Register</Text></Text>
          </View>
        </View>
      </Screen>
    </ScrollView>
  )
}
