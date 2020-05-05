import React from 'react';
import Pokemones from './components/Pokemones';
import Navbar from './components/Navbar';
import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Pokemones} path="/" exact />
        <Route component={Login} path="/login" exact />
      </Switch>
    </Router>
  );
}

export default App;
