import { View, Text } from 'react-native'
import React from 'react'

const DrawerNavigator = () => {
  return (
    <View>
      <Text>DrawerNavigator</Text>
    </View>
  )
}

export default DrawerNavigator

// import {Image, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from '../screen/Home';
// import About from '../screen/About';
// import Contact from '../screen/Contact';
// import Login from '../screen/Login';
// import Signup from '../screen/Signup';
// import HelpSupport from '../screen/HelpSupport';
// import Profile from '../screen/Profile';
// const Drawer = createDrawerNavigator();
// const DrawerNavigator = () => {
//   return (
//     <NavigationContainer

//     >
//       <Drawer.Navigator
//        screenOptions={({navigation}) => ({
//         headerLeft: () => (
//           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//             <Image
//               source={require('../assets/login.png')} // Yahan apna icon lagao
//               style={{
//                 width: 30,
//                 height: 30,
//                 marginLeft: 15,
//                 tintColor: 'black', // Color change karne ke liye
//               }}
//             />
//           </TouchableOpacity>
//         ),
//       })}
//       >
//         <Drawer.Screen
//           name="Home"
//           component={Home}
//           options={{
//             drawerIcon: ({size, color}) => {
//               return (
//                 <Image
//                   style={{
//                     width: size,
//                     height: size,
//                     tintColor: color
//                 }}
//                   source={require('../assets/home.png')}
//                 />
//               );
//             },
//           }}
//         />
//         <Drawer.Screen name="About" component={About}
//         options={{
//             drawerIcon: ({size, color}) => {
//               return (
//                 <Image
//                   style={{
//                     width: size,
//                     height: size,
//                     tintColor: color
//                 }}
//                   source={require('../assets/about.png')}
//                 />
//               );
//             },
//           }}
//         />
//         <Drawer.Screen name="Contact" component={Contact} 
//         options={{
//             drawerIcon: ({size, color}) => {
//               return (
//                 <Image
//                   style={{
//                     width: size,
//                     height: size,
//                     tintColor: color
//                 }}
//                   source={require('../assets/contact.png')}
//                 />
//               );
//             },
//           }}
//         />
//         <Drawer.Screen name="HelpSupport" component={HelpSupport} 
//         options={{
//             drawerIcon: ({size, color}) => {
//               return (
//                 <Image
//                   style={{
//                     width: size,
//                     height: size,
//                     tintColor: color
//                 }}
//                   source={require('../assets/help.png')}
//                 />
//               );
//             },
//           }}
//         />
//         <Drawer.Screen name="Login" component={Login}
        
//         options={{
//             drawerIcon: ({size, color}) => {
//               return (
//                 <Image
//                   style={{
//                     width: size,
//                     height: size,
//                     tintColor: color
//                 }}
//                   source={require('../assets/login.png')}
//                 />
//               );
//             },
//           }}
//         />
//         <Drawer.Screen name="Signup" component={Signup} 
//         options={{
//             drawerIcon: ({size, color}) => {
//               return (
//                 <Image
//                   style={{
//                     width: size,
//                     height: size,
//                     tintColor: color
//                 }}
//                   source={require('../assets/signup.png')}
//                 />
//               );
//             },
//           }}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default DrawerNavigator;
