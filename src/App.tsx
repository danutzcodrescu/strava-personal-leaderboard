import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Outlet, Router } from 'react-location';
// import { ReactLocationDevtools } from 'react-location-devtools';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { theme } from './toolbox/theme';
import { queryClient } from './toolbox/client';
import { location, routes } from './toolbox/location';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router location={location} routes={routes}>
          <Outlet />
          {/* <ReactLocationDevtools position="bottom-right" /> */}
        </Router>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
