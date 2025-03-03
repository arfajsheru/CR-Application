import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Image
} from 'react-native';
import {FoodItemContext} from '../context/FoodItemContext';

const SuggestProducts = () => {
  const {setModalVisible, modalVisible} = useContext(FoodItemContext);
  const [productName, setProductName] = useState('');

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onPress={() => setModalVisible(false)}>
      {/* Background Overlay */}
      <TouchableOpacity style={styles.modalOverlay} activeOpacity={1}>
        {/* Prevent Clicks from Closing */}
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Suggest Product</Text>

          <Text style={styles.modealsubtext}>
            Didn't find what you are looking for? Please suggest the products
          </Text>

          {/* Input Box */}
          <TextInput
            style={styles.input}
            placeholder="Enter product name..."
            placeholderTextColor="#aaa"
            multiline={true}
            numberOfLines={5}
            value={productName}
            onChangeText={setProductName}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submit}>
            <Text style={styles.submittext}>Login</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.clsbtn} onPress={() => setModalVisible(false)}>
          <Image style={{width:15, height:15, resizeMode:'contain', tintColor:'#ad954d'}} source={require('../assets/close.png')} />
        </TouchableOpacity>
        </View>

      </TouchableOpacity>
    </Modal>
  );
};

export default SuggestProducts;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Black Transparent Background
    justifyContent: 'flex-end', // Center modal in screen
    alignItems: 'center',
  },
  modalContent: {
    position:'relative',
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    padding:20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'capitalize',
    color: '#ad954d',
    marginTop:20,
  },
  modealsubtext: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'medium',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height:180,
    borderWidth: 1,
    borderColor: '#ad954d',
    borderRadius: 3,
    paddingHorizontal: 15,
    fontSize: 16,
    textAlignVertical: 'top', // Text upar se start hoga
    backgroundColor: '#f9f9f9',
    marginTop:20,
  },
  submit: {
    backgroundColor: '#ad954f',
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center', // ✅ Horizontally center
    justifyContent: 'center', // ✅ Vertically center
    marginTop: 40,
  },
  submittext: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'medium',
    textTransform: 'uppercase',
  },
  clsbtn: {
    position:'absolute',
    right:15,top:9,
    backgroundColor:'#e0e0e0',
    padding:5,
    borderRadius:25,
  }

});
