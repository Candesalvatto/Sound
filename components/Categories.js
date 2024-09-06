import { FlatList, StyleSheet, View } from 'react-native'
import categories from '../data/categories.json'
import Category from './Category'
import { useGetCategoriesQuery } from '../service/shop'
 //import { useSelector } from 'react-redux'

const Categories = () => {

   // trae categorias desde estado de redux
   //const categories = useSelector(state => state.shop.categories)



  //trae categorias desde firebase

   const {data:categories} = useGetCategoriesQuery()

  return (
    <View>
      <FlatList
        data={categories} // Propiedad `data` que contiene los datos a mostrar
        keyExtractor={item => item} //Función para extraer una clave única para cada elemento
        renderItem={({item}) => <Category item={item}/>} // Función para renderizar cada elemento
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})