import { StyleSheet, Text, View } from 'react-native'
 import React, { useEffect } from 'react'
 import { useSelector } from 'react-redux'
 import { useGetOrderByUserQuery } from '../service/order'
import { QRinfo } from '../components/QRinfo'

const OrderDetail = ({route}) => {

     const {id} = route.params
     console.log("Route params:", route.params);
    const localId = useSelector(state => state.auth.localId)
    console.log("Local ID de order Detail:", localId); 
    const {data:order,isSuccess} = useGetOrderByUserQuery({localId,orderId:id})
    console.log("orden detail:", order)



    useEffect(()=>{
        if(isSuccess) console.log(order)
    },[isSuccess])

  return (
    <View style={styles.container}>
      <QRinfo/>
    </View>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  }
})