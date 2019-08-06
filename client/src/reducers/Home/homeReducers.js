import  * as actionTypes from '../../actions/actionConstants';

export default (state = {}, action ) => {
  switch (action.type) {
    case actionTypes.PLAY_INTRO:
      return { 
        ...state, 
        openIntro: 
        action.payload 
      }
    case actionTypes.POP_WINDOW:
      return { 
        ...state, 
        popUpWindow: action.payload.pop, 
        provider: action.payload.provider, 
        openInterval: action.payload.openInterval,
      }
    case actionTypes.HOME: 
      return { 
        ...state, 
        id: action.payload.id 
      }
    default:
      return state;
  }
}