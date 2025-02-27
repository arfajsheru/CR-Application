import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const gestureSequence = useRef([]);
  const correctPattern = ['UP', 'UP', 'DOWN', 'LEFT', 'RIGHT'];
  const timeoutRef = useRef(null);

  const resetGesture = () => {
    gestureSequence.current = [];
    console.log('Gesture sequence reset!');
  };

  const handleLogin = () => {
    if (email === 'test@gmail.com' && password === '123456') {
      navigation.replace('Main');
    } else {
      Alert.alert('Invalid Credentials', 'Please enter correct details.');
    }
  };

  const handleGestureEnd = (event) => {
    const { translationX, translationY } = event;
    let direction = null;

    if (translationY < -50) direction = 'UP';
    else if (translationY > 50) direction = 'DOWN';
    else if (translationX < -50) direction = 'LEFT';
    else if (translationX > 50) direction = 'RIGHT';
    
    if (direction) {
      gestureSequence.current.push(direction);
      console.log('Gesture detected:', direction);
    }
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(resetGesture, 3000); // 2 sec timeout

    if (
      gestureSequence.current.length === correctPattern.length &&
      gestureSequence.current.every((val, index) => val === correctPattern[index])
    ) {
      runOnJS(navigation.replace)('Main');
      resetGesture();
    } else if (gestureSequence.current.length > correctPattern.length) {
      resetGesture();
    }
  };

  const panGesture = Gesture.Pan().onEnd((event) => {
    runOnJS(handleGestureEnd)(event);
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGesture}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={{ borderWidth: 1, width: '80%', marginBottom: 10, padding: 10 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ borderWidth: 1, width: '80%', marginBottom: 10, padding: 10 }}
          />
          <Button title="Login" onPress={handleLogin} />
          <Text style={{ marginTop: 20 }}>Don't have an account?</Text>
          <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Login;
