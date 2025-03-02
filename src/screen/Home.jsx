import React from 'react';
import { StyleSheet, View, FlatList, StatusBar } from 'react-native';
import Header from '../component/Header';
import ChatBoat from '../component/ChatBoat';
import Category from '../component/Category';
import BestSeller from '../component/BestSeller';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <StatusBar backgroundColor="#ad954f" barStyle="light-content" />
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <Category />
          </>
        }
        data={[{ key: 'bestseller' }]} // Dummy data to render BestSeller component
        renderItem={() => <BestSeller />}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      />

      {/* ChatBoat ko Fixed Position pe rakha */}
      <View style={styles.chatBoatWrapper}>
        <ChatBoat />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatBoatWrapper: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    zIndex: 100,
  },
});
