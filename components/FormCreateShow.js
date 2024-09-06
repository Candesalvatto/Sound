import { StyleSheet, View, TextInput } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import AntDesign from '@expo/vector-icons/AntDesign'
// import ImagePicker from 'react-native-image-picker';

const FormCreateShow = ({showName,organizer, eventDate,eventLocation, setOrganizer,setEventDate, setEventLocation, handleShowName, handleVisibleModal}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder='Nombre del evento'
        value={showName}
        onChangeText={handleShowName}
      />
            <TextInput 
        style={styles.input} 
        placeholder='Organizador'
        value={organizer}
        onChangeText={setOrganizer}
      />
            <TextInput 
        style={styles.input} 
        placeholder='Dia del evento'
        value={eventDate}
        onChangeText={setEventDate}
      />
            <TextInput 
        style={styles.input} 
        placeholder='Lugar del evento'
        value={eventLocation}
        onChangeText={setEventLocation}
      />
      <ButtonPrimary onPress={handleVisibleModal} text="Agregar">
        <AntDesign name="pluscircle" size={24} color="white"  />
      </ButtonPrimary>
    </View>
  )
}

export default FormCreateShow

const styles = StyleSheet.create({
  container:{
    padding:10,
    alignItems: 'center'
  },
  input:{
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    marginBottom: 10, 
    borderRadius: 5,
    width: '80%',
  }
})