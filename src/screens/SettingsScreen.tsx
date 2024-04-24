import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Switch } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';




export function SettingsScreen() {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  

    return (

      

  <View style={styles.mainContainer}>
    <Text style={styles.title}>Settings</Text>
     

      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} 
         source={require('../../assets/Images/SettingsImage.png')}
        />
          <View style={styles.buttonContainer}>
            
            <View style={styles.button}>
            <MaterialCommunityIcons name="bell-circle" size={30} color="dodgerblue" />
              <Text style={styles.primaryText}> Notifications </Text>
              <Switch style={styles.switch}
                trackColor={{false: '#767577', true: '#CDDCDF'}}
                thumbColor={isEnabled ? '#3D9AD0' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
               />
            </View>

            <View style={styles.secondaryTextContainer}>
            <Text style={styles.secondaryText}> Account information </Text>
            </View>
       

                <View style={styles.button}>
                    <MaterialCommunityIcons name="account-circle" size={30} color="dodgerblue" />
                    <Text style={styles.primaryText}> Name </Text>
               </View>

               <View style={styles.button}>
                    <MaterialCommunityIcons name="email" size={30} color="dodgerblue" />
                    <Text style={styles.primaryText}> Email </Text>
               </View>

               <View style={styles.button}>
                    <MaterialCommunityIcons name="account-key" size={30} color="dodgerblue" />
                    <Text style={styles.primaryText}> Password </Text>
               </View>




          </View>
           
      </View>

  </View>
    

    );}





  const styles = StyleSheet.create({

    mainContainer:{ 
      flex: 1, 
      alignItems: 'center', 
       
  
    },
    
    flatlistContainer:{
       
        width: '100%'

    },

    profileImage:{
      width: 200,
      height: 200,
    },
  
    imageContainer:{
      position:'absolute',
      top: 90,
  
  
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
      color: 'black',
      fontWeight:'bold',
      fontSize: 18
      
    },

    secondaryTextContainer:{
        position:'relative',
        right: 80,
        margin: 5
    },
  
    button:{
      borderRadius: 15,
      borderColor: 'gray',
      borderWidth:1,
      alignItems:'center',
      margin: 10,
      height: 80,
      width:'150%',
      flexDirection:'row',
      paddingLeft:15
      
  },
  
  buttonContainer:{
    alignItems:'center',
    textAlign:'left',
    
    
  },
  switch:{
    position:'absolute',
    left: 270 
  },


  
  })