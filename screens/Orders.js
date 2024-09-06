import { Text, StyleSheet, View, FlatList } from 'react-native'

import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../service/shop'


const Orders = () => {

  const {data:orders} = useGetOrdersByUserQuery('1')

    return (
      <View>
        <Text>MIS TICKETS ORDERS STACCK</Text>
        <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
      </View>
    )
  
}

export default Orders


const styles = StyleSheet.create({})