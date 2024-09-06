import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';



const Navigator = () => {

   const idToken = useSelector(state => state.auth.idToken) 

    return (
     <NavigationContainer> 
    {idToken ? <TabNavigator/> : <AuthStack/>}
     </NavigationContainer>)}

export default Navigator
