import { FlatList, StyleSheet, View } from 'react-native'
import Category from './Category'
import { useGetCategoriesQuery } from '../service/shop'


const Categories = () => {


   const {data:categories} = useGetCategoriesQuery()

  return (
    <View>
      <FlatList
        data={categories} 
        keyExtractor={item => item} 
        renderItem={({item}) => <Category item={item}/>} 
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})