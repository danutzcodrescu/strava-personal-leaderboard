import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthGuard } from './components/authentication/AuthGuard.component';
import { Login } from './components/authentication/Login.component';
import { LoginCallback } from './components/authentication/LoginCallback.component';
import { Dashboard } from './components/dashboard/Dashboard.component';
import { client } from './graphql';
import { theme } from './theme';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/callback">
              <LoginCallback />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <AuthGuard>
              <Route path="/">
                <Dashboard />
              </Route>
            </AuthGuard>
          </Switch>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
