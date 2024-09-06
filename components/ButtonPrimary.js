import { StyleSheet,Pressable,Text } from 'react-native'

const ButtonPrimary = ({text, onPress, style, children}) => {

  return (
            <Pressable onPress={onPress} style={[styles.button,style]}>
                {children}
                <Text style={styles.textButton}>{text}</Text>
            </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button:{
        padding:15,
        backgroundColor:"#48005e",
        flexDirection: 'row',
        margin:10,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        gap:10,
        width: '80%',
      },
      textButton:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
      }
})