import { StatusBar } from 'expo-status-bar'
import {StyleSheet} from 'react-native'
 import React from 'react'
import { useFonts } from 'expo-font'
import { fonts } from './global/fonts'
import Navigator from './navigation/Navigator'
import { store } from './app/store'
import { Provider } from 'react-redux'





const App = () => {
    
const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded){
    return null
  }
 
    return(
      <>
       <Provider store={store}>
           <Navigator/>  

      </Provider>

         <StatusBar style="dark"  />
      </>        
    )
}

export default App

const styles = StyleSheet.create({
  container:{
    marginTop:30,
    width: "100%"

  }
})