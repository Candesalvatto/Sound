import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons';


const Search = ({onSearch}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const handleInputChange = (t) => {
        setInput(t)
    }

    const handleRemoveInput = () => {
        setInput("")
        onSearch("")
        setError("")
    }

    const search = () => {

        const regex = /[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]/
        if(regex.test(input)){
            setError("Caracteres no validos")
        }else{
            setError("")
            onSearch(input)
        }

    }

  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput 
                style={styles.input}
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                placeholder='Buscar...'
                value={input}
                onChangeText={handleInputChange}
            />
            <View style={styles.buttonContainer}>
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={28} color="black" />
                </Pressable>
                <Pressable onPress={handleRemoveInput}>

                    <Ionicons name="close" style={styles.icon} size={28} color="black" />
                </Pressable>
            </View>  
        </View>
        <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        margin:10,
        marginTop:20
    },
    containerInput:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    input:{
        backgroundColor:'rgba(0, 0, 0, 0.15)',
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:20,
        width:"70%",

    },
    buttonContainer:{
        flexDirection:"row"
    },
    error:{
        color:"red",
        fontWeight:"bold",
        marginLeft:20
    },
    icon:{
        marginLeft:10
    }
})