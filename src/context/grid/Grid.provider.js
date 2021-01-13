import React, {createContext, useState, useContext} from 'react';

export const GridDispatch = createContext();
export const GridState = createContext();

const GridProvider = ({children}) => {
  const [isCollapse, setCollapse] = useState(true);
  return (
    <GridState.Provider value={isCollapse}>
      <GridDispatch.Provider value={setCollapse}>
        {children}
      </GridDispatch.Provider>
    </GridState.Provider>
  );
};

const useGridState = () => useContext(GridState);

const useGridDispatch = () => {
  const dispatch = useContext(GridDispatch);
  const setState = (state) => {
    dispatch(!state);
  };
  return setState;
};

export {useGridState, useGridDispatch};
export default GridProvider;
