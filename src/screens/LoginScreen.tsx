import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../shared/components/AppButton';
import {useForm, Controller } from 'react-hook-form'

import LoginScreenImage from '../../assets/Images/primeira_imagem.svg'


type FormData = {

  email: string,
  password: string

}

export default function LoginScreen({route}) {

  //  const [users, setUsers] = useState([

  //    {key:1, name:'admin', password:'admin'},
    
  //    ])

  const { usuario } = route.params;


   const checkLogin = (user, password)=>{
     
    const navigation = useNavigation();

     const newUsers = usuario.filter( (x)=> x.name === user )
     if (newUsers[0].password == password) navigation.navigate('Main')

   }


const {control, handleSubmit, formState: {errors} } = useForm<FormData>()

//useEffect(()=> alert( errors?.email?.message ), [ errors?.email ])
//useEffect(()=> alert( errors?.password?.message ), [ errors?.password ])

const onSubmit = (data: FormData) => checkLogin(data?.email, data?.password) 


  return (




    <View style={styles.mainContainer}>

      <View style={styles.imageContainer}> 
          <LoginScreenImage width={350} height={350} />
      </View>

      <View style={styles.inputContainerLogin}>
        <TouchableOpacity onPress={()=>navigation.navigate('Main')} >
        <Text style={styles.primaryText} > Log in </Text>
        </TouchableOpacity>

        <Controller
                control={control}
                name={'email'}
                rules={{
                  required: 'e-mail obrigatório'
                }}
                render={({ field: {value, onChange} }) =>(
                  <TextInput 
                    placeholder='Email' 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange}
                    autoCapitalize='none'
                     />

                )}
        />

        <Controller
                control={control}
                name={'password'}
                rules={{
                  required: 'senha obrigatória'
                }}
                render={({ field: {value, onChange} }) =>(
                  <TextInput 
                    placeholder='Password' 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange}
                    autoCapitalize='none' 
                   // secureTextEntry
                    />
                    
                )}
        />


      </View>

        <Text style={styles.secondaryText}>Forgot Password?</Text>
     
      <View style={styles.buttonsContainerLogin}>
        <AppButton onPress={handleSubmit(onSubmit)} title='Log in' type='a'/>
        <AppButton onPress={handleSubmit(onSubmit)} title='Sign up' type='b'/>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({

  mainContainer:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },

  loginImage:{
    width: 300,
    height: 300,
  },
 
  primaryText:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3b3a36',
    marginTop: 100,
    marginBottom: 10

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




})