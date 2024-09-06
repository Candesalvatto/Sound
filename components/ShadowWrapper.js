

import { StyleSheet, Text, View } from 'react-native'

const ShadowWrapper = ({style,children}) => {
  
  return (
    <View style={[styles.container,style]}>
      {children}
    </View>
  )
}

export default ShadowWrapper

const styles = StyleSheet.create({
    container:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
    }
})