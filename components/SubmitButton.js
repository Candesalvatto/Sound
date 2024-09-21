import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({title,onPress, style}) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.violet,
        padding:10,
        alignItems:"center",
        borderRadius:20,
        margin:10
    },
    text:{
        textAlign:"center",
        color:colors.purple,
        fontSize:18,
        fontFamily: 'AuthorBold',
    }
})