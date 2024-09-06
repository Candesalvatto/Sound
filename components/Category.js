import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const Category = ({item}) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={()=>navigation.navigate("Eventos", {category:item})}>
    <View style={styles.container}>
        <Text style={styles.text}>{item}</Text>
    </View>
    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        width:"90%",
        marginHorizontal:"5%",
        borderColor: 'black',
        borderWidth: 1,
        marginVertical:10,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:3,
 
    },
    text:{
        fontSize:16
    }
})