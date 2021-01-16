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
import * as Animatable from 'react-native-animatable';
import MySharedElement from '../../components/SharedElement/MySharedElement';
import BackRouteButton from '../../components/BackRouteButton/BackRouteButton';
import ContentVideoDescription from '../../components/Description/ContentVideoDescription';
import CompanyDetail from '../../components/Description/CompanyDetail';
const AnimationScrollView = Animatable.createAnimatableComponent(ScrollView);
const animationa = {
  0: {opacity: 0, translateX: 50},
  1: {opacity: 1, translateX: 0},
};
const {width, height} = Dimensions.get('window');
const Description = (props) => {
  const {
    route: {
      params: {item},
    },
  } = props;
  const id = item.id;
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

  return (
    <>
      <MySharedElement id={`item.${item.id}.image`}>
        <Image
          resizeMode={'stretch'}
          style={styles.descriptionImage}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
          }}
        />
      </MySharedElement>
      <BackRouteButton />
      <AnimationScrollView
        animation={animationa}
        delay={300}
        useNativeDriver
        showsVerticalScrollIndicator={false}
        style={styles.descriptionDetailsContainer}>
        <ContentVideoDescription item={item} />
        {isLoading && <LoadingSpinner />}
        {detail && (
          <AnimationScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            useNativeDriver
            animation={animationa}
            delay={450}
            snapToInterval={100}
            contentContainerStyle={styles.animationScrollViewContentContainer}
            pagingEnabled>
            {detail?.production_companies?.map((company) => (
              <CompanyDetail company={company} />
            ))}
          </AnimationScrollView>
        )}
      </AnimationScrollView>
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
  animationScrollViewContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
});
