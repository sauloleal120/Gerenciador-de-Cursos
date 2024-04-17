import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function AppButton({title='string', type='string'}) {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
    style={ type=='b'? styles.button2: styles.button } 
    onPress={ title=='Sign up'? ()=>navigation.navigate('signupScreen'): null}>

      
      <Text style={ type=='b'? styles.text2: styles.text }>{title}</Text>
       
    </TouchableOpacity>
  
  )



}

const styles = StyleSheet.create({


    button:{
        backgroundColor:'#e3562a',
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center',
        padding: 15,
        width: '100%',
       
    },
    text:{
        fontWeight:'bold',
        color:'#fff'
    },

    button2:{
     
      borderRadius: 8,
      justifyContent:'center',
      alignItems:'center',
      padding: 15,
      width: '100%',
  
  },
  text2:{
      fontWeight:'bold',
      color:'gray'
  },
})