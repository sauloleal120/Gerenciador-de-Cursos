import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ProfileScreen} from '../../src/screens/ProfileScreen';
import {SettingsScreen} from '../../src/screens/SettingsScreen';
import {CoursesScreen} from '../../src/screens/CoursesScreen';

import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export function Main({route}) {
  const {usuarioAtual, emailAtual, passwordAtual} = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size}) => {
            return <Feather name="book" color={'#e3562a'} size={size} />;
          },
        }}
        name="Courses"
        component={CoursesScreen}
        initialParams={{usuarioAtual: usuarioAtual}}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({size}) => {
            return <Feather name="user" color={'#e3562a'} size={size} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({size}) => {
            return <Feather name="settings" color={'#e3562a'} size={size} />;
          },
        }}
        name="Settings"
        component={SettingsScreen}
        initialParams={{
          usuarioAtual: usuarioAtual,
          emailAtual: emailAtual,
          passwordAtual: passwordAtual,
        }}
      />
    </Tab.Navigator>
  );
}
