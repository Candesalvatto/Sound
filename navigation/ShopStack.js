import React from 'react'
import Home from '../screens/Home';
import ItemDetail from '../screens/ItemDetail';
import ItemListCategories from '../screens/ItemListCategories';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();

const ShopStack =()=> {


  return (
    <Stack.Navigator
    screenOptions={(
        ({route}) => {
            return {
                header: () => <Header/>
            }
        }
    )}
    >
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Eventos' component={ItemListCategories}/>
      <Stack.Screen name='Detail' component={ItemDetail}/>
    </Stack.Navigator>
  )
}

export default ShopStack