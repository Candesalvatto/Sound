import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import {colors} from '../global/colors'

const InfEvents = () => {
  return (
    <View style={styles.container} >
        <Text style={styles.text} >Los eventos son para</Text>
        <Text style={styles.textTitulo}>MAYORES DE 18 AÑOS</Text>
        <Text style={styles.text}>Y para ingresar deberán presentar</Text>
        <Text style={styles.textTitulo}>DNI FÍSICO VIGENTE</Text>
        <Text style={styles.text}>Para facilitar el acceso tener a mano</Text>
        <Text style={styles.textTitulo}>QR DE TU ENTRADA</Text>
    </View>
  )
}

export default InfEvents
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:20
    },
    text:{
        fontFamily: 'AuthorRegular',
        fontSize:20,
        textAlign:"center",
        marginTop:20
    },
    textTitulo:{
        fontSize:26,
        fontFamily: 'AuthorBold',
        textAlign:"center",
        marginTop:10,
        borderWidth:1,
        borderColor:colors.violet,
        marginLeft:"auto",
        marginRight:"auto",
        width:"80%",
        backgroundColor:colors.violet,
    }
})