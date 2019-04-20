import  * as actionTypes from '../../actions/actionConstants';

export default (state = {}, action ) => {
  switch (action.type) {
    case actionTypes.SIGN_IN:
      return { ...state, authenticated: true }
    case actionTypes.USER_DASHBOARD:
      // add all necessary data
      return { ...state, user: action.payload.user }
      case actionTypes.USER_ERROR:
      // add all necessary data
      return { ...state, error: action.payload }
    default:
      return state;
  }
}