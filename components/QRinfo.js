import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { useGetOrderByUserQuery } from '../service/order';
import { View, StyleSheet, Text } from 'react-native';

export const QRinfo = ({ localId, orderId }) => {

    const {data:order} = useGetOrderByUserQuery({localId, orderId})

    const orderInfo = JSON.stringify({
            id: orderId,
        });

  return (
    <View style={styles.container}>
        <QRCode
      value={orderInfo}
      size={200} 
      />
      <Text style={styles.text}>QR DE ENTRADA AL EVENTO </Text>
      <Text style={styles.subtext}>(Sube el brillo de tu pantalla) </Text>
      </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",


    },
    text:{
        fontSize:20,
        marginTop: 70
    }
})
