import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const BackRouteButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Icon size={30} name="arrow-back-outline" style={{color: '#455A64'}} />
    </TouchableOpacity>
  );
};

export default BackRouteButton;

const styles = StyleSheet.create({
  button: {position: 'absolute', left: 5, top: 0},
});
