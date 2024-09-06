import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonPrimary from '../ButtonPrimary'

const CardShows = ({show,handleVisibleModal}) => {
  return (
    <View style={styles.container} key={show.id}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>ID: {show.id}</Text>
          <Text style={styles.text}>Nombre: {show.name}</Text>
          <Text style={styles.text}>Nombre: {show.organizer}</Text>
          <Text style={styles.text}>Nombre: {show.date}</Text>
          <Text style={styles.text}>Nombre: {show.location}</Text>
        </View>
        <ButtonPrimary
            style={{backgroundColor:"red"}}
            text="Borrar" 
            onPress={() => handleVisibleModal(show.id)}
        />
    </View>
  )
}

export default CardShows

const styles = StyleSheet.create({
    container:{
        width:"90%",
        backgroundColor:"red",
        marginHorizontal:"5%",
        marginVertical:10,
        padding:20,
        borderRadius:5
    },
    textContainer:{
      flexDirection:"column",
      gap:10
    },
    text:{
        color:"white",
        fontWeight:"bold"
    }
})