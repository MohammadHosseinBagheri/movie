import React from 'react';
import {StyleSheet, Text, View, PixelRatio} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const VideoTextContent = (props) => {
  const {item} = props;
  return (
    <View style={styles.videoSideDetailsContainer}>
      <View style={styles.videoSideDetailsHeader}>
        <Text>{item.title}</Text>
        <Text>
          {item.release_date} | {item.original_language}
        </Text>
      </View>
      <View>
        <Text>
          {item.vote_average}{' '}
          {
            <Icon
              style={{fontSize: PixelRatio.getFontScale() * 19}}
              name="people-circle-outline"
            />
          }{' '}
        </Text>
        <Text>
          {item.vote_count}{' '}
          {
            <Icon
              name="star-outline"
              style={{
                fontSize: PixelRatio.getFontScale() * 19,
                color: '#FFAB00',
              }}
            />
          }{' '}
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  videoSideDetailsContainer: {
    marginHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  videoSideDetailsHeader: {},
  videoSideDetailsFooter: {},
});
export default VideoTextContent;
