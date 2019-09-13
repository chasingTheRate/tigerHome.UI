import * as actionTypes from '../_actions/actionTypes';

const initialState = {
  user: {},
  loading: false,
}

export default function blindsReducer(state=initialState, action) {
  switch (action.type) {

    case actionTypes.LOGIN_ATTEMPTED:
      return Object.assign({}, state, { 
        user: action.user,
        loading: true,
      })

    case actionTypes.LOGIN_SUCCESSFUL:
      return Object.assign({}, state, { 
        user: action.user,
        loading: false,
        error: {} 
      })

    case actionTypes.LOGIN_FAILED:
      return Object.assign({}, state, { 
        user: {},
        loading: false,
        error: action.error
      })

    default:
      return state;
  }
}