import React, { Component } from 'react';
import { Router, Switch, Route} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import './App.css';
import Home from './components/Home/Home';

export const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
