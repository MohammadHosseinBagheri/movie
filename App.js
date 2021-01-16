import React from 'react';
import {View, Text} from 'react-native';
import ConfigRoutes from './src/routes/Config';
import {QueryClient, QueryClientProvider} from 'react-query';
import GridProvider from './src/context/grid/Grid.provider';
import FavoriteMovieProvider from './src/context/favorite/Favorid.provider';
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        retry: true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteMovieProvider>
        <GridProvider>
          <ConfigRoutes />
        </GridProvider>
      </FavoriteMovieProvider>
    </QueryClientProvider>
  );
};

export default App;
