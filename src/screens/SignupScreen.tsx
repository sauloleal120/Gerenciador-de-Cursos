import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import AppButton from '../shared/components/AppButton';

export function SignupScreen() {

    return(
      <View style={styles.mainContainer}>
        
        <View style={styles.imageContainer}>
          <Image style={styles.signupImage} 
         source={require('../../assets/Images/SignupImage.png')}
        />
  
        </View>
       
  
        <View style={styles.inputContainerSignup}>
          <Text style={styles.primaryText} >Sign up</Text>
          <Text style={styles.secondaryText}>Create your account</Text>
          <TextInput placeholder='Name' style={styles.input}/>
          <TextInput placeholder='Email' style={styles.input}/>
          <TextInput placeholder='Password' style={styles.input}/>
        </View>
  
       
        <View style={styles.buttonsContainerSignup}>
          <AppButton title='Sign up' type='a'/>
          <AppButton title='Log in' type='b'/>
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
  
   
    signupImage:{
      width: 250,
      height: 300,
    },
  
    primaryText:{
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

    buttonsContainerSignup:{
      width:'90%',
      marginTop:20,
      alignItems:'center'
    },
  
  })