import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/home/Main';
import LoginContainer from './pages/auth/Login/LoginContainer';
import Register from './pages/auth/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
