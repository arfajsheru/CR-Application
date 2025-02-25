import { View, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigation.replace("Home"); // Navigate to Home Screen
      }, 800); // Wait for fade-out animation
    }, 3000); // 5 second delay
  }, []);

  return (
    <Animatable.View 
      animation={fadeOut ? 'fadeOutLeft' : 'fadeInRight'}
      style={styles.container}
    >
      {/* Logo with Smooth Fade Animation */}
      <Animatable.Image
        animation="fadeInRight"
        source={require("../assets/AppLogo.png")}
        style={styles.logoImage}
      />

      {/* Small Subtitle Below */}
      <Animatable.Text animation="fadeInLeft" style={styles.subText}>
        Delicious flavors for every taste!
      </Animatable.Text>

      <Animatable.View animation="fadeInLeft" style={styles.vegbox}>
        <View style={styles.subVegbox}></View>
      </Animatable.View>
      <Animatable.View animation="fadeInRight" style={styles.nonVegbox}>
        <View style={styles.nonSubVegbox}></View>
      </Animatable.View>
    </Animatable.View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 340,
    height: 200,
  },
  subText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 17,
    color: 'black',
    textAlignVertical: 'bottom',
    fontWeight: '500',
  },
  vegbox: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subVegbox: {
    borderRadius: 20,
    width: 25,
    height: 25,
    backgroundColor: 'green'
  },
  nonVegbox: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nonSubVegbox: {
    borderRadius: 20,
    width: 25,
    height: 25,
    backgroundColor: 'red'
  }
});
