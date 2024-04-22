import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput  } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';




export function CoursesScreen() {


    return (

      <View style={styles.mainContainer}>

              <Text style={styles.greeting}> Hello, </Text>

              <View style={styles.nameContainer}>
                 <Text style={styles.name}> Saulo Leal </Text>
                 <MaterialCommunityIcons style={styles.bell} name="bell-ring-outline" size={40} color="black" />
              </View>
          
          

          <TextInput placeholder='Search course' style={styles.input} />
         
      </View>

            

  

    );}





  const styles = StyleSheet.create({

    mainContainer:{
        margin:20
    },

    greeting:{
        marginLeft:10,
        marginTop: 20
    },



    nameContainer:{

        flexDirection:'row',
        
    },

    name:{
        fontSize: 50,
        fontWeight:'bold',
        textAlign:'left',

    },

    bell:{
        marginTop: 15,
        marginLeft:30
    },

    input:{
        borderColor:'black',
        borderWidth:1,
        marginTop:10,
        borderRadius: 15,
        height: 60,
        padding: 20,
        fontSize:17
    },

    
    


  
  })