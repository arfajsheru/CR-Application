import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Menu = () => {

  const {name} = useContext(AuthContext);
  return (
    <View style={{flex:1, backgroundColor:'red',}}>
      <Text>{name}</Text>
    </View>
  )
}

export default Menu