import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import InputForm from '../components/InputForm'
import { useDispatch, useSelector } from 'react-redux'
import SubmitButton from '../components/SubmitButton'
import { useGetUserQuery, usePatchDataProfileMutation } from '../service/user'
import { useEffect } from 'react'
import { setUser } from '../features/auth/authSlice'
import { useNavigation } from '@react-navigation/native'; 

export const EditProfile = () => {

    const [name, setName] = useState("")
    const [lastName, setLastname] = useState("")
    const [dni, setDni] = useState("")
    const dispatch = useDispatch()
    const localId = useSelector((state) => state.auth.localId); 
    const email = useSelector((state) => state.auth.email); 
    const idToken = useSelector((state) => state.auth.idToken); 
    const { data: userData, isLoading } = useGetUserQuery({ localId }); 
    const [triggerRegisterProfile,{data,isSuccess}] = usePatchDataProfileMutation()
    const navigation = useNavigation();

    useEffect(() => {
        if (userData) {
          setName(userData.name || '');
          setLastname(userData.lastName || '');
          setDni(userData.dni || '');
        }
      }, [userData]);

      const onSubmit = async () => {
        try {
          const result = await triggerRegisterProfile({ name, lastName, dni, localId });
      
          if (result?.data) {
            const updatedUserData = result.data;   
      
            dispatch(
              setUser({
                name: updatedUserData.name,
                lastName: updatedUserData.lastName,
                dni: updatedUserData.dni,
                localId,
                email,
                idToken
              })
            );
            navigation.navigate('MyProfile'); 
          } 
        } catch (error) {
          error;
        }
      };

  return (
    <View style={styles.container}>
<InputForm
            label="Nombre"
            value={name}
             onChangeText={(t) => setName(t)}
             isSecure={false}
             style={{ color: 'black' }} 
        />
                <InputForm
            label="Apellido"
            value={lastName}
             onChangeText={(t) => setLastname(t)}
             isSecure={false}
             style={{ color: 'black' }} 
        />
                <InputForm
            label="Documento"
            value={dni}
             onChangeText={(t) => setDni(t)}
             isSecure={false}
             style={{ color: 'black' }} 
        />
        <SubmitButton onPress={() => navigation.navigate('ImageSelector')} title="Agregar foto de perfil" />
        <SubmitButton onPress={onSubmit} title="CONFIRMAR"/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }


})
