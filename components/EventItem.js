import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const EventItem = ({event}) => {

  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()


  return (
    <Pressable style={styles.container} onPress={() => {
      navigation.navigate("Detail", { id: event.id });
    }}>
    <View style={styles.containerImage}>
      <Image
        style={styles.image}
        source={{uri: event.image}}
        resizeMode="cover"
      />
      </View>
      <View style={styles.containerText}>
        <View style={styles.iconText}>
            <AntDesign name="calendar" size={24} color="white" />
            <Text style={[styles.title,width < 300 ? styles.titleMin: styles.titleMax]}>{event.title}</Text>
            </View>
            <View style={styles.iconText}>
            <Ionicons name="location-outline" size={24} color="white" />
            <Text style={[styles.title,width < 300 ? styles.titleMin: styles.titleMax]}>{event.day}</Text>
            </View>

        </View>
    </Pressable>
  )
}

export default EventItem

const styles = StyleSheet.create({
    container:{
      overflow: 'hidden',
      borderWidth: 2,
      borderColor:'#000',
        marginVertical:10,
        flexDirection:"column",
        alignItems:"center",
        width:"90%",
        marginHorizontal:"5%",
        borderRadius:20,
    },


    title:{
        width:"100%",
        color:'black',
        padding:6,
        fontFamily: 'AuthorBold',
        letterSpacing:1
    },
    titleMin:{
      fontSize:14
    },
    titleMax:{
      fontSize:24
    },
    containerImage:{
      width:'100%',
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      overflow: 'hidden',
    },
    containerText:{
            width:'100%',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
    },

    image:{
        width: '100%',
        height:150
 

    },
    iconText:{
      flexDirection:'row',
      justifyContent:'left',
      alignItems:'center',
      paddingLeft:15,
    }
})