// CustomEmailInput.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomEmailInput = ({ value, onChangeText }:any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={isFocused ? styles.inputFocused : styles.input}
        placeholder="Email"
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#C8C8C8',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    // height:55
  },
  input: {
    width: 300,
    height: 55,
    paddingLeft: 10,
    color:'#000'
  },
  inputFocused: {
    width: 300,
    height: 55,
    paddingLeft: 10,
    borderColor: '#C8C8C8',
    // borderColor: 'blue', // Customize focused state style
    borderWidth: 2,
    color:'#000' // Customize focused state style
  },
});

export default CustomEmailInput;
