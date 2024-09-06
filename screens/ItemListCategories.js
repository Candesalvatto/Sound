import { FlatList, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import EventItem from '../components/EventItem'
// import { useSelector } from 'react-redux'
import { useGetEventsByCategoryQuery } from '../service/shop'

const ItemListCategories = ({route}) => {

const {category} = route.params
const {data: events, isSuccess, isError, error, isLoading } = useGetEventsByCategoryQuery(category)

// const events = useSelector((state => state.shop.events))

  const [eventsFiltered,setEventsFiltered] = useState([])

  // useEffect(()=>{
  //   setEventsFiltered(events.filter(event => event.category === category))
  // },[category])

  useEffect(()=>{
    if(isSuccess){
      setEventsFiltered(events)
    }
  },[category,isSuccess])


  const onSearch = (input) => {

    if(input){
        setEventsFiltered(eventsFiltered.filter(event => event.title.includes(input) ))
    }else{
        setEventsFiltered(events)
    }
   
  }

   if(isLoading) return <View><Text>cargando</Text></View>

  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    
    <View style={styles.container}>
        <Search onSearch={onSearch}/>
        <FlatList
          data={eventsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <EventItem event={item}/>}
        />
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})