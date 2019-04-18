import  * as actionTypes from '../../actions/actionConstants';

export default (state = {}, action ) => {
  switch (action.type) {
    case actionTypes.PLAY_INTRO:
      return { ...state, openIntro: action.payload }
    case actionTypes.POP_WINDOW:
      return { ...state, popUpWindow: action.payload.pop }
    default:
      return state;
  }
}