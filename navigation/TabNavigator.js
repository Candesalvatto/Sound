import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import { StyleSheet, View , Text} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AllEventsStack from './AllEventsStack';
import ShopStack from './ShopStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileStack } from './ProfileStack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tab.Navigator
           screenOptions={
            {headerShown: false,
                tabBarShowLabel:true,
                tabBarStyle: styles.tabBar
            }
           }>

          <Tab.Screen 
            name="ShopStack" 
            component={ShopStack}
            options={{
                tabBarIcon:({focused}) =>(
                        <View>
                         
                        <AntDesign name="home" size={25} color={focused ? '#7b71ff' : '#ffffff99'} />
                        </View>
                ),
                tabBarLabel: ({ focused }) => (
                    <Text style={{ color: focused ? '#7b71ff' : '#ffffff99', fontSize: 10 }}>
                      Home
                    </Text>
)
            }}/>
            <Tab.Screen 
            name="AllEventsStack"
             component={AllEventsStack}
             options={{
                tabBarIcon:({focused}) =>(

                        <View>
                            <Feather name="calendar" size={25} color={focused ? '#7b71ff' : '#ffffff99'} />
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#7b71ff' : '#ffffff99', fontSize: 10 }}>
                          Eventos
                        </Text>
    )
            }}/>
          
           
            <Tab.Screen 
            name="CartStack" 
            component={CartStack}
            options={{
                tabBarIcon:({focused}) =>(
                        <View>
                        <MaterialCommunityIcons name="shopping-outline" size={25} color={focused ? 'white' : '#ffffff99'}  />  
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#7b71ff' : '#ffffff99', fontSize: 10 }}>
                          Carrito
                        </Text>
    )    
            }}/>
            <Tab.Screen 
            name="OrdersStack"
             component={OrdersStack}
             options={{
                tabBarIcon:({focused}) =>(
                        <View>
                                <Ionicons name="ticket-outline" size={28} color={focused ? '#7b71ff' : '#ffffff99'}    /> 
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#7b71ff' : '#ffffff99', fontSize: 10 }}>
                          Mis tickets
                        </Text>
    )
                
            }}/>
            <Tab.Screen 
            name="ProfileStack"
             component={ProfileStack}
             options={{
                tabBarIcon:({focused}) =>(
                        <View>
                                <FontAwesome5 name="user" size={28} color={focused ? '#7b71ff' : '#ffffff99'}    /> 
                        </View>
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? '#7b71ff' : '#ffffff99', fontSize: 10 }}>
                          Mi Perfil
                        </Text>
    )
                
            }}/>
           </Tab.Navigator>
  )
}
export default TabNavigator

const styles = StyleSheet.create(
    {
        tabBar:{
            backgroundColor: "#151226",
            elevation:4,
            position: 'absolut',

        }
    }
)