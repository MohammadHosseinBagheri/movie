import {Icon} from 'native-base';
import React from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useGridState} from '../../context/grid/Grid.provider';
import {useGetMovieDetails} from '../../hooks';
import VideoImageContainer from './VideoImageContainer';
import VideoTextContent from './VideoTextContent';
import * as Animatable from 'react-native-animatable';
const AnimationView = Animatable.createAnimatableComponent(View);
const animation={
  0:{translateY:80,opacity:0},
  1:{translateY:0,opacity:1},
}
const {width, height} = Dimensions.get('window');
const VideoCard = (props) => {
  const {item, index} = props;
  const gridStatus = useGridState();
  console.log(item.id);
  return (
    <AnimationView  animation={animation} useNativeDriver delay={200} style={styles.videoContainer}>
      {!gridStatus ? <VideoTextContent item={item} /> : null}
      <VideoImageContainer item={item} />
    </AnimationView>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  videoContainer: {
    marginVertical: 10,
    // height: (PixelRatio.get() * 10 * height) / 100,
    display: 'flex',
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    padding: 2,
  },

  videoSideDetailsHeader: {},
  videoSideDetailsFooter: {},
});
