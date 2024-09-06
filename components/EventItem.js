import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const EventItem = ({event}) => {

  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()


  return (
    <Pressable style={styles.container} onPress={() => {
      console.log("Navigating to event ID:", event.id, event.title); // Debugging line
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
    dayShort:{
      backgroundColor:"#fff",
      color:"000",
      width:50,
      height:50,
      borderRadius:10,
fontWeight: "600",
textAlign:"center",
fontSize:15,
flexDirection: 'column'

    },

    title:{
        width:"100%",
        color:'#fff',
        padding:10,
        fontFamily:'MullerBold',
        letterSpacing:2
    },
    titleMin:{
      fontSize:14
    },
    titleMax:{
      fontSize:20
    },
    containerImage:{
      width:'100%',
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      overflow: 'hidden',
    },
    containerText:{
            width:'100%',
            backgroundColor: '#000',
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