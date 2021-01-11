import React from 'react';
import {View, Text} from 'react-native';
import ConfigRoutes from './src/routes/Config';
import {QueryClient, QueryClientProvider} from 'react-query';
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        retry:true,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigRoutes />
    </QueryClientProvider>
  );
};

export default App;
