import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import CustomeError from '../Error/Error';
import LoadingSpinner from '../Loading/LoadingSpinner';
import {useGetAllMovies} from '../../hooks';
import VideoCard from './VideoCard';
import VideoListHeader from './VideoListHeader';
import {useGridState} from '../../context/grid/Grid.provider';

const {width, height} = Dimensions.get('window');
const VideoListContainer = () => {
  const {data, isLoading, isError, error} = useGetAllMovies();
  const gridStatus = useGridState();

  if (isError) {
    return <CustomeError error={error} />;
  }
  if (isLoading) {
    <LoadingSpinner />;
  }
  console.log('rerender');
  return (
    <View style={styles.videoContainer}>
      <VideoListHeader />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <FlatList
          data={data?.results}
          ListEmptyComponent={() => <LoadingSpinner />}
          keyExtractor={(_, index) => index.toString()}
          key={gridStatus ? 'h' : 'v'}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <VideoCard item={item} index={index} />
          )}
          numColumns={gridStatus ? 2 : 1}
        />
      </View>
    </View>
  );
};

export default VideoListContainer;

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    marginVertical: (PixelRatio.get() * height) / 100,
    flexDirection: 'column',
  },
});
