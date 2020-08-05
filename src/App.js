import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routers/Home';

library.add(faMusic, faPlayCircle);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
