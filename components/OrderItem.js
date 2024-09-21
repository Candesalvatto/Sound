import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import SubmitButton from './SubmitButton';
import {colors} from '../global/colors'



const OrderItem = ({item}) => {

  const navigation = useNavigation()


  return (
    <View style={styles.container}>
    <View style={styles.containerD}>
          <View style={styles.containerImg}>
          <Image
            style={styles.img}
            source={{uri:item.image}}
            resizeMode="cover"
            />
          </View>


      <View style={styles.containerText}>
        <Text style={styles.date}>{item.createdAt}</Text>
        <Text style={styles.total}>{item.name} </Text>
      </View>
      </View>
              <View style={styles.containerC}>
              <SubmitButton title="VER TICKET" onPress={()=>navigation.navigate("OrderDetail",{id:item.id})}/>
              </View>

    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        borderColor:"black",
        borderWidth:1,
        width:"100%",
        marginVertical:5,
        padding:10,
        flexDirection:"column",

    },
    containerText:{
paddingLeft:30
    },
  containerC:{
    justifyContent:"center",
    alignItems:"center"
      },
      containerD:{
        flexDirection:"row",
          },
    date:{
        fontSize:16
    },
    total:{
        fontSize:20,
        fontWeight:"bold"
    },
    pressableButton:{
width:100,
height:40,

    },
    img:{
      width:70,
      height:70,
      borderRadius:50
    },
    textButton:{
fontSize:20,
color: colors.violet,
fontFamily: 'AuthorRegular',

    }
    
})