
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


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignupScreen"
          component={SignupScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CourseInfo"
          component={CourseInfo}
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
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="SavedCourses"
          component={SavedCourses}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
