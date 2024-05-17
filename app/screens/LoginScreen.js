import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  } from 'react-native';

const LoginScreen = ({ navigation }) => {

  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('Tab');
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  }
  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Jhon@gmail.com"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter a correct password"
        style={styles.input}
      />
      <Text style={styles.link} onPress={goToRegister}>Create New Account</Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.buttonText}>Login</Text>
      )}
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  input: {
    paddingVertical: 4,
    borderColor: "#444444",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
    button: {
    backgroundColor: '#444444',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10,
    paddingVertical: 4,
    color: '#0000aa',
    borderBottomColor: '#0000aa',
    borderBottomWidth: 0.5,
    width: 200

  }
});
export default LoginScreen;