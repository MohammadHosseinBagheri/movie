import React, {createContext, useState, useContext} from 'react';
import {toggleFavorite} from '../../utils/toggle-favorite-movie';
export const FavoriteMovieState = createContext();
export const FavoriteMovieDispatch = createContext();
const FavoriteMovieProvider = (props) => {
  const {children} = props;
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoriteMovieState.Provider value={favorite}>
      <FavoriteMovieDispatch.Provider value={setFavorite}>
        {children}
      </FavoriteMovieDispatch.Provider>
    </FavoriteMovieState.Provider>
  );
};

const useFavoriteMovieState = () => useContext(FavoriteMovieState);
const useFavoriteMovieDispatch = () => {
  const dispatch = useContext(FavoriteMovieDispatch);
  const state = useFavoriteMovieState();
  const setState = (item) => {
    dispatch(toggleFavorite(state, item));
  };
  return setState;
};
export {useFavoriteMovieDispatch, useFavoriteMovieState};
export default FavoriteMovieProvider;
