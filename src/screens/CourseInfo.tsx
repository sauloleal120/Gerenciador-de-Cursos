import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Illustration from '../../assets/Images/Illustration.svg'
import { SafeAreaView } from 'react-native-safe-area-context';


export function CourseInfo({route}) {

    const navigation = useNavigation();

    const {name, about, duration} = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>

        <TouchableOpacity style={styles.backButton} onPress={ ()=> navigation.goBack() } >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="#3b3a36" />
        </TouchableOpacity>


       <View style={styles.titleContainer}>
          <Text style={styles.title}> { name } </Text>
       </View>

       <View style={styles.imageContainer}> 
          <Illustration width={350} height={350} />
       </View>

        <View style={styles.aboutContainer}>
            <Text style={styles.about}> About the course </Text>
        </View>

        <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutText}> {about} </Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={styles.about}> Duration </Text>
        </View>

        <View style={styles.aboutTextContainer}>
            <Text style={styles.aboutText}> {duration} </Text>
        </View>



    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    backButton: {

        borderWidth:1,
        borderColor:'gray',
        height: 50,
        width: 50,
        borderRadius: 25,
        position:'absolute',
        left:25,
        top: 50,
        justifyContent:'center',
        alignItems:'center',
        
      },

      mainContainer:{
        flex:1,
      
        
      },
      title:{
        fontSize: 30,
        fontWeight:'bold',
     
      },

      titleContainer:{
        alignItems:'center',
        justifyContent:'center',
        height:100
      },

      imageContainer:{
        marginTop:-50
        
      },

      aboutContainer:{

        textAlign:'left',
        marginLeft: 10
      },

      about:{

        fontSize:30,
        fontWeight:'bold'

      },

      aboutTextContainer:{
        margin: 10,
        marginLeft:20

      },

      aboutText:{
        fontSize:17
      },

      backButton: {

        borderWidth:1,
        borderColor:'gray',
        height: 50,
        width: 50,
        borderRadius: 25,
        position:'absolute',
        left:25,
        top: 50,
        justifyContent:'center',
        alignItems:'center',
        
      },


})