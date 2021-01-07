import React from 'react';
import {Input, Item} from 'native-base';
import {StyleSheet, Dimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Seacrh = () => {
  return (
    <Item style={styles.container}>
      <Icon style={styles.iconStyle} name="search" />
      <Input style={styles.inputStyle} placeholder="Search" />
    </Item>
  );
};

export default Seacrh;
const styles = StyleSheet.create({
  container: {
    height: (height * 5) / 100,
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#B0BEC5',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    borderRadius: (width * 5) / 100,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  inputStyle: {
    textAlign: 'center',
    fontSize: 12,
  },
  iconStyle: {},
});
