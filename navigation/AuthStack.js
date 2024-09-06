import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import Register from '../screens/Register';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={
      {headerShown: false,
          tabBarShowLabel:true,
      }
     }>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Register' component={Register}/>
    </Stack.Navigator>
    

    
  )
}
export default AuthStack