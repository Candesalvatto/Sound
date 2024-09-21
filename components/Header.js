import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {colors} from '../global/colors'

const Header = ({handleCategorySelected}) => {
  return (
    <View style={styles.container}>
        <View>
        {
        handleCategorySelected ?
          <Pressable style={styles.icon} onPress={() => handleCategorySelected("")}>
            <FontAwesome5  name="less-than" size={24} color="black" />
          </Pressable>
          :
          null
      }
            <Image 
            source={require('../assets/images/soundconicono.png')}
            style={styles.img}/>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    marginTop:52,
    backgroundColor: colors.purple,
    width:"100%",
    height:80,
    justifyContent:"space-between",
    flexDirection:'row',
    alignItems: "center"


  },
  icon:{
    marginRight: 10
},
img:{
    marginLeft:10,
    width:150,
    resizeMode: 'contain',
},
containerIcon:{
    flexDirection:'row'
}

})