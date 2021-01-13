import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const Description = (props) => {
  const [isLimitLine, setLimitLine] = useState(true);
  const {
    route: {
      params: {item},
    },
  } = props;
  const handlePress = () => {
    setLimitLine((prevState) => !prevState);
  };
  return (
    <>
      <Image style={styles.descriptionImage} source={{uri: item.poster_path}} />
      <ScrollView style={styles.descriptionDetailsContainer}>
        <View style={styles.descriptionTitleContainer}>
          <Text style={styles.descriptionTitleText}>2h 3m</Text>
          <Text style={styles.descriptionTitleText}>Adventure / Crime</Text>
          <Text style={styles.descriptionTitleText}>
            {item.original_language}
          </Text>
        </View>
        <View style={styles.descriptionSynopsisContainer}>
          <Text style={styles.descriptionTitleText}>Synopsis</Text>
          <Text
            numberOfLines={isLimitLine?2:20}
            style={[styles.descriptionTitleText, {fontWeight: 'none'}]}>
            {item.overview}
          </Text>
          <TouchableOpacity
            onPress={handlePress}
            style={{position: 'absolute', bottom: 0, right: 0}}>
            <Text style={{color:'#c62828'}} >{isLimitLine ? 'Read More' : 'See Less'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionDetailsContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: (2 * width * PixelRatio.get()) / 100,
  },
  descriptionImage: {
    width,
    height: height * 0.37,
  },
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
    textAlign:'justify'
  },
  descriptionSynopsisContainer: {
    paddingVertical: 20,
  },
});
