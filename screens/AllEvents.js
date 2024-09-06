import Header from '../components/Header'
import Search from '../components/Search'
import { FlatList, Text, View, Image} from 'react-native'
import EventItem from '../components/EventItem'
import events from '../data/events.json'
import React, { useEffect, useState } from 'react'
import Counter from '../components/Counter'
import { useGetEventsQuery } from '../service/shop'





const AllEvents = () => {
  const { data: events, error, isLoading } = useGetEventsQuery();


  // const renderItem = ({item}) => <EventItem event={item} />;
  const [eventsFiltered,setEventsFiltered] = useState([])

  const onSearch = (input) => {

    if(input){
        setEventsFiltered(eventsFiltered.filter(event => event.title.includes(input) ))
    }else{
        setEventsFiltered(events.filter(event => event.category === category))
    }
   
  }

    //Mostrar un mensaje mientras los eventos están cargando
    if (isLoading) {
      return <Text>Cargando eventos...</Text>;
    }

  
    // Mostrar un mensaje de error si la carga falló
    if (error) {
      return <Text>Error al cargar eventos</Text>;
    }
  

  return (
    <>
 
        <Search/>
        <Counter/>
      <Text>TODOS LOS EVENTOS</Text>
      <FlatList
        data={events} 
        // renderItem={renderItem} 
        renderItem={({ item }) => <EventItem event={item} />} 
        keyExtractor={(item) => item.id} 
        contentContainerStyle={{paddingBottom: 20}} 
      />
    </>
  )
}

export default AllEvents

