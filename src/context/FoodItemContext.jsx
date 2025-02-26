import { View, Text } from 'react-native'
import React, { createContext } from 'react'

export const FoodItemContext = createContext(); 

const FoodItemProvider = ({ children }) => {
  return (
    <FoodItemContext.Provider>
        { children }
    </FoodItemContext.Provider>
  )
}

export default FoodItemProvider