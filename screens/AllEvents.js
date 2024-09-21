import Search from '../components/Search'
import { FlatList, Text, View, Image} from 'react-native'
import EventItem from '../components/EventItem'
import React, { useEffect, useState } from 'react'
import { useGetEventsQuery } from '../service/shop'
 import { LoadingSpinner } from '../components/LoadingSpinner'

const AllEvents = () => {

  const { data: events, error, isLoading, isSuccess } = useGetEventsQuery();
  const [eventsFiltered,setEventsFiltered] = useState([])

  useEffect(()=>{
    if(isSuccess && events){
      setEventsFiltered(events)
    }
  },[isSuccess])

  const onSearch = (input) => {

    if(input){
        setEventsFiltered(events.filter(event => event.title.toLowerCase().includes(input.toLowerCase())));
    }else{
         setEventsFiltered(events)
        }
   
  }


    if (isLoading) {
      return <LoadingSpinner/>
    }

    if (error) {
      return <Text>Error al cargar eventos</Text>;
    }
  

  return (
    <View>
        <Search onSearch={onSearch}/>
      <FlatList
        data={eventsFiltered} 
        renderItem={({ item }) => <EventItem event={item} />} 
        keyExtractor={(item) => item.id} 
        contentContainerStyle={{paddingBottom: 20}} 
      />
    </View>
  )
}

export default AllEvents

