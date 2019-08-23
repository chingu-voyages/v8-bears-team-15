import axios from 'axios';

import * as actionTypes from '../actionConstants';
import { history } from '../../App';

export function signIn(email) {
  return (dispatch) => {
    axios.post('/login', {
      email
    })
    .then((response) => {
      if(response.status === 401 || response.status === 400){
        dispatch({
          type: actionTypes.USER_ERROR,
          payload: response.data.error
        })
      }else{
        dispatch({
          type: actionTypes.SIGN_IN,
          payload: {
            data: response.data.user,
          }
        })
        localStorage.setItem('token', response.data.token)
        history.push('/jobs')
      }
    })
    .catch((err) => {
      if(err.response.status === 401){
        let errorMsg = 'Username or Password Incorrect'
        dispatch({
          type: actionTypes.USER_ERROR,
          payload: errorMsg
        })
      }
    })
  }
}

export function checkLogin(){
  return (dispatch) => {
    axios.get('/success')
    .then((response) => {
        if((response.status !== 401 || response.status !== 400)){
          dispatch({
            type: actionTypes.SIGN_IN,
            payload: {
              data: response.data.user,
              openInterval: false, 
            }
          })
          localStorage.setItem('token', response.data.token)
          history.push('/jobs')       
        } else{
          dispatch({
            type: actionTypes.USER_ERROR,
            payload: response.data.error
          })
        } 
    }).catch((err) => {
       console.log("ERROR AT SUCCESSS", err)
    })
  }
}


export function userDashBoard(){
  return (dispatch) => {
    let token = localStorage.getItem('token');
    axios.get('/jobs', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      dispatch({
        type: actionTypes.USER_DASHBOARD,
        payload: response.data,
      })
    })
    .catch(error => {
      console.log('dashboard req error', error)
    })
  }
}

export function signOut(){
  localStorage.removeItem('token')
  return({
    type: actionTypes.LOGGED_OUT
  })
}
