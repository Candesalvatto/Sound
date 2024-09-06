import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyProfile } from '../screens/MyProfile'
import { ImageSelector } from '../screens/ImageSelector'
import { LocationSelector } from '../screens/LocationSelector'

const Stack = createNativeStackNavigator()

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name='MyProfile' component={MyProfile} options={{ headerShown: true, title: 'Mi Perfil', headerStyle:{backgroundColor:'#151226'},headerTintColor: '#ffffff' }} />
            <Stack.Screen name='ImageSelector' component={ImageSelector} options={{ headerShown: true, title: 'Mi Perfil' }}/>
            <Stack.Screen name='LocationSelector' component={LocationSelector} options={{ headerShown: true, title: 'Mi Perfil' }}/>
    </Stack.Navigator>
  )
}
