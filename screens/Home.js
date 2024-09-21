import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView} from 'react-native'
  import Categories from '../components/Categories'
 import InfEvents from '../components/InfEvents'


const Home = () => {
  return (

   <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.contBanner}>
      <Image style={styles.img}
            source={require("../assets/images/vosy.jpg")}
            resizeMode="cover"/>
    </View>
    <Text style={styles.text}>¿Dónde será tu próxima fiesta?</Text>
     <Categories/> 
     <View style={styles.contBanner}>
      <Image
                  style={styles.img}
                  source={require("../assets/images/connect.jpg")}
                  resizeMode="cover"/>
    </View>
    <InfEvents/>
   </ScrollView>


  )
}

export default Home


const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    scrollViewContent: {
      flexGrow: 1  
    },
    contBanner:{
      flex:1,
      width:"100%",
      height:250,
      marginTop:30,
    },
    img:{
      width: "100%",
      height:"100%"
    },
    text:{
      fontSize:23,
      fontFamily: 'AuthorBold',
      textAlign: "center",
      marginTop: 50

    }
  })