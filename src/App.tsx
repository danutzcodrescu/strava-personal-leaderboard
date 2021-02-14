import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ActivityComponent } from './components/activity/Activity.component';
import { AuthGuard } from './components/authentication/AuthGuard.component';
import { Login } from './components/authentication/Login.component';
import { LoginCallback } from './components/authentication/LoginCallback.component';
import { Dashboard } from './components/dashboard/Dashboard.component';
import { SegmentComponent } from './components/segment/SegmentComponent';
import { client } from './graphql';
import { theme } from './theme';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
