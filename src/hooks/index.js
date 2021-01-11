import {useQuery} from 'react-query';
import * as apis from '../apis';

const useGetAllMovies =  () => {
  return useQuery('movies', apis.getAllMovies);
};

export {useGetAllMovies};
