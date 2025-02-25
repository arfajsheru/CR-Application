import { View, Text } from 'react-native'
import React from 'react'

const BottomTabNavigator = () => {
  return (
    <View>
      <Text>BottomTabNavigator</Text>
    </View>
  )
}

export default BottomTabNavigator


// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from '../screen/Home';
// import About from '../screen/About';
// import Menu from '../screen/Menu';
// import Search from '../screen/Search';
// import Order from '../screen/Order';
// import Cart from '../screen/Cart';
// import Wishlist from '../screen/Wishlist';

// const Bottom = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   return (
//     <Bottom.Navigator>
//         <Bottom.Screen name='Menu' component={Menu} options={{
//             tabBarIcon: ({size,color}) => {
//                 return (
//                     <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/menu.png")} />
//                 )
//             },
//             headerShown: false}}/>
//         <Bottom.Screen name='Order' component={Order}  options={{
//             tabBarIcon: ({size,color}) => {
//                 return (
//                     <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/order.png")} />
//                 )
//             },
//             headerShown: false}}/>
//         <Bottom.Screen name='Search' component={Search}  options={{
//             tabBarIcon: ({size,color}) => {
//                 return (
//                     <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/search.png")} />
//                 )
//             },
//             headerShown: false}}/>
//         <Bottom.Screen name='Cart' component={Cart}  options={{
//             tabBarIcon: ({size,color}) => {
//                 return (
//                     <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/cart.png")} />
//                 )
//             },
//             headerShown: false}}/>
//         <Bottom.Screen name='Wishlist' component={Wishlist}  options={{
//             tabBarIcon: ({size,color}) => {
//                 return (
//                     <Image style={{width:size, height:size, tintColor:'black'}} source={require("../assets/wishlist.png")} />
//                 )
//             },
//             headerShown: false}}/>
//     </Bottom.Navigator>
//   )
// }

// export default BottomTabNavigator;