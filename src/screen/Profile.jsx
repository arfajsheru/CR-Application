import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white',width:'90%', padding: 10}}>
      <Image source={require('../assets/profile.png')} style={styles.image} />
      <Text style={styles.profiletext}>{'View Profile'}</Text>

      <TouchableOpacity style={styles.navContainer}  onPress={()=> navigation.navigate('Home')}>
        <Image source={require('../assets/home.png')} style={styles.navImage} />
        <Text style={styles.navText}>{'Home'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navContainer} onPress={()=> navigation.navigate('About')}>
        <Image source={require('../assets/about.png')} style={styles.navImage}  />
        <Text style={styles.navText}>{'About'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navContainer} onPress={()=> navigation.navigate('Contact')}>
        <Image source={require('../assets/contact.png')} style={styles.navImage}  />
        <Text style={styles.navText}>{'Contact'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navContainer}  onPress={()=> navigation.navigate('Login')}>
        <Image source={require('../assets/login.png')} style={styles.navImage} />
        <Text style={styles.navText}>{'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navContainer} onPress={()=> navigation.navigate('Signup')}>
        <Image source={require('../assets/signup.png')} style={styles.navImage} />
        <Text style={styles.navText}>{'Signup'}</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  profiletext: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginTop: 10,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width:'90%',
    height:50,
  },
  navImage: {
    width: 30,
    height: 30,
  },
  navText: {
    fontSize: 20,
    fontWeight: 300,
  },
});
