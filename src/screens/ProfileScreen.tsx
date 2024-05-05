import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AvatarImage from '../../assets/Images/Avatar.svg'

export function ProfileScreen({route}) {
    const navigation = useNavigation();

    

    return (

      

  <SafeAreaView style={styles.mainContainer}>
    <Text style={styles.title}>Profile</Text>
     

      <View style={styles.imageContainer}>
      <AvatarImage width={200} height={200} />
        
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('CourseInfo')} >
              <Text style={styles.primaryText}> Your Courses </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.primaryText}> Saved </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')} >
              <Text style={styles.secondaryText}>Log out</Text>
            </TouchableOpacity>


          </View>

      </View>

  </SafeAreaView>
    

  

     
    
    );
  }

  const styles = StyleSheet.create({

    mainContainer:{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      width:'100%',
    },
  

    imageContainer:{
      position:'absolute',
      top: 130,
  
  
    },
   
    title:{
      fontWeight: 'bold',
      fontSize: 30,
      color: '#3b3a36',
      position:'absolute',
      top:40,
      marginBottom: 10
      
    },
    mainTextContainer:{
      alignItems: 'center', 
      justifyContent: 'center', 
      position:'absolute',
      
      top: 45
    },
    primaryText:{
      fontWeight: 'bold',
      fontSize: 25,
      color: '#3b3a36',
    },
  
    secondaryText:{
      color: 'gray',
      fontWeight:'bold'
    },
  
    button:{
      borderRadius: 15,
      borderColor: 'gray',
      borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      margin: 10,
      height: 80,
      width:'170%'
  },
  
  buttonContainer:{
    alignItems:'center',
    marginTop:20
    
  }
  
  })