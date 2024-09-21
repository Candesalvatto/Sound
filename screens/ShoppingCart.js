import { Text, StyleSheet, View, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../service/order'
import { clearCart } from '../features/cart/cartSlice'
import SubmitButton from '../components/SubmitButton'
import {colors} from '../global/colors'
import { deleteItemFromCart } from '../features/cart/cartSlice'

const ShoppingCart =({navigation})=> {

  const cart = useSelector(state => state.cart)
  const localId = useSelector(state => state.auth.localId)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = async() => {
    const createdAt = new Date().toLocaleString()
    
    const order = cart.items.map(item => ({    
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image:item.image,
      type:item.type,
      createdAt,
    }))
    triggerPostOrder({localId,order})
    console.log("orden comprada", order)
    dispatch(clearCart())
    navigation.navigate("OrdersStack")
  }
  const handleDeleteItem = (itemId) => {
    const itemToDelete = cart.items.find(item => item.id === itemId);
    dispatch(deleteItemFromCart({ 
      payload: itemToDelete, 
      price: itemToDelete.price * itemToDelete.quantity 
    }));
    dispatch(clearCart());
  };

  if (cart.total === 0) return <View style={styles.vacioCont} >
    <Image 
            style={styles.vacio}
            source={require("../assets/images/vacio.png")}
            resizeMode="cover"/>
            <Text style={styles.vacioText}>Su carrito esta vacio</Text>
  </View>

    return (
      <View style={styles.containerGral}>
        <Text style={styles.textDetalle}>DETALLE DE LA COMPRA</Text>
        <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={(item, index)=> `${item.id}-${item.type}-${index}`}
      renderItem={({item})=> <CartItem item={item} onDelete={() => handleDeleteItem(item.id)}/> }
      />
      
      <View style={styles.containerConfirm}>
        <View>
        <Text style={styles.textConfirm}>Costo de entrada</Text>
        <Text style={styles.textConfirm}>Costo del servicio</Text>
        <Text style={styles.textConfirm}>Total</Text>
        </View>

        <View>
        <Text style={styles.textConfirm}>$ {cart.total}</Text>
        <Text style={styles.textConfirm}> ${cart.serviceCost}</Text>
        <Text style={styles.textConfirm}> ${cart.totalWithServiceCost}</Text>
        </View>

      </View>
      <SubmitButton onPress={handleAddOrder} title='Confirmar' />
    </View>
      </View>
    )
  }

  export default ShoppingCart

const styles = StyleSheet.create({
  container:{
      justifyContent:"space-between",
      flex:1
  },
  containerGral:{
    flex:1
  },
  containerConfirm:{
      padding:20,
      flexDirection:"row",
      justifyContent:"space-between",
      marginVertical:70,
      borderWidth:1,
      borderColor: "black",
      width:"90%",
      margin:"auto"

  },
  textConfirm:{
      color:"black",
      fontSize:20,
      fontFamily: 'AuthorBold',
  },
  textDetalle:{
    fontSize:18,
    fontFamily: 'AuthorBold',
    padding:10,
  },
  image:{
    width:50
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
