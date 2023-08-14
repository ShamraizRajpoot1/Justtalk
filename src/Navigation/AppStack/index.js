import { View, Text } from 'react-native'
import React from 'react'
import Home from '../../screens/appFlow/Home';
import Chats from '../../screens/appFlow/Chats';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const index = () => {
    const Stack = createStackNavigator();

  return (
  
        <Stack.Navigator>
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
   
  )
}

export default index