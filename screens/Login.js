import { View, Text, Pressable, StyleSheet } from "react-native"
import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"
import { useState } from "react"
import { useLoginMutation } from "../service/auth"
import { useDispatch } from "react-redux"
import { setUser } from "../features/auth/authSlice"
import { insertSession } from "../db"
import loginSchema from '../validations/loginSchema'
import {colors} from '../global/colors'


export const Login = ({navigation}) => {
  
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errorEmail,setErrorEmail] = useState("")
  const [errorPassword,setErrorPassword] = useState("")
  const [triggerLogin,{data,isSuccess,isError,error}] = useLoginMutation()
  const dispatch = useDispatch()

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({email,password})
      const {data} = await triggerLogin({email,password})
      insertSession(data)
      dispatch(setUser({
        email:data.email,
        idToken:data.idToken,
        localId:data.localId
      }))


    } catch (error) {
      console.log(error.path),
      console.log(error.message)
      switch(error.path){
        case "email":
          setErrorEmail(error.message)
          setErrorPassword("")
          break
        case "password":
          setErrorPassword(error.message)
          setErrorEmail("")
          break
          default:
            break
      }
 
    }
}

  return (
    <View style={styles.main}>
    <View style={styles.container}>
        <InputForm
            label="Email"
            value={email}
             onChangeText={(t) => setEmail(t)}
             isSecure={false}
             error={errorEmail}
        />
        <InputForm
            label="Password"
             value={password}
             onChangeText={(t) => setPassword(t)}
             isSecure={true}
             error={errorPassword}
        />
        <SubmitButton onPress={onSubmit} title="Iniciar Sesion"/>
        <Text style={styles.sub}>No tenes una cuenta?</Text>
        <Pressable onPress={()=> navigation.navigate("Register")} >
            <Text style={styles.subLink}>Registro</Text>
        </Pressable>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
  main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.purple,
    },
    container:{
      width:"90%",
      backgroundColor:colors.purple,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    title:{
      fontSize:22,
      fontFamily: 'AuthorBold',
            color: 'white'
    },
    sub:{
      fontSize:18,
      fontFamily: 'AuthorRegular',
      color: 'white'
    },
    subLink:{
      fontSize:18,
      fontFamily: 'AuthorRegular',
      color:colors.violet
    }
})
