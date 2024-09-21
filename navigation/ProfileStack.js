import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MyProfile } from '../screens/MyProfile'
import { ImageSelector } from '../screens/ImageSelector'
import { EditProfile } from '../screens/EditProfile'

const Stack = createNativeStackNavigator()

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name='MyProfile' component={MyProfile} options={{ headerShown: true, title: 'Mi Perfil', headerStyle:{backgroundColor:'#151226'},headerTintColor: '#ffffff' }} />
            <Stack.Screen name='ImageSelector' component={ImageSelector} options={{ headerShown: true, title: 'Mi Perfil' , headerStyle:{backgroundColor:'#151226'},headerTintColor: '#ffffff'}}/>
            <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: true, title: 'Editar Perfil', headerStyle:{backgroundColor:'#151226'},headerTintColor: '#ffffff' }}/>
    </Stack.Navigator>
  )
}
