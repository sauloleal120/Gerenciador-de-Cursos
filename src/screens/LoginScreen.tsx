

import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import AppButton from '../shared/components/AppButton';

export function LoginScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.loginImage} 
            source={require('../../assets/Images/LoginImage.png')}
        />
      </View>

      <View style={styles.inputContainerLogin}>
        <Text style={styles.loginText} >Log in</Text>
        <TextInput placeholder='Email' style={styles.input}/>
        <TextInput placeholder='Password' style={styles.input}/>
      </View>

        <Text style={styles.secondaryText}>Forgot Password?</Text>
     
      <View style={styles.buttonsContainerLogin}>
        <AppButton title='Log in' type='a'/>
        <AppButton title='Sign up' type='b'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },

  loginImage:{
    width: 300,
    height: 300,
  },
  signupImage:{
    width: 250,
    height: 300,
  },

  loginText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3b3a36',
    marginTop: 100,
    marginBottom: 10

  },
  imageContainer:{
    position:'absolute',
    top: 70,
    margin: 10,
    
  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 45,
    borderRadius: 8,
    margin: 10,
    padding: 10
  },
  inputContainerLogin:{
    marginTop: 230,
    alignItems:'center',
    width:'90%',
    marginBottom: 10
  },
  inputContainerSignup:{
    marginTop: 270,
    alignItems:'center',
    width:'90%',
    marginBottom: -10
  },
  secondaryText:{
    color: 'gray',
    fontWeight:'bold'
  },
  buttonsContainerLogin:{
    width:'90%',
    marginTop:20,
    alignItems:'center'
  },
  buttonsContainerSignup:{
    width:'90%',
    marginTop:20,
    alignItems:'center'
  },

})