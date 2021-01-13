import React from 'react';
import {View, Dimensions, StyleSheet, PixelRatio} from 'react-native';
import CustomeError from '../../components/Error/Error';
import VideoListContainer from '../../components/Home/VideoListContainer';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';
import Seacrh from '../../components/Search/Seacrh';
import {useGetAllMovies} from '../../hooks';

const {height, width} = Dimensions.get('window');

const Home = () => {
  return (
    <View style={styles.container}>
      <Seacrh />
      <VideoListContainer />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: (3 * width * PixelRatio.get()) / 100,
    paddingVertical: (height * 2) / 100,
  },
});
