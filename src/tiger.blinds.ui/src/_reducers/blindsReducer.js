import * as actionTypes from '../_actions/actionTypes';

export default function blindsReducer(state={}, action) {
  switch (action.type) {
    case actionTypes.RECEIVED_BLINDS_SUCCESSFUL:
      return Object.assign({}, state, { 
        data: action.blinds,
        error: {} 
      })
    case actionTypes.RECEIVED_BLINDS_FAILED:
      return Object.assign({}, state, { error: action.error });
    case actionTypes.OPENED_BLIND_SUCCESSFUL: {
      return Object.assign({}, state, {
        data: state.data.map( blind => {
          if(blind.id !== action.blind.id) {
            return blind
          }
          return action.blind;
        })
      })
    }
    default:
      return state;
  }
}