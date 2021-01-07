import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Seacrh from '../../components/Search/Seacrh';

const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <Seacrh />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (4 * width) / 100,
    paddingVertical: (height * 2) / 100,
  },
});
