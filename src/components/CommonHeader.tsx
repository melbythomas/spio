import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const localIcon = require('../assest/images/menu.png');

const CommonHeader: React.FC<{ title: string; navigation: any }> = ({ title, navigation }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.drawerIcon}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Image source={localIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#fff', // Header background color
  },
  title: {
    fontSize: 20,
    color: '#000', // Title text color
  },
  drawerIcon: {
    width: 30,
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icon: {
    width:30,
    height: 30,
  },
});

export default CommonHeader;
