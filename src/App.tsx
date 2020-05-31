import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './components/authentication/Login.component';
import { LoginCallback } from './components/authentication/LoginCallback.component';
import { theme } from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/callback">
            <LoginCallback />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
