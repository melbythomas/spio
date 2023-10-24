import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomPasswordInput = ({ value, onChangeText }:any) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor="gray"
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
        {isPasswordVisible ? (
          <Image
            source={require('../assest/images/eyeOff.png')}
            style={styles.eyeImage}
          />
        ) : (
          <Image
            source={require('../assest/images/eyeOn.png')}
            style={styles.eyeImage}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#C8C8C8',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    marginTop:25
  },
  input: {
    flex: 1,
    height: 55,
    paddingLeft: 10, 
    color:'#000'
  },
  eyeIcon: {
    padding: 10,
  },
  eyeImage: {
    width: 24,
    height: 20,
  },
});

export default CustomPasswordInput;
