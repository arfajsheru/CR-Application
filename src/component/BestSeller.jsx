import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';

const BestSeller = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BestSeller Products</Text>

      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>

      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>

      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>
      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>
      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>
      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>
      <View style={styles.row}>
        <ProductItem />
        <ProductItem />
      </View>
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row', // ✅ Row-wise alignment
    justifyContent: 'space-between', // ✅ Space between items
    marginBottom: 10, // ✅ Spacing between rows
  },
});
