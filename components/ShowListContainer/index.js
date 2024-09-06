import { StyleSheet, FlatList } from 'react-native'
import CardShows from './CardShows'

const index = ({shows,handleVisibleModal}) => {
  return (
    <FlatList
        data={shows}
        keyExtractor={item => item.id}
        renderItem={({item})=> <CardShows
                                    show={item} 
                                    handleVisibleModal={handleVisibleModal}
        />}
    />
  )
}

export default index

const styles = StyleSheet.create({

})