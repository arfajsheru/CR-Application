import {View, Text} from 'react-native';
import React from 'react';
import AuthProvider from './AuthContext';
import FoodItemProvider from './FoodItemContext';

const GloableProvider = ({children}) => {
  return (
    <AuthProvider>
      <FoodItemProvider>{children}</FoodItemProvider>
    </AuthProvider>
  );
};

export default GloableProvider;
