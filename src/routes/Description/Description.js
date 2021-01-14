import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
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
import {SharedElement} from 'react-navigation-shared-element';
import {getMovieDetails} from '../../apis';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';
import {useGetAllMovies, useGetMovieDetails} from '../../hooks';
import {getMoviesCache} from '../../hooks/react--query';
const {width, height} = Dimensions.get('window');
const Description = (props) => {
  const [isLimitLine, setLimitLine] = useState(true);
  const {
    route: {
      params: {item},
    },
  } = props;
  const id = item.id;
  const navigation = useNavigation();
  const [detail, setDetail] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getDetails = async (id) => {
      setLoading(true);
      const data = await getMovieDetails(id);
      if (data) {
        setDetail(data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    getDetails(id);
  }, []);
  const handlePress = () => {
    setLimitLine((prevState) => !prevState);
  };
  return (
    <>
      <SharedElement id={`item.${item.id}.image`}>
        <Image
          resizeMode={'stretch'}
          style={styles.descriptionImage}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
        />
      </SharedElement>
      <TouchableOpacity
        style={{position: 'absolute', left: 5, top: 0}}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" style={{color: '#455A64'}} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.descriptionDetailsContainer}>
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
            numberOfLines={isLimitLine ? 2 : 20}
            style={[styles.descriptionTitleText, {fontWeight: '100'}]}>
            {item.overview}
          </Text>
          <TouchableOpacity
            onPress={handlePress}
            style={{position: 'absolute', bottom: 0, right: 0}}>
            <Text style={{color: '#c62828'}}>
              {isLimitLine ? 'Read More' : 'See Less'}
            </Text>
          </TouchableOpacity>
        </View>
        {isLoading && <LoadingSpinner />}
        {detail && (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToInterval={100}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 30,
            }}
            pagingEnabled>
            {detail?.production_companies?.map((company) => (
              <View
                style={{
                  marginHorizontal: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${company.logo_path}`,
                  }}
                  resizeMode={'stretch'}
                  style={{width: 50, height: 50}}
                />
                <Text style={styles.descriptionTitleText} >{company.name}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </>
  );
};

Description.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [`item.${item.id}.image`];
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
    height: height * 0.44,
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
    textAlign: 'justify',
  },
  descriptionSynopsisContainer: {
    paddingVertical: 20,
  },
});
