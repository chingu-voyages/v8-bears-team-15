import React, { Component } from 'react';
import { Router, Switch, Route} from 'react-router-dom';

import { createBrowserHistory } from 'history';

import './App.css';
import Home from './components/Home/Home';
import DashBoardHome from './components/Dashboard/Home/Home';

export const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/jobs" component={DashBoardHome} />
        </Switch>
      </Router>
    );
  }
}

export default App;
