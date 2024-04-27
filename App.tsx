

  import React, {useState} from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

  import   LoginScreen from './src/screens/LoginScreen';
  import   {SignupScreen} from './src/screens/SignupScreen';
  import { Main } from './src/screens/Main';



  const Stack = createNativeStackNavigator();

  function App() {

      const [users, setUsers] = useState([

      {key:1, name:'admin', email:'admin', password:'admin'},

    
      ])

      

    
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen} initialParams={{usuario: users}}   />
          <Stack.Screen options={{headerShown:false}} name="SignupScreen" component={SignupScreen} initialParams={{usuario: users, setUsuario: setUsers}} />
          <Stack.Screen options={{headerShown:false}} name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;

