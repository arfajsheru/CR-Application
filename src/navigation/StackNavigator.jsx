import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import Contact from '../screen/Contact';
import About from '../screen/About';
import Login from '../screen/Login';
import Signup from '../screen/Signup';

const stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Signup' component={Signup} />
            <stack.Screen name='About' component={About} />
            <stack.Screen name='Login' component={Login} />
            <stack.Screen name='Home' component={Home} />
            <stack.Screen name='Contact' component={Contact} />
        </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
