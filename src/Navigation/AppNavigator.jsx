import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Black from '../screens/Black';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Forget from '../screens/Forget';
import Home from '../screens/Home';
import Chats from '../screens/Chats';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Black"
          component={Black}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        /><Stack.Screen
        name="Forget"
        component={Forget}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
