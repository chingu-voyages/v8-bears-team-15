import axios from 'axios';

import * as actionTypes from '../actionConstants';
import { history } from '../../App';

export function signIn(email) {
  return (dispatch) => {
    axios.post('http://localhost:3000/login', {
      email
    })
    .then((response) => {
      if(response.status === 401 || response.status === 400){
        console.log(response.data.error)
        dispatch({
          payload: response.data.error
        })
      }else{
        dispatch({
          type: actionTypes.SIGN_IN,
        })
        localStorage.setItem('token', response.data.token)
        history.push('/jobs')
      }
    })
    .catch((err) => {
      if(err.response.status === 401 || err.response.status === 400){
        console.log(err)
        dispatch({
          type: actionTypes.USER_ERROR,
          payload: 'user not found',
        })
      }
    })
  }
}


export function userDashBoard(){
  return (dispatch) => {
    let token = localStorage.getItem('token');

    axios.get('http://localhost:3000/dashboard', {
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
      console.log('dashboard req error', error.stack)
    })
  }
}