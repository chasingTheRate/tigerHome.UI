import { RECEIVED_BLINDS_SUCCESSFUL, RECEIVED_BLINDS_FAILED } from '../_actions/actionTypes';

export default function blindsReducer(state={}, action) {
  switch (action.type) {
    case RECEIVED_BLINDS_SUCCESSFUL:
      return Object.assign({}, state, { 
        data: action.blinds,
        error: {} 
      })
    case RECEIVED_BLINDS_FAILED:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}