// src/screens/LoginScreen.js

import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {users} from './Users';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = users.find(
      user => user.email === email && user.password === password,
    );

    if (user) {
      // User found, navigate to the home screen
      navigation.navigate('Tab');
    } else {
      // Invalid credentials, show an error message or handle it as needed
      alert('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Signup"
        onPress={() => navigation.navigate('Signup')}
        color="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
});

export default LoginScreen;
