import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, TouchableOpacity, SafeAreaView  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useForm, Controller} from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';


type FormData = {

    searchCourse: string
}

     


export function CoursesScreen({route}) {


    const {control, handleSubmit} = useForm<FormData>()

    const {usuarioAtual} = route.params;

    const onSubmit = (data: FormData) => {setInput(data.searchCourse)}
    
    const [input, setInput] = useState();

    const [categories, setCategories] = useState([

        {key:1, name:'#CSS'},
        {key:2, name:'#UX'},
        {key:3, name:'#Swift'},
        {key:4, name:'#UI'},

    ])

    const [courses, setCourses] = useState([
        
            {key:1, name:'UI', duration:'3h30 min', brief:'Advanved mobile interface design', about:'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces'},
            {key:2, name:'HTML', duration: '3h30 min', brief: 'Advanced web applications', about:'Completed HTML Mastery Course at Tech Academy, Anytown, USA (May 2024). Proficient in HTML5, basic CSS, and responsive web design. Developed projects including a personal portfolio website and recipe page.'},
            {key:3, name:'UI Advanced', duration: '3h30min', brief:'Advanved mobile interface design', about:'Proficient in advanced UI design concepts including interaction design, information architecture, and usability testing. Skilled in prototyping tools such as Adobe XD and Figma. Developed complex projects emphasizing user-centered design principles and accessibility standards.'},
            {key:4, name:'Swift', duration: '3h30min', brief:'Advanved iOS apps', about:'Proficient in Swift programming language for iOS development. Developed skills in mobile app development, including UI design, data handling, and integrating APIs. Created projects showcasing proficiency in Swift and iOS app development best practices.'},
            {key:5, name:'Scrum', duration: '3h30min', brief:'Advanved project organization course', about:'Acquired foundational knowledge in Scrum methodology, Agile principles, and team collaboration. Demonstrated skills in sprint planning, daily stand-ups, and agile project management. Completed practical exercises and simulations to apply Scrum practices in real-world scenarios.'},
            {key:6, name:'Javascript', duration:'3h30 min', brief:'Programming language', about:'Proficient in JavaScript programming language for web development. Developed skills in front-end and back-end scripting, DOM manipulation, and asynchronous programming. Created interactive web applications and projects showcasing JavaScript proficiency and modern development practices.'},
            {key:7, name:'React Native', duration:'3h30 min', brief: 'Advanced React Native course', about:'Proficient in React Native framework for cross-platform mobile app development. Developed skills in building mobile applications using React Native components, state management, and navigation. Created and deployed mobile apps for iOS and Android platforms, showcasing React Native expertise.'},
    ])


    return (

      <SafeAreaView style={styles.mainContainer}>

              <Text style={styles.greeting}> Hello, </Text>

              <View style={styles.nameContainer}>
               <TouchableOpacity onPress={handleSubmit(onSubmit)} >
                 <Text style={styles.name}> {usuarioAtual} </Text>
               </TouchableOpacity>
                 <MaterialCommunityIcons style={styles.bell} name="bell-ring-outline" size={40} color="black" />
              </View>

             <View style={styles.inputContainer}>
             
            <Controller
                control={control}
                name={'searchCourse'}
                render={({ field: {value, onChange} }) =>(
                    <TextInput 
                    placeholder='Search course' 
                    style={styles.input} 
                    value={value} 
                    onChangeText={(text)=>setInput(text)}
                    autoCapitalize='none'
                     />

                )}
            />
               
               <TouchableOpacity style={styles.lupa} onPress={handleSubmit(onSubmit)} >
                <AntDesign name="search1" size={30} color="black" />
               </TouchableOpacity>

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
                renderItem={({item})=> <CoursesListComponent data={item} textInput={input} /> }
                
                />


             </View>
         
      </SafeAreaView>

            

  

    );}


    function CoursesListComponent ({data, textInput}){

       

        const navigation = useNavigation();

        if(textInput == null){
            return(
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('CourseInfo', 
                    {
                        name: data.name,
                        about: data.about,
                        duration: data.duration,
                    }) }
                    } >

                        
    
                <View style={styles.coursesCardContainer}>
                    
                    <Text style={styles.coursesDuration}> {data.duration} </Text>
                    <Text style={styles.coursesTitle}> {data.name} </Text>
                    <Text style={styles.coursesBrief}> {data.brief} </Text>
    
                </View>
                </TouchableOpacity>
            )
    
            
        }

        if(data.name.toLowerCase().includes(textInput?.toLowerCase())){
            return(
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('CourseInfo', 
                    {
                        name: data.name,
                        about: data.about,
                        duration: data.duration,
                    }) }
                    } >
    
                <View style={styles.coursesCardContainer}>
                    
                    <Text style={styles.coursesDuration}> {data.duration} </Text>
                    <Text style={styles.coursesTitle}> {data.name} </Text>
                    <Text style={styles.coursesBrief}> {data.brief} </Text>
    
                </View>
                </TouchableOpacity>
            )
    
            
        }

       
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