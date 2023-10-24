import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from '../screens/Dashboard';
import { Image, Text } from 'react-native';
import Imagescreen from '../screens/ImageScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dash"
        component={DashBoard}
        options={({ route }) => ({
          tabBarLabel: '', 
          tabBarIcon: ({ color, size }) => {
            const isFocused = route.name === 'Dash';

            // Define different images for selected and unselected states
            const iconSource = isFocused
              ? require('../assest/images/dashboard.png')
              : require('../assest/images/dashBlack.png');
              const labelStyle = {
                color: isFocused ? '#f30002' : '#000', // Change text color based on focus
                fontSize: isFocused ? 12 : 12, // Change font size based on focus
              };
            return (
              <>
              <Image source={iconSource} style={{ width: size, height: size, tintColor: isFocused?'#f30002' :'#000'}} />
              <Text style={labelStyle}>{'Dashboard'}</Text>
            </>);
          },
          headerShown: false,
        })}
      />
       {/* <Tab.Screen
        name="Image"
        component={Imagescreen}
        options={({ route }) => ({
          tabBarLabel: '', 
          tabBarIcon: ({ color, size }) => {
            const isFocused = route.name === 'Image';

            // Define different images for selected and unselected states
            const iconSource = isFocused
              ? require('../assest/images/dashboard.png')
              : require('../assest/images/dashBlack.png');
              const labelStyle = {
                color: isFocused ? '#f30002' : '#000', // Change text color based on focus
                fontSize: isFocused ? 12 : 12, // Change font size based on focus
              };
            return (
              <>
              <Image source={iconSource} style={{ width: size, height: size, tintColor: color}} />
              <Text style={labelStyle}>{'Image'}</Text>
            </>);
          },
          headerShown: false,
        })}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabBar;
