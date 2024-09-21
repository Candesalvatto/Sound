import { Image, Pressable, StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetEventByIdQuery } from '../service/shop';
import { addItemCart } from '../features/cart/cartSlice';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useState } from 'react';
import { MapPreview } from '../components/MapPreview';

const ItemDetail = ({route}) => {


  const {id} = route.params 
  const { data: event, isLoading, isError } = useGetEventByIdQuery(id);
   const navigation = useNavigation()
  const dispatch = useDispatch()
  const [selectedTicket, setSelectedTicket] = useState('General');

  if (id === null || id === undefined) {
    return <Text>Error: No ID provided.</Text>;
  }


  const handleAddItemCart = () => {
    const ticketPrice = event.tickets[selectedTicket];
    if (typeof ticketPrice !== 'number' || isNaN(ticketPrice)) {
      console.error("Precio inválido:", ticketPrice);
      return;
    }
    dispatch(addItemCart(
      {
        id: event.id,
        price: ticketPrice,
        quantity: 1,
        title: event.title,
        image: event.image,
        type: selectedTicket
      }
    ))
    navigation.navigate("CartStack")
  }

   if (isLoading) return <LoadingSpinner/>;

  if (isError) return <Text>Error loading event details</Text>;

  return (

    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{uri: event.image}}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.description}>Organiza: {event.organizer}</Text>
          <View style={styles.icons}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text style={styles.price}> {event.day}</Text>
          <SimpleLineIcons name="clock" size={24} color="black" style={styles.iconSimple}/>
          <Text style={styles.price}>           {event.hour}</Text>
          </View>
          <View style={styles.icons}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.price}>Lugar:  {event.location}</Text>
        </View>

        <Text style={styles.acercade}>acerca del evento</Text>
        <Text style={styles.description}> {event.description}</Text>
        <MapPreview location={event.locationCoords} /> 
        </View>
       
          <View style={styles.containerCards}>
            <Text style={styles.acercadetickets}>tickets</Text>
            {Object.keys(event.tickets).map((ticketType) => (
                <Pressable
                  key={ticketType}
                  style={[styles.cards, selectedTicket === ticketType && styles.selectedTicket]}
                  onPress={() => {
                    setSelectedTicket(ticketType); 
                    handleAddItemCart();
                  }}
                >
                  <Text style={styles.descriptionTickets}>{ticketType}</Text>
                  <Text style={styles.descriptionTickets}>$  {event.tickets [ticketType]}</Text>
                </Pressable>
              ))}
            <View>
            </View>
          </View>

      </View>
      </ScrollView>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",

  },
  acercade:{          fontFamily: 'AuthorBold',
    fontSize:19,
    borderTopWidth:1,
    marginTop:20,
    paddingTop:10
  },

  containerDetail:{
    overflow:'hidden',
    justifyContent:'center',
    alignItems:'center',
  },
  icons:{flexDirection:'row'},
  iconSimple:{paddingLeft:20},
  containerText:{
    width:"100%",
    gap:20,
    margin:20,
    paddingLeft:15,

  },
  title:{
    fontSize:40,
    fontFamily: 'AuthorBold',
    letterSpacing:1
  },
  description:{
    fontSize:20,
    fontFamily: 'AuthorRegular',
  },
  price:{
    fontSize:22,
    fontFamily: 'AuthorRegular',
  },
  image:{
    width:"100%",
    height:200

  },
  containerCards:{
    width: '100%',
    justifyContent: "center",
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    marginTop: 50,
    borderTopWidth:2,
    marginBottom:50
  },
  cards:{
    backgroundColor:'rgba(0, 0, 0, 0.15)',
    width: '90%',
margin:'auto',
borderRadius:10,
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 25,
padding:15

  },
  acercadetickets:{
    fontFamily: 'AuthorBold',
    fontSize:23,
    paddingLeft:10,
    marginTop:20
  },
  descriptionTickets:{
    fontFamily: 'AuthorBold',
    fontSize:18
  }
})