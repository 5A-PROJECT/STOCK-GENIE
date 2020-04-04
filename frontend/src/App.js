import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/home/Main';
import LoginContainer from './pages/auth/Login/LoginContainer';
import Register from './pages/auth/Register';
import styled from 'styled-components';

const AppWrapper = styled.div`
  padding: 1rem;
`;

function App() {
  return (
    <Router>
      <Switch>
        <AppWrapper>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={Register} />
        </AppWrapper>
      </Switch>
    </Router>
  );
}

export default App;
