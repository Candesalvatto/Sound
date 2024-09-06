
import React  from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Orders from '../screens/Orders';

const Stack = createNativeStackNavigator();

const OrdersStack = ()=> {

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
                  <Stack.Screen name='Orders' component={Orders}/>
            </Stack.Navigator>
    )
  
}
export default OrdersStack