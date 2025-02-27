import { View, Text, TouchableOpacity, StyleSheet,TextInput,Image } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
            <Image
              source={require('../assets/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
            <TouchableOpacity style={styles.voiceBorder}>
              <Image
                style={styles.voiceIcon}
                source={require('../assets/voice.png')}
              />
            </TouchableOpacity>
          </View>
  )
}

export default SearchInput;


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight:8,
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
        borderLeftWidth:0.9,
        paddingLeft:5,
        borderColor: "#ad954f"
      }
})