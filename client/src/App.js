import React, { Component } from 'react';
import { Router, Switch, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay,
  faEnvelope,
  faSearch,
  faBell, 
  faComment,
  faUserCircle,
  faCheckCircle,
  faTimesCircle,
  faTrash,
  faCircle,
  faShieldAlt,
  faChevronDown, 
  faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { createBrowserHistory } from 'history';


import './App.css';
import Home from './components/Home/Home';
import DashBoardHome from './components/Dashboard/Home/Home';
import Setting from './components/Dashboard/Setting/Setting';

library.add(faPlay, 
  faEnvelope,
  faSearch,
  faBell,
  faComment,
  faUserCircle,
  faChevronDown,
  faCheckCircle,
  faTimesCircle,
  faCircle,
  faShieldAlt,
  faTrash,
  faPlusCircle,
  fab)

export const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/jobs" component={DashBoardHome} />
          <Route  path="/setting" component={Setting} />
        </Switch>
      </Router>
    );
  }
}

export default App;
