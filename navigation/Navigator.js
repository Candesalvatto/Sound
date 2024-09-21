import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthStack from './AuthStack';
import { useEffect } from 'react';



const Navigator = () => {

   const idToken = useSelector(state => state.auth.idToken) 
   const dispatch = useDispatch()

   useEffect(()=>{
      (async ()=>{
         const sessions = await fetchSession()
         if(sessions.rows.length){
           dispatch(setUser(sessions.rows._array[0]))
         }
       
       })()
   }, [])

    return (
     <NavigationContainer> 
    {idToken ? <TabNavigator/> : <AuthStack/>}
     </NavigationContainer>)}

export default Navigator
