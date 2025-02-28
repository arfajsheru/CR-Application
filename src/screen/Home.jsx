import React from 'react';
import Header from '../component/Header';
import {ScrollView, StyleSheet, View} from 'react-native';
import ChatBoat from '../component/ChatBoat';
import Category from '../component/Category';
import ProductItem from '../component/ProductItem';
import BestSeller from '../component/BestSeller';
const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Header />
        <ChatBoat />
        <Category />
        <BestSeller />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
});
