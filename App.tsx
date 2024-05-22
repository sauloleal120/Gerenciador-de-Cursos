import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import {SignupScreen} from './src/screens/SignupScreen';
import {CourseInfo} from './src/screens/CourseInfo';
import {Main} from './src/screens/Main';
import {YourCourses} from './src/screens/YourCourses';
import {SavedCourses} from './src/screens/SavedCourses';

const Stack = createNativeStackNavigator();

function App() {
  const [users, setUsers] = useState([
    {key: 1, name: 'admin', email: 'admin', password: 'admin'},
  ]);

  const [savedCourses, setSavedCourses] = useState([
    {
      key: 1,
      name: 'UIII',
      duration: '2h30min',
      brief: 'Advanved mobile interface design',
      about:
        'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces',
      price: 50,
    },
  ]);

  const [myCourses, setMyCourses] = useState([
    {
      key: 1,
      name: 'UII',
      duration: '2h30min',
      brief: 'Advanved mobile interface design',
      about:
        'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces',
      price: 50,
    },
    {
      key: 2,
      name: 'HTML',
      duration: '3h10min',
      brief: 'Advanced web applications',
      about:
        'Completed HTML Mastery Course at Tech Academy, Anytown, USA (May 2024). Proficient in HTML5, basic CSS, and responsive web design. Developed projects including a personal portfolio website and recipe page.',
      price: 60,
    },
    {
      key: 3,
      name: 'UI Advanced',
      duration: '2h15min',
      brief: 'Advanved mobile interface design',
      about:
        'Proficient in advanced UI design concepts including interaction design, information architecture, and usability testing. Skilled in prototyping tools such as Adobe XD and Figma. Developed complex projects emphasizing user-centered design principles and accessibility standards.',
      price: 55,
    },
    {
      key: 4,
      name: 'Swift',
      duration: '1h30min',
      brief: 'Advanved iOS apps',
      about:
        'Proficient in Swift programming language for iOS development. Developed skills in mobile app development, including UI design, data handling, and integrating APIs. Created projects showcasing proficiency in Swift and iOS app development best practices.',
        price: 65,
    },
  
   
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
          initialParams={{usuario: users}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignupScreen"
          component={SignupScreen}
          initialParams={{usuario: users}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CourseInfo"
          component={CourseInfo}
          initialParams={{
            savedCourses: savedCourses,
            setSavedCourses: setSavedCourses,
            myCourses: myCourses,
            setMyCourses: setMyCourses,
          }}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="YourCourses"
          component={YourCourses}
          initialParams={{myCourses: myCourses, setMyCourses: setMyCourses}}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SavedCourses"
          component={SavedCourses}
          initialParams={{
            savedCourses: savedCourses,
            setSavedCourses: setSavedCourses,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
