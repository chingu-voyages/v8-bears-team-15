import { PLAY_INTRO } from './../actionConstants';

export function playIntro() {
  return (dispatch) => {
    dispatch(
      {
        type: PLAY_INTRO,
        payload: true,
      }
    )
  }
}

export function closeIntro() {
  return (dispatch) => {
    dispatch(
      {
        type: PLAY_INTRO,
        payload: false,
      }
    )
  }
}