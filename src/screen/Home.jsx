import React from 'react';
import Header from '../component/Header';
import {StyleSheet, View} from 'react-native';
import ChatBoat from '../component/ChatBoat';
const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <ChatBoat />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex:1,
    backgroundColor:'#fff',
    position:"relative"
  }
})
