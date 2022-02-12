import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ActivityComponent } from './components/activity/Activity.component';
import { AuthGuard } from './components/authentication/AuthGuard.component';
import { Login } from './components/authentication/Login.component';
import { LoginCallback } from './components/authentication/LoginCallback.component';
import { Dashboard } from './components/dashboard/Dashboard.component';
import { SegmentComponent } from './components/segment/SegmentComponent';
import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './toolbox/client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/callback">
              <LoginCallback />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <AuthGuard>
              <Route exact path="/activity/:id" component={ActivityComponent} />
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/segment/:id" component={SegmentComponent} />
            </AuthGuard>
          </Switch>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
