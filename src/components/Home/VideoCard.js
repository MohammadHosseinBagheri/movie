import {Icon} from 'native-base';
import React from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useGridState} from '../../context/grid/Grid.provider';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const VideoCard = (props) => {
  const {item, index} = props;
  const gridStatus = useGridState();
  const navigation = useNavigation();

  console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Description', {item:item});
      }}>
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
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
          style={[
            {
              width: PixelRatio.getPixelSizeForLayoutSize(50),
              justifyContent: 'space-between',
              elevation: 2,
            },
          ]}
          imageStyle={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          width={PixelRatio.getPixelSizeForLayoutSize(50)}
          height={PixelRatio.getPixelSizeForLayoutSize(50)}>
          <View style={{height: '100%'}}></View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  videoContainer: {
    marginVertical: 20,
    height: (PixelRatio.get() * 10 * height) / 100,
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
