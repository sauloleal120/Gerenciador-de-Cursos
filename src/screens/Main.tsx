

import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function ProfileScreen() {
    
    return (

      

  <View style={styles.mainContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>

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
              <Text style={styles.secondaryText}>Log out</Text>

            </View>

        </View>

  </View>
    

  

     
    
    );
  }

function SettingsScreen() {
    
    return (
  
     <SafeAreaView>
    

      <Text> Settings Screen </Text>
      
     </SafeAreaView>
    
    );
  }

  function CoursesScreen() {
    
    return (
  
     <SafeAreaView>
    

      <Text> Courses Screen </Text>
      
     </SafeAreaView>
    
    );
  }


export function Main() {
    
  return (

   
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="Courses" component={CoursesScreen} />
      <Tab.Screen options={{headerShown:false}} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={{headerShown:false}} name="Settings" component={SettingsScreen} />
      

    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({

  mainContainer:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },

  profileImage:{
    width: 300,
    height: 300,
  },
 
  primaryText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3b3a36',
    position:'absolute',
    top:0,
    marginBottom: 10

  },
  title:{
    fontWeight: 'bold',
    fontSize: 30,
    color: '#3b3a36',
    position:'absolute',
    top:0,
    marginBottom: 10

  },
  mainTextContainer:{
    alignItems: 'center', 
    justifyContent: 'center', 
    position:'absolute',
    
    top: 45
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
 
  secondaryText:{
    color: 'gray',
    fontWeight:'bold'
  },
  buttonsContainerLogin:{
    width:'90%',
    marginTop:20,
    alignItems:'center'
  },
  button:{
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth:1,
  
    alignItems:'center',
 
    textAlign:'center',
    width: '100%',
    margin: 10,
   height: 100,
},

buttonContainer:{
  alignItems:'center',


}

})