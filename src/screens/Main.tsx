

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileScreen } from '../../src/screens/ProfileScreen';
import { SettingsScreen } from '../../src/screens/SettingsScreen';
import { CoursesScreen } from '../../src/screens/CoursesScreen';

import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Tab = createBottomTabNavigator();




  


export function Main() {
    
  return (

   
    <Tab.Navigator>
      <Tab.Screen 
      
      options={{
        headerShown:false,
        
        tabBarIcon: ({color, size}) => {
          return <Feather name="book" color={'#e3562a'} size={size}/>
        }
      }} 
      name="Courses" 
      component={CoursesScreen} 
      />

      <Tab.Screen 
       options={{
        headerShown:false,
        tabBarIcon: ({color, size}) => {
          return <Feather name="user" color={'#e3562a'} size={size}/>
        }
      }} 
      name="Profile" 
      component={ProfileScreen} 
      />

      <Tab.Screen 
       options={{
        headerShown:false,
        tabBarIcon: ({color, size}) => {
          return <Feather name="settings" color={'#e3562a'} size={size}/>
        }
      }} 
      name="Settings" 
      component={SettingsScreen} 
      />
      

    </Tab.Navigator>
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