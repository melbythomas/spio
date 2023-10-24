// App.tsx

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CardView from '../components/CardView';
import CommonHeader from '../components/CommonHeader';
import Buttons from '../components/Buttons';
import { DrawerActions } from '@react-navigation/native';

const data = [
  {
    id: '1',
    iconSource: 'icon-uri-1',
    name: 'Meeting',
    description: 'HillPlace old british station ernakulam',
    date: '07/10/2023 6.00pm',
  },
  {
    id: '2',
    iconSource: 'icon-uri-2',
    name: 'Meeting',
    description: 'HillPlace old british station ernakulam',
    date: '07/10/2023 6.00pm',
  },
  
];

  const DashBoard: React.FC<{ navigation: any }> = ({ navigation }) => {

    const handleLeftButtonPress = () => {
      console.log('Left Button Pressed');
    };
  
    const handleRightButtonPress = () => {
      console.log('Right Button Pressed');
    };

  return (
    <View style={{ flex: 1 }}>
       <CommonHeader title="DashBoard" navigation={navigation} />
      <Text style={styles.headingText}>Recent Log</Text>

       <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardView
            iconSource={item.iconSource}
            name={item.name}
            description={item.description}
            date={item.date}
          />
        )}
      />
      <Buttons text="Register Your Face" onPress={handleLeftButtonPress} position="left" />
      <Buttons text="Add Log" onPress={handleRightButtonPress} position="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginLeft:15,
    marginTop:15,
    color:'#000',
    fontSize:18
  },
  buttonText: {
    color: 'red',
    fontSize: 16,
    padding: 10,
  },
})
export default DashBoard;
