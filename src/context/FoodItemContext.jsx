import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const FoodItemContext = createContext({
  modalVisible,
}); 

const FoodItemProvider = ({ children }) => {
  const[modalVisible, setModalVisible] = useState(false),

  value = {
    modalVisible, setModalVisible
  }
  return (
    <FoodItemContext.Provider value={value}>
        { children }
    </FoodItemContext.Provider>
  )
}

export default FoodItemProvider