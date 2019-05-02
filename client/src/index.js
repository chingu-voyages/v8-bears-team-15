import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import {LOGGED_IN} from '../src/actions/actionConstants';




const store = configureStore();

const token = localStorage.getItem('token');
if(token){
  store.dispatch({
    type: LOGGED_IN
  })
}

const renderApp = () => 
render(
 <Provider store={store}>
   <App />
 </Provider>, 
 document.getElementById('root')
 );


 if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept( App, renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
