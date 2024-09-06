import { Image, Pressable, StyleSheet, Text, View ,SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
// import events from '../data/events.json'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import ShadowWrapper from '../components/ShadowWrapper'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetEventByIdQuery } from '../service/shop';
import { addItemCart } from '../features/cart/cartSlice';

const ItemDetail = ({route}) => {


  const {id} = route.params 
  const { data: event, isLoading, isError } = useGetEventByIdQuery(id);
   const navigation = useNavigation()
  const dispatch = useDispatch()

  if (!id) {
    return <Text>Error: No ID provided.</Text>;
  }


  const handleAddItemCart = () => {
    dispatch(addItemCart({...event,quantity:1}))
    navigation.navigate("CartStack")
  }

   if (isLoading) return <Text>Loading...</Text>;

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
          <Text style={styles.description}>{event.organizer}</Text>
          <View style={styles.icons}>
          <AntDesign name="calendar" size={24} color="black" />
          <Text style={styles.price}> {event.day}</Text>
          <SimpleLineIcons name="clock" size={24} color="black" style={styles.iconSimple}/>
          <Text style={styles.price}> {event.hour}</Text>
          </View>
          <View style={styles.icons}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.price}> {event.location}</Text>
        </View>


        <Text style={styles.acercade}>acerca del evento</Text>
        <Text style={styles.description}> {event.description}</Text>
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
        
          <View style={styles.containerCards}>
            <Text style={styles.acercadetickets}>tickets</Text>
            <ShadowWrapper>
            <View style={styles.cards}>
              <Text style={styles.descriptionTickets}> Pack 4 x 3</Text>
              <Text style={styles.descriptionTickets}>  {event.price} </Text>
            </View>
            <View>

            <Text style={styles.description}> {event.price} </Text>
            </View>
            </ShadowWrapper>
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
    borderWidth:2,
  },
  acercade:{    fontFamily: 'MullerBold',
    fontSize:17
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
    paddingLeft:15
  },
  title:{
    fontSize:35,
    fontFamily: 'MullerBold',
    letterSpacing:1
  },
  description:{
    fontSize:18,
    fontFamily: 'MullerRegular',
  },
  price:{
    fontSize:20,
    fontFamily: 'MullerMedium',
  },
  image:{
    width:"100%",
    height:200

  },
  button:{
    width:"100%",
    marginHorizontal:"10%",
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    borderRadius:50,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    fontSize:20

  },
  buttonText:{
    color:"white",
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 2,

  },
  containerCards:{
    width: '100%',
    justifyContent: "center",
    borderTopColor: 'rgba(0, 0, 0, 0.15)',
    marginTop: 50,
    borderTopWidth:2
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
    fontFamily: 'MullerBold',
    fontSize:23,
    paddingLeft:10,
    marginTop:20
  },
  descriptionTickets:{
    fontFamily: 'MullerBold',
    fontSize:18
  }
})