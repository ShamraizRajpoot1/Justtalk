import {View, Text, SafeAreaView} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Black from '../../screens/authFlow/Black';
import Splash from '../../screens/authFlow/Splash';
import Login from '../../screens/authFlow/Login';
import SignUp from '../../screens/authFlow/SignUp';
import Forget from '../../screens/authFlow/Forget';

import auth from '@react-native-firebase/auth';
import { AuthContext } from '../AuthProvider';
import AppStack from '../AppStack';


const AppNavigator = () => {

  // const {user, setUser} = useContext(AuthContext);
  // const [initializing, setInitializing] = useState(true);

  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() =>{
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if(initializing) return null;

  const Stack = createStackNavigator();
  return (
    
    
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
        />
        <Stack.Screen
          name="Forget"
          component={Forget}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    
    
  );
};

export default AppNavigator;
