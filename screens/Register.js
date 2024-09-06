import React from 'react'
import { View ,  Text, Pressable, StyleSheet } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useState } from "react"
import { useRegisterMutation } from '../service/auth'
import { useDispatch } from 'react-redux'
import registerSchema from '../validations/registerSchema'
import { setUser } from '../features/auth/authSlice'




const Register = ({navigation}) => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [errorEmail,setErrorEmail] = useState("")
  const [errorPassword,setErrorPassword] = useState("")
  const [errorConfirmPassword,setErrorConfirmPassword] = useState("")
  const [triggerRegister,{data,isSuccess}] = useRegisterMutation()
  const dispatch = useDispatch()

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerRegister({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })

      );
      console.log('registrando email', data.email)
      console.log('registrando idToken', data.idToken)
      console.log('registrando localId', data.localId)
    } catch (error) {
      switch(error.path){
        case "email":
          setErrorEmail(error.message)
          setErrorPassword("")
          setErrorConfirmPassword("")
          break
        case "password":
          setErrorEmail("")
          setErrorPassword(error.message)
          setErrorConfirmPassword("")
          break
        case "confirmPassword":
          setErrorEmail("")
          setErrorPassword("")
          setErrorConfirmPassword(error.message)
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
                 error = {errorPassword}
            />
            <InputForm
                label="Confirmar Password"
                  value={confirmPassword}
                 onChangeText={(t) => setConfirmPassword(t)}
                 isSecure={true}
                 error={errorConfirmPassword}
            />
            <SubmitButton onPress={onSubmit} title="Registrarme"/>
            <Text style={styles.sub}>ya tenes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate('Login')} >
                <Text style={styles.subLink}>Iniciar sesion</Text>
            </Pressable>
        </View>
    </View>

  )
}

export default Register 
const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#151226',
    },
    container:{
      width:"90%",
      backgroundColor:'#151226',
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
    },
    title:{
      fontSize:22,
      fontFamily: 'MullerBold',
            color: 'white'
    },
    sub:{
      fontSize:14,
      fontFamily: 'MullerBold',
      color: 'white'
    },
    subLink:{
      fontSize:14,
      fontFamily: 'MullerBold',
      color:'#7b71ff'
    }
})
