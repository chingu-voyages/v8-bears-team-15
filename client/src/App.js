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
  faBookmark,
  faHighlighter,
  faChevronLeft,
  faChevronRight,
  faPlusCircle,
  } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { createBrowserHistory } from 'history';


import './App.css';
import Home from './components/Home/Home';
import DashBoardHome from './components/Dashboard/Home/Home';
import Setting from './components/Dashboard/Setting/Setting';
import AuxComp from '../src/HOC/AuxComp/AuxComp';
import Auth from '../src/HOC/Auth/Auth';

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
  faBookmark,
  faShieldAlt,
  faTrash,
  faHighlighter,
  faPlusCircle,
  faChevronLeft,
  faChevronRight,
  fab)

export const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <AuxComp>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/login' component={Home} />
            <Route  path="/jobs" component={Auth(DashBoardHome)} />
            <Route  path="/setting" component={Auth(Setting)} />
         </Switch>
      </Router>
      </AuxComp>
    );
  }
}

export default App;
