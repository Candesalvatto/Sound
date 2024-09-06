import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import ShoppingCart from '../screens/ShoppingCart';

const Stack = createNativeStackNavigator();

const CartStack = ()=>  {

    return (
<Stack.Navigator
    screenOptions={(
        () => {
            return {
                header: () => <Header/>
                
            }
        }
    )}
    >
      <Stack.Screen name='ShoppingCart' component={ShoppingCart}/>
    </Stack.Navigator>
    )
  }

  export default CartStack


