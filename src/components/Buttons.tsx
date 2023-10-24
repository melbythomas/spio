import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const addIcon = require('../assest/images/add.png');
const user = require('../assest/images/user.png');

const FloatingButton: React.FC<{ text: string; onPress: () => void; position: 'left' | 'right' }> = ({
  text,

  onPress,
  position,
}) => {
  const buttonStyle = position === 'left' ? styles.leftButton : styles.rightButton;

  return (
    position == 'left' ?
    <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Image source={user} style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>: 
    <TouchableOpacity style={[styles.buttonRightContainer, buttonStyle]} onPress={onPress}>
    <View style={styles.buttonContent}>
      <Image source={addIcon} style={styles.icon} />
      <Text style={styles.buttonTextRight}>{text}</Text>
    </View>
  </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    height: 60,
    padding:10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center', // Button background color
  },
  buttonRightContainer:{ position: 'absolute',
  bottom: 16,
  height: 60,
  padding:10,
  borderRadius: 30,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 4,
},
  leftButton: {
    left: 16,
  },
  rightButton: {
    right: 16,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
    tintColor: '#f30002', // Icon color
  },
  buttonText: {
    color: '#f30002',
    fontSize: 16,
    textDecorationLine: 'underline', // Add underline
    textDecorationColor: '#f30002',
  },
  buttonTextRight:{
    color: '#f30002',
    fontSize: 16,
    
  }
});

export default FloatingButton;
