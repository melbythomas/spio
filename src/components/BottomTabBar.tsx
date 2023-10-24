import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dash" component={DashBoard} />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
