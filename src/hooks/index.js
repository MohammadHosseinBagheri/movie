import {useQuery} from 'react-query';
import * as apis from '../apis';

const useGetAllMovies = () => {
  return useQuery('movies', apis.getAllMovies);
};

const useGetMovieDetails = (id) => {
  return useQuery(['movie', id], (_, id) => apis.getMovieDetails(id));
};

export {useGetAllMovies, useGetMovieDetails};
