import { Image, View, StyleSheet } from 'react-native'
import mapApi from '../firebase/googleApi'


export const MapPreview = ({location}) => {

    const mapStaticURL = `https://maps.googleapis.com/maps/api/staticmap?
    center=${location.latitude},${location.longitude}
    &zoom=13
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}
    &key=${mapApi}`

    console.log(mapStaticURL)
  return (
    <View>
        <Image
        source={{uri:mapStaticURL}}
        style= {styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
      width:500,
      height:500

    }
})