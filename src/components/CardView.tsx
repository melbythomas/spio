import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const localIcon = require('../assest/images/date.png');
const CardView: React.FC<{ iconSource: string; name: string; description: string,date:string }> = ({
  iconSource,
  name,
  description,date
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
      <Image source={localIcon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.extraContent}>
        <Text style={styles.dateStyle}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginLeft: 15,
    marginRight:15,
    marginTop:15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  iconContainer: {
    alignItems: 'flex-start',
    justifyContent:'flex-start',
  },
  icon: {
    width:30,
    height: 30,
  },
  textContainer: {
    flex: 3,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#f30002'
  },
  description: {
    fontSize: 14,
    color:'#848484'
  },
  extraContent: {
    flex: 2, 
  },
  dateStyle: {
    fontSize: 14,
    color:'#000'
  },
});

export default CardView;
