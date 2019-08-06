import * as actionTypes from './../actionConstants';

export function playIntro() {
  return (dispatch) => {
    dispatch(
      {
        type: actionTypes.PLAY_INTRO,
        payload: true,
      }
    )
  }
}

export function closeIntro() {
  return (dispatch) => {
    dispatch(
      {
        type: actionTypes.PLAY_INTRO,
        payload: false,
      }
    )
  }
}

export function popAuth(provider) {
  return (dispatch) => {
    dispatch(
      {
        type: actionTypes.POP_WINDOW,
        payload: {
          pop: true,
          openInterval: true,
          provider
        },
      }
    )
  }
}

export function closePopAuth() {
  return (dispatch) => {
    dispatch(
      {
        type: actionTypes.POP_WINDOW,
        payload: {
          pop: false,
        },
      }
    )
  }
}

export function setIntervalID(value) {
  return (dispatch) => {
    dispatch(
      {
        type: actionTypes.HOME,
       payload: {
         id: value,
       }
      }
    )
  }
}