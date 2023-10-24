// App.tsx

import React from 'react';
import { View, Text } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabBar from './src/components/BottomTabBar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen}  options={{
    headerShown: false}}/>
      <Stack.Screen name="Home" component={BottomTabBar}  options={{
    headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
