

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from './src/screens/LoginScreen';
import { SignupScreen } from './src/screens/SignupScreen';
import { Main } from './src/screens/Main';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="SignupScreen" component={SignupScreen} />
        <Stack.Screen options={{headerShown:false}} name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

