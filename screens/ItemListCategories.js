import { FlatList, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import EventItem from '../components/EventItem'

import { useGetEventsByCategoryQuery } from '../service/shop'
import { LoadingSpinner } from '../components/LoadingSpinner'

const ItemListCategories = ({route}) => {

const {category} = route.params
const {data: events, isSuccess, isError, error, isLoading } = useGetEventsByCategoryQuery(category)
const [eventsFiltered,setEventsFiltered] = useState([])


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

   if(isLoading) return <LoadingSpinner/>

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