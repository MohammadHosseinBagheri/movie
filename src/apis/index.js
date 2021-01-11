import axios from 'axios';
const getAllMovies = async () => {
  const {data} = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=0c96b6d842a99f43674710b91c5d5c8c&language=en-US&page=1',
  );
  return data;
};

export {getAllMovies};
