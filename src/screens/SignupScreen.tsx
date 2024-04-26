import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import AppButton from '../shared/components/AppButton';
import {useForm, Controller } from 'react-hook-form'

import SignupScreenImage from '../../assets/Images/SignupScreenImage.svg'


type FormData = {

  name: string,
  email: string,
  password: string

}


export function SignupScreen({route, navigation}) {

  const { usuario, setUsuario } = route.params;

  const checkLogin = (user)=>{

    const newUsers = usuario.filter( (x)=> x.name === user )
    if (newUsers.length == 1) return true

      
    else false
  }

  function addUser(x, y, z){

  

    //setUsuario([ {name: name, email: email, password: password}])
   
    
      console.log(x) 
      console.log(y) 
      console.log(z) 
    }

  

  const {control, handleSubmit, formState: {errors} } = useForm<FormData>()

  //useEffect(()=> alert( errors?.email?.message ), [ errors?.email ])
  //useEffect(()=> alert( errors?.password?.message ), [ errors?.password ])
  
  const onSubmit = (data: FormData) => addUser(data?.name, data?.email, data?.password) 



    return(
      <View style={styles.mainContainer}>
        
        <View style={styles.imageContainer}>
        <SignupScreenImage width={350} height={350} />

  
        </View>
       
  
        <View style={styles.inputContainerSignup}>
     

          <Text style={styles.primaryText} > Sign up </Text>
          <Text style={styles.secondaryText}>Create your account</Text>
          <Controller
                control={control}
                name={'name'}
                rules={{
                  required: 'e-mail obrigatório'
                }}
                render={({ field: {value, onChange} }) =>(
                  <TextInput 
                    placeholder='Name' 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange}
                    autoCapitalize='none'
                     />

                )}
        />
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
                  required: 'e-mail obrigatório'
                }}
                render={({ field: {value, onChange} }) =>(
                  <TextInput 
                    placeholder='Password' 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange}
                    autoCapitalize='none'
                     />

                )}
        />
        </View>
  
       
        <View style={styles.buttonsContainerSignup}>
          <AppButton onPress={handleSubmit(onSubmit)} title='Sign up' type='a' />
          <AppButton onPress={()=>console.log(usuario)} title='Log in' type='b'/>
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
  
   
    signupImage:{
      width: 250,
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

    inputContainerSignup:{
      marginTop: 270,
      alignItems:'center',
      width:'90%',
      marginBottom: -10
    },
    secondaryText:{
      color: 'gray',
      fontWeight:'bold'
    },

    buttonsContainerSignup:{
      width:'90%',
      marginTop:20,
      alignItems:'center'
    },
  
  })