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
        dispatch({
          type: actionTypes.USER_ERROR,
          payload: response.data.error
        })
      }else{
        dispatch({
          type: actionTypes.SIGN_IN,
          payload: response.data.user,
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


// export function socialSignIn() {
//   console.log("socially signing")
//   return (dispatch) => {
//     axios.get(`http://localhost:3000/success`)
//     .then((response) => {
//       console.log("social media response", response)
//       dispatch({
//         type: actionTypes.SIGN_IN,
//       })
//       localStorage.setItem('token', response.data.token)
//       history.push('/jobs')
//     })
//   }
// }

export function userDashBoard(){
  return (dispatch) => {
    let token = localStorage.getItem('token');
    console.log("Token", token)
    axios.get('http://localhost:3000/jobs', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log("dash response", response.data)
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


// export function filterListings(option, array){
//    array.filter((entry) => {

//    })
// }