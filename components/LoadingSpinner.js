import React from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'
import {colors} from '../global/colors'

export const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="white"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.purple
    }
})
