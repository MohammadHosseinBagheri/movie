import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useGridDispatch, useGridState} from '../../context/grid/Grid.provider';
const VideoListHeader = () => {
  const gridStatus = useGridState();
  const gridDispatch = useGridDispatch();
  return (
    <View style={styles.videoHeader}>
      <Text style={styles.videoHeaderText}>Most Popular</Text>
      <TouchableOpacity onPress={() => gridDispatch(gridStatus)}>
        <Icon
          size={20}
          name={!gridStatus ? 'grid-outline' : 'list-outline'}
          color="#37474F"
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoListHeader;

const styles = StyleSheet.create({
  videoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginVertical: 5,
    flexDirection: 'row',
  },
  videoHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#37474F',
  },
});
