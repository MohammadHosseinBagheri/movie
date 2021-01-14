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
import {SharedElement} from 'react-navigation-shared-element';
import {useGridState} from '../../context/grid/Grid.provider';
import {useNavigation} from '@react-navigation/native';
import {useGetMovieDetails} from '../../hooks';

const {width, height} = Dimensions.get('window');
const VideoCard = (props) => {
  const {item, index} = props;
  const gridStatus = useGridState();
  const navigation = useNavigation();
  console.log(item.id);
  return (
    <View style={styles.videoContainer}>
      {!gridStatus && (
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
      )}
      <TouchableOpacity
        onPress={() => {
          navigation.push('Description', {item: item});
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 100,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon style={{color: '#546E7A'}} name="heart" />
        </TouchableOpacity>
        <SharedElement id={`item.${item.id}.image`}>
          <Image
            resizeMode={'stretch'}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            }}
            style={{
              justifyContent: 'space-between',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              height: PixelRatio.getPixelSizeForLayoutSize(60),
              width: PixelRatio.getPixelSizeForLayoutSize(50),
              zIndex: 0,
            }}
          />
        </SharedElement>
      </TouchableOpacity>
    </View>
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
  videoSideDetailsContainer: {
    marginHorizontal: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  videoSideDetailsHeader: {},
  videoSideDetailsFooter: {},
});
