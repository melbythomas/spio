import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomEmailInput from '../components/CustomEmailInput';
import CustomPasswordInput from '../components/CustomPasswordInput';
import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// ...

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
const LoginScreen: React.FC<{ navigation: LoginScreenNavigationProp }> = ({ navigation }) => {

// const LoginScreen = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const navigation = useNavigation();

const validateForm = () => {
    const isEmailValid = email.trim() !== '';
    const isPasswordValid = password.trim() !== '';
    
    if (isEmailValid && isPasswordValid) {
      setIsFormValid(true);
      setErrorMessage(''); // Clear the error message
    } else {
      setIsFormValid(false);
      setErrorMessage('Please fill in all fields.');
    }
  };
  
  const onLoginPress = () => {
    
    validateForm();

    if (isFormValid) {
      setErrorMessage('')
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assest/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.loginText}>Login</Text>
      <CustomEmailInput onChangeText={(text: any) => setEmail(text)} />
      <CustomPasswordInput onChangeText={(text: any) => setPassword(text)} />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableOpacity
        style={styles.button}
        // disabled={!isFormValid}
        onPress={onLoginPress}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.copyText}>@ SPIO 2022 all rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 67,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#F30002', // Red color for the button
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Add margin to separate from the error message
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    width: 100,
    textAlign: 'center',
  },
  copyText:{
    color:"#000",
    fontSize:13,
    marginTop:70

  }
});

export default LoginScreen;
