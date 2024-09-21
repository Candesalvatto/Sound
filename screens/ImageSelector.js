import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from 'expo-image-picker'
import { usePatchImageProfileMutation } from '../service/user'
import { useSelector } from 'react-redux'

export const ImageSelector = ({navigation}) => {

    const [image, setImage] = useState('')
    const [triggerAddImageProfile] = usePatchImageProfileMutation()
    const localId = useSelector(state => state.auth.localId)

    const pickImage = async ()=>{
        const {granted} = await ImagePicker.requestCameraPermissionsAsync()
        if(!granted) return 

        const result = await ImagePicker.launchCameraAsync({
         aspect:[9,9],
         quality:0.2,
         base64:true,
         allowsEditing:true
        })
 
        if(result.canceled) return

        setImage(`data:image/jpg;base64,${result.assets[0].base64}`);
     }

     const pickImageFromGallery = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) return;
    
        const result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [9, 9],
          quality: 0.2,
          base64: true,
        });
    
        if (result.canceled) return;
    
        setImage(`data:image/jpg;base64,${result.assets[0].base64}`);
      };

    const confirmImage = () => {
        if (image) {
            triggerAddImageProfile({ image, localId })
                .unwrap()  
                .then(() => {
                    navigation.navigate('MyProfile');
                })
                .catch((error) => {
                    console.error('Error al guardar la imagen:', error);
                });
        } 
    };

  return (
    <View style={styles.container}>
    <View style={styles.containerBanner}>
        <Image
                source={require('../assets/images/banner.png')}
                style= {styles.banner}
                resizeMode='cover'/>
    </View>
    <View style={styles.containerProfile}>
    <Image
    source= {image ? {uri:image} : require('../assets/images/defaultProfile.png')}
    style= {styles.image}
    resizeMode='cover'/>
    <SubmitButton  onPress={pickImage} title="Tomar Imagen" style= {styles.button}/>
    <SubmitButton  onPress={pickImageFromGallery} title="Seleccionar Imagen de galeria" style= {styles.button}/>
    <SubmitButton onPress={confirmImage} title="Confirmar" style= {styles.button}/>
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
        marginBottom:50
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
