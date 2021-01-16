import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderContent = (props) => {
  const {item} = props;
  return (
    <View style={styles.descriptionTitleContainer}>
      <Text style={styles.descriptionTitleText}>2h 3m</Text>
      <Text style={styles.descriptionTitleText}>Adventure / Crime</Text>
      <Text style={styles.descriptionTitleText}>{item.original_language}</Text>
    </View>
  );
};

export default HeaderContent;

const styles = StyleSheet.create({
  descriptionTitleContainer: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  descriptionTitleText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#455A64',
    textAlign: 'justify',
  },
});
