import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
