import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

const SearchInput = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.searchContainer}>
      <Image
        source={require('../assets/search.png')}
        style={styles.searchIcon}
      />

      {/* Navigate to Search Screen on TextInput focus */}
      <TextInput
        placeholder="Search here..."
        placeholderTextColor="#888"
        style={styles.searchInput}
        onFocus={() => navigation.navigate('Search')}
      />

      <TouchableOpacity style={styles.voiceBorder}>
        <Image
          style={styles.voiceIcon}
          source={require('../assets/voice.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 8,
    height: 45,
    marginVertical: 15,
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
  voiceIcon: {
    width: 30,
    height: 30,
    tintColor: '#ad954f',
  },
  voiceBorder: {
    borderLeftWidth: 0.9,
    paddingLeft: 5,
    borderColor: '#ad954f',
  },
});
