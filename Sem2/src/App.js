import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Forgot from './components/Forgot';
import Register from './components/Register';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />  
        </Route> 
        <Route exact path="/login">
          <Login />  
        </Route> 
        <Route exact path="/forgot">
          <Forgot />  
        </Route> 
        <Route exact path="/register">
          <Register />  
        </Route> 
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
