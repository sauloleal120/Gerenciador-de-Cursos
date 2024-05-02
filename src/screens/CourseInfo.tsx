import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function CourseInfo({route}) {

    const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity style={styles.backButton} onPress={ ()=> navigation.navigate('LoginScreen') } >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="#3b3a36" />
        </TouchableOpacity>
    </View>
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
        
      }


})