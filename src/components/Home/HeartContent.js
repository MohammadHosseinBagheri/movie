import React,{useEffect,useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  useFavoriteMovieDispatch,
  useFavoriteMovieState,
} from '../../context/favorite/Favorid.provider';

const HeartContent = (props) => {
  const state = useFavoriteMovieState();
  const dispatch = useFavoriteMovieDispatch();
  const [isFavorite, setFavorite] = useState(false);
  const {item} = props;
  // useEffect(() => {
  //   state?.map((movie) => {
  //     movie.id === item.id ? setFavorite(true) : setFavorite(false);
  //   });
  // }, [state,isFavorite]);
  return (
    <TouchableOpacity style={styles.button} onPress={() => dispatch(item)}>
      <Icon
        size={30}
        style={{color: isFavorite ? 'red' : '#546E7A'}}
        name="heart"
      />
    </TouchableOpacity>
  );
};

export default HeartContent;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
