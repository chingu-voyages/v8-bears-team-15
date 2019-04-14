import  { PLAY_INTRO } from '../../actions/actionConstants';

export default (state = {}, action ) => {
  switch (action.type) {
    case PLAY_INTRO:
      return { ...state, openIntro: action.payload }
    default:
      return state;
  }
}