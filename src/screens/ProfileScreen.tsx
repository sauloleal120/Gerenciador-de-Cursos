import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function ProfileScreen() {
    const navigation = useNavigation();

    return (

      

  <View style={styles.mainContainer}>
    <Text style={styles.title}>Profile</Text>
     

      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} 
         source={require('../../assets/Images/ProfileImage.png')}
        />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.primaryText}> Your Courses </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.primaryText}> Saved </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.secondaryText}>Log out</Text>
            </TouchableOpacity>


          </View>

      </View>

  </View>
    

  

     
    
    );
  }

  const styles = StyleSheet.create({

    mainContainer:{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      width:'100%',
    },
  
    profileImage:{
      width: 200,
      height: 200,
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