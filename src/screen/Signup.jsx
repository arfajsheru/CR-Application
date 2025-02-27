import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (email && password.length >= 6) {
      Alert.alert('Signup Successful', 'Now login with your details.');
      navigation.navigate('Login'); // ✅ Signup ke baad login pe le jana
    } else {
      Alert.alert('Invalid Details', 'Please enter a valid email & 6-digit password.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Signup</Text>
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
      <Button title="Signup" onPress={handleSignup} />
      <Text style={{ marginTop: 20 }}>Already have an account?</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />

    </View>
  );
};

export default Signup;
