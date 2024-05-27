import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import {SignupScreen} from './src/screens/SignupScreen';
import {CourseInfo} from './src/screens/CourseInfo';
import {Main} from './src/screens/Main';
import {YourCourses} from './src/screens/YourCourses';
import {SavedCourses} from './src/screens/SavedCourses';
import {coursesMock} from './src/mocks/mocks';
import {savedCoursesMock} from './src/mocks/savedCoursesMock';
import {usuario} from './src/users/users';

const Stack = createNativeStackNavigator();

function App() {
  const [users, setUsers] = useState([  {key: 1, name: 'admin', email: 'admin', password: 'admin'},
]);

  const [savedCourses, setSavedCourses] = useState(savedCoursesMock);

  const [myCourses, setMyCourses] = useState(coursesMock);
 

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
