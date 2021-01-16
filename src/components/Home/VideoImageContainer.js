import React from 'react';
import {StyleSheet, Image, TouchableOpacity, PixelRatio} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MySharedElement from '../SharedElement/MySharedElement';
import HeartContent from './HeartContent';
const VideoImageContainer = (props) => {
  const navigation = useNavigation();
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Description', {item: item});
      }}>
      <HeartContent item={item} />
      <MySharedElement id={`item.${item.id}.image`}>
        <Image
          resizeMode={'stretch'}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
          style={styles.imageStyle}
        />
      </MySharedElement>
    </TouchableOpacity>
  );
};

export default VideoImageContainer;

const styles = StyleSheet.create({
  imageStyle: {
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: PixelRatio.getPixelSizeForLayoutSize(60),
    width: PixelRatio.getPixelSizeForLayoutSize(50),
    zIndex: 0,
  },
});
