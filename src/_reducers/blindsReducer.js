import * as actionTypes from '../_actions/actionTypes';

const initialState = {
  blinds: [],
  blind: {},
}

export default function blindsReducer(state=initialState, action) {
  switch (action.type) {

    case actionTypes.RECEIVED_BLINDS_SUCCESSFUL:
      return Object.assign({}, state, { 
        blinds: action.blinds,
        error: {} 
      })

    case actionTypes.RECEIVED_BLINDS_FAILED:
      return Object.assign({}, state, { error: action.error });
    
    case actionTypes.GET_BLIND_SUCCESSFUL:
      return Object.assign({}, state, { 
        blind: action.blind,
      })
    
    case actionTypes.OPENED_BLIND_SUCCESSFUL:b
      return Object.assign({}, state, {
        data: state.data.map( blind => {
          if(blind.id !== action.blind.id) {
            return blind
          }
          return action.blind;
        })
      })
  
    case actionTypes.OPENED_BLIND_FAILED: 
      return Object.assign({}, state, {
        error: action.error
      })

    case actionTypes.CLOSED_BLIND_SUCCESSFUL: 
      return Object.assign({}, state, {
        data: state.data.map( blind => {
          if(blind.id !== action.blind.id) {
            return blind
          }
          return action.blind;
        })
      })

    case actionTypes.OPENED_BLIND_FAILED: 
      return Object.assign({}, state, {
        error: action.error
      })
    
    case actionTypes.OPENED_BLIND_SUCCESSFUL:
      return Object.assign({}, state, {
        blind: action.blind
      })

    default:
      return state;
  }
}