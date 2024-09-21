import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';


const CartItem = ({item,  onDelete}) => {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>Cant   {item.quantity}</Text>
          <AntDesign name="delete" size={24} color="red" onPress={() => onDelete(item.id)}/>
        </View>
        <View style={styles.container2}>
        <Text style={styles.price}>$ {item.price}</Text>
        <Text style={styles.price}>Entrada {item.type} </Text>
        </View> 
      </View>
    )
  }
  
  export default CartItem
  
  const styles = StyleSheet.create({
      container:{
          width:"90%",
          marginHorizontal:"5%",
          backgroundColor:'rgba(0, 0, 0, 0.10)',
          marginVertical:10,
          padding:20,
          flexDirection:"column",
          borderRadius:3
      },
      containerText:{
          width:"100%",
          gap:5,
          borderBottomWidth:1,
          borderColor:"black",
          flexDirection:"row",
          justifyContent:"space-between",
          padding:10,
      },
      container2:{
                    flexDirection:"row",
                    padding:10,
                    justifyContent:"space-between",
      },
      title:{
          color:"black",
          fontSize:20,
          fontFamily: 'AuthorBold',
      },
      brand:{
          color:"white",
          fontSize:16
      },
      price:{
          color:"black",
          fontSize:16,
          fontWeight:"bold"
      },
      delete:{
        color: "red",
        fontSize:18
      }
  })