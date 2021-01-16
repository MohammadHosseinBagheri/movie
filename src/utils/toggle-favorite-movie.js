const toggleFavorite = (state, item) => {
    console.log(state,item)
  const isExist = state.find((movie) => movie.id === item.id);
  if (isExist) {
    return state.filter((movie) => movie.id !== item.id);
  }
  return [...state, item];
};

export {toggleFavorite};
