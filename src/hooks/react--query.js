import {QueryCache,} from 'react-query';

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});
const getMoviesCache = () => {
  const query = queryCache.findAll('movies');
  console.log(query)
  return query;
};

export {getMoviesCache};
