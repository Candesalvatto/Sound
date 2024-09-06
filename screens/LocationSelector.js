import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Location from 'expo-location';
import { MapPreview } from '../components/MapPreview';
import { mapApi } from '../firebase/googleApi';
import SubmitButton from '../components/SubmitButton';
import { useSelector } from 'react-redux';
import { usePostUserLocationMutation } from '../service/shop';



export const LocationSelector = ({navigation}) => {

    const [address,setAddress] = useState("")
    const localId = useSelector(state => state.auth.localId)
    const [triggerPostUserLocation] = usePostUserLocationMutation()
    const [location,setLocation] = useState({
        latitude:"",
        longitude:"",
        address:""
    })


    useEffect(()=>{
        (
            async () => {
                const {status} = await Location.requestForegroundPermissionsAsync()
                if(status !== "granted") return
                const newLocation = await Location.getCurrentPositionAsync()
                setLocation({
                    latitude:newLocation.coords.latitude,
                    longitude:newLocation.coords.longitude
                })
            }
        
        )()
    },[])

    useEffect(()=>{
        (
            async () => {
                if(location.latitude){
                const urlReverseGeoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${mapApi}`
                const response  = await fetch(urlReverseGeoding)
                const data = await response.json()
                setAddress(data.results[0].formatted_address)
                }
            }
        )()
    },[location])

    const handleConfirmLocation = () => {
        const userLocation = {
            ...location,
            address
        }
        triggerPostUserLocation({localId,userLocation})
        navigation.navigate("MyProfile")
    }


  return (
    <View style={styles.container}>
        <Text>Direccion: {address}</Text>
        <Text>{location.latitude} {location.longitude}</Text>
        <MapPreview location={location}/>
        <SubmitButton title="Confirmar Ubicacion" onPress={handleConfirmLocation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:100
    }
})
