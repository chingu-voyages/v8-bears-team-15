

// import * as actionTypes from '../actionConstants';
// import { history } from '../../App';

export function upload(data){

  fetch('http://localhost:4000/uploads',
  {
    method: 'POST',
    body: data
  }
   ).then(res => {
     console.log("all res", res)
   }).catch(err => console.log("upload err", err))
}