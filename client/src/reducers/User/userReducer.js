import  * as actionTypes from '../../actions/actionConstants';

export default (state = {}, action ) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return { ...state, authenticated: true, user: action.payload.data, popUpWindow: false, openInterval: action.payload.openInterval }
    case actionTypes.USER_DASHBOARD:
      return { ...state, dashBoadUser: action.payload.user, allListings: action.payload.listings, openInterval: false }
    case actionTypes.USER_ERROR:
      return { ...state, error: action.payload }
    case actionTypes.LOGGED_IN:
      return {...state, authenticated: true}
    case actionTypes.LOGGED_OUT:
      return {...state, authenticated: false}
    default:
      return state;
  }
}