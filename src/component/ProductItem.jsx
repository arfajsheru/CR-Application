import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const ProductItem = () => {
  const data = {
    id: '1',
    name: 'Dahi Raita',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.!',
    current_Price: 40,
    original_Price: 60, // Example original price
    offer: 20, // Example discount
    category: 'Veg',
    subCategory: 'Dahi salad',
    image: require('../assets/food1.jpg'),
    rating: {stars: 4.5, view: 1400},
  };

  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={data.image} />
        <View style={styles.ratingcontainer}>
          <Text style={styles.rating}>
            {data.rating.stars}★ | {data.rating.view}
          </Text>
        </View>

        <View style={styles.offercontainer}>
          <Text style={styles.offertext}>
            {data.offer}%{'\n'}OFF
          </Text>
         
        </View>
      </View>
      <View>
        <Text style={styles.categoryText}>
          {data.category} | {data.subCategory}
        </Text>
      </View>
      <Text style={styles.name}>{data.name}</Text>

      <View style={styles.btnpriceContainer}>

      <Text style={styles.price}>
        ₹{data.current_Price}{' '}
        <Text style={styles.originalPrice}>₹{data.original_Price}</Text>
      </Text>

      <TouchableOpacity style={styles.addbtn} activeOpacity={1}>
        <Text style={styles.addbtntext}>Add</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    margin: 10,
    width: '45%',
    marginBottom: 10,
    marginLeft: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%', // Pura cover karega
    height: 160, // Height correct kar diya
    justifyContent: 'center',
    alignContent: 'center',
    position: 'relative', // Relative diya taki child (rating) absolute ho sake
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 800,
    color: '#737987',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  rating: {
    fontSize: 11,
    color: '#ad954f',
    fontWeight: 'bold',
  },
  ratingcontainer: {
    position: 'absolute',
    bottom: 3, // Image ke bilkul bottom pe
    left: 3, // Image ke bilkul left pe
    backgroundColor: '#ffffffb7',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 2, // Thoda rounded effect
  },
  offercontainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#ea580c',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderStartStartRadius: 7,
    borderEndEndRadius: 7,
    borderRightWidth:3,
    borderColor:'white'
  },
  offertext: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#fff',
  },
  wavyBorder: {
    position: 'absolute',
    bottom: -7, // Wave ko neeche shift karne ke liye
    left: 0,
  },
  addbtn: {
    borderWidth:2,
    borderColor: "#ad954f",
    paddingVertical:4,
    width:"40%",
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center'

  },
  addbtntext:{
    fontSize:20,
    fontWeight:'bold',
    color:"#ad954f",
    textAlign:'center'
  },
  btnpriceContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
});
