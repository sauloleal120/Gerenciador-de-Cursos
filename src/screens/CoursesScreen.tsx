import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList  } from 'react-native';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export function CoursesScreen() {

    const [categories, setCategories] = useState([

        {key:1, name:'#CSS'},
        {key:2, name:'#UX'},
        {key:3, name:'#Swift'},
        {key:4, name:'#UI'},

    ])

    const [courses, setCourses] = useState([
        
            {key:1, name:'UI', duration:'3h30 min', brief:'Advanved mobile interface design'},
            {key:2, name:'HTML', duration: '3h30 min', brief: 'Advanced web applications'},
            {key:3, name:'UI Advanced', duration: '3h30min', brief:'Advanved mobile interface design'},
            {key:4, name:'Swift', duration: '3h30min', brief:'Advanved iOS apps'},
            {key:5, name:'Scrum', duration: '3h30min', brief:'Advanved project organization course'},
            {key:6, name:'Javascript', duration:'3h30 min', brief:'Programming language'},
            {key:7, name:'React Native', duration:'3h30 min', brief: 'Advanced React Native course'},
    ])


    return (

      <View style={styles.mainContainer}>

              <Text style={styles.greeting}> Hello, </Text>

              <View style={styles.nameContainer}>
                 <Text style={styles.name}> Saulo Leal </Text>
                 <MaterialCommunityIcons style={styles.bell} name="bell-ring-outline" size={40} color="black" />
              </View>

             <View style={styles.inputContainer}>

                <TextInput placeholder='Search course' style={styles.input} />
                <AntDesign name="search1" size={30} color="black" style={styles.lupa} />

             </View>
                
             <View style={styles.categoryContainer}>
                 <Text style={styles.category}> Category: </Text>
                 <FlatList
                 data={categories}
                 horizontal={true}
                 renderItem={({item})=><Text style={styles.categoryItems}> {item.name} </Text>}
                 />
             </View>

             <View style={styles.coursesListContainer}>

                <FlatList
                data={courses}
                renderItem={({item})=> <CoursesListComponent data={item} /> }
                
                />

             </View>
         
      </View>

            

  

    );}


    function CoursesListComponent ({data}){

        return(

            <View style={styles.coursesCardContainer}>
                
                <Text style={styles.coursesDuration}> {data.duration} </Text>
                <Text style={styles.coursesTitle}> {data.name} </Text>
                <Text style={styles.coursesBrief}> {data.brief} </Text>

            </View>
        )

    }




  const styles = StyleSheet.create({

    mainContainer:{
        margin:20
    },

    greeting:{
        marginLeft:10,
        marginTop: 20,
        fontSize: 20,
    },

    category:{

        fontSize:20,
        marginTop: 10,
        marginBottom:10
    },

    categoryItems:{
        fontSize:15,
        marginTop:10,
        margin:10,
        backgroundColor:'#65aaea',
        borderRadius: 20,
        padding: 5,
        color: '#fff'
    },

    categoryContainer:{
        flexDirection:'row'
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
        borderColor:'gray',
        borderWidth:1,
        marginTop:10,
        borderRadius: 15,
        height: 60,
        padding: 20,
        fontSize:17,
        width:'100%'
    },

    lupa:{
        position:'absolute',
        marginTop:25,
        marginLeft: '85%'
    },

    inputContainer:{
        flexDirection:'row'
    },

    coursesCardContainer:{
        borderColor:'gray',
        borderRadius:15,
        borderWidth:1,
        margin: 10,
        height:100,
        justifyContent:'center',
        padding: 10

    },
    coursesTitle:{

        fontSize:30
    },
    coursesDuration:{
        fontSize: 20,
        color:'#61a496',
        marginTop:10
    },

    coursesBrief:{

        fontSize:15,
        marginBottom:10
    },
    
    coursesListContainer:{
        
        height: 480

    },


  
  })