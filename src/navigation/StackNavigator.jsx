import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contact from '../screen/Contact';
import About from '../screen/About';
import Login from '../screen/Login';
import Signup from '../screen/Signup';
import Splash from '../screen/Splash';
import BottomTabNavigator from './BottomTabNavigator';
import AiScreen from '../screen/AiScreen';

const stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator>
      {/* <stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
      <stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
      <stack.Screen name="Main" component={BottomTabNavigator} options={{headerShown:false}} />
      <stack.Screen name="About" component={About} />
      <stack.Screen name="Contact" component={Contact} />
      <stack.Screen name="AiScreen" component={AiScreen} />
    </stack.Navigator>
  );
};

export default StackNavigator;
