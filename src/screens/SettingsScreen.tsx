import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, TextComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenStack } from 'react-native-screens';


export function SettingsScreen() {
    const navigation = useNavigation();

    return (
  
     <View style={styles.textContainer}>
    

      <Text style={styles.text}> Settings Screen </Text>
      
     </View>
    
    );
  }

const styles = StyleSheet.create({

    textContainer:{
       
        alignItems:'center',
        
    },
    text:{
        position:'absolute',
        top: 250,
    }

})