import React from 'react'
import ItemDetail from '../screens/ItemDetail';
import AllEvents from '../screens/AllEvents'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';


const Stack = createNativeStackNavigator();

const AllEventsStack =()=> {


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
      <Stack.Screen name='Eventos' component={AllEvents}/>
      <Stack.Screen name='Detail' component={ItemDetail}/>
    </Stack.Navigator>
  )
}

export default AllEventsStack 