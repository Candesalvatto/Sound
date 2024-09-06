import React from 'react'
import { View, Image, StyleSheet, Text, FlatList } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import { useSelector } from 'react-redux'
import { useGetUserQuery } from '../service/shop'


export const MyProfile = ({navigation}) => {

    const localId = useSelector((state) => state.auth.localId);
    const { data: user, isLoading } = useGetUserQuery({ localId });
    console.log('localId:', localId); 
    if (user) {
        console.log("User:", user);
      } 
      if (isLoading) {
        return <Text>Cargando...</Text>;
      }
      if (!user) {
        return <Text>User es undefined</Text>;
    }
    else {
        console.log("User es undefined");
      }

      console.log("User:", user);  

  return (
    <View style={styles.container}>
        <View style={styles.containerBanner}>
            <Image 
                    source= {require('../assets/images/banner.png')}
                    style= {styles.banner}
                    resizeMode='cover'/>
        </View>
        <View style={styles.containerProfile}>
        <Image
        source= { user.image ? {uri:user.image} : require('../assets/images/defaultProfile.png')}
        style= {styles.image}
        resizeMode='cover'/>
        <SubmitButton onPress={navigation.navigate('ImageSelector')} title="Agregar foto de perfil" style= {styles.button}/>
        <SubmitButton onPress={navigation.navigate('LocationSelector')} title="Agregar localizacion" style= {styles.button}/>
        <FlatList
          data={user.locations}
          keyExtractor={item => item.id}
          renderItem={({item})=> <View><Text>{item.address}</Text></View>}
        />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    containerProfile:{
        flex:1,
        alignItems: 'center',
        zIndex:1,
        marginTop: -15
    },
    image:{
        width:180,
        height:180,
        marginBottom:50,
        borderRadius: 100
    },
    containerBanner:{
        width:'100%',
        height:200,
        zIndex:0
    },
banner:{
    width: '100%',
    height:'100%'
}


})