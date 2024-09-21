import { Text, StyleSheet, View, FlatList, Image } from 'react-native'
import { useGetOrdersByUserQuery } from '../service/order'
import {LoadingSpinner} from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'
 import OrderItem from '../components/OrderItem'
 import {colors} from '../global/colors'



const Orders = ({navigation}) => {

   const localId = useSelector(state => state.auth.localId)
   const {data:orders,isLoading} = useGetOrdersByUserQuery(localId)
   console.log("data de order:", orders)
   if(isLoading) return <LoadingSpinner/>
   if(!orders ||orders.length === 0) return <View style={styles.vacioCont} >
   <Image 
           style={styles.vacio}
           source={require("../assets/images/vacio.png")}
           resizeMode="cover"/>
           <Text style={styles.vacioText}>No tiene ningún ticket</Text>
 </View>


    return (
      <View style={styles.container}>
        <Text style={styles.text}>MIS TICKETS </Text>
        <FlatList
        data={orders}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item})=> <OrderItem item={item} navigation={navigation}/>
      }
      />

      </View>
    )
  
}

export default Orders;



const styles = StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:22,
    fontFamily: 'AuthorBold',
    textAlign:"center",
    marginVertical:20
  },
  vacioCont:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  },
  vacio:{
    width:250,
    height:250,
    borderWidth:1,
    borderColor: colors.violet,
    borderRadius:10
    
    
  },
  vacioText:{
    fontSize:20,
    color:colors.violet,
    marginTop:30
  },
})