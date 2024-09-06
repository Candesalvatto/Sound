import { Text, StyleSheet, View, FlatList, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../service/shop'
import { clearCart } from '../features/cart/cartSlice'

const ShoppingCart =({navigation})=> {

  const cart = useSelector(state => state.cart)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = async() => {
    const createdAt = new Date().toLocaleString()
    // const order = {
    //   ...cart,
    //   createdAt
    // }
    const orders = cart.items.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      createdAt,
    }))

    for (const order of orders) {
      await triggerPostOrder({ userId: "1", order })
    }
    // triggerPostOrder({userId:"1",order})
    dispatch(clearCart())
    navigation.navigate("OrdersStack")

  }

    return (
      <>
        <Text style={styles.textDetalle}>DETALLE DE LA COMPRA</Text>
        <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CartItem item={item}/> }
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
      <Pressable onPress={handleAddOrder}>
        <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>

    </View>
      </>
    )
  }

  export default ShoppingCart

const styles = StyleSheet.create({
  container:{
      justifyContent:"space-between",
      flex:1
  },
  containerConfirm:{
      backgroundColor:colors.pink,
      padding:20,
      flexDirection:"row",
      justifyContent:"space-between",
      marginVertical:70
  },
  textConfirm:{
      color:"black",
      fontSize:20
  },
  textDetalle:{
    fontSize:12,
    fontFamily: 'MullerBold',
    padding:10,
  },
  image:{
    width:50
  }
})