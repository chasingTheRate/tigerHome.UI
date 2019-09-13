import * as actionTypes from './actionTypes'
import Api from '../api/blindApi';

const api = new Api();

export function loginAttempted() {
  return {
    type: actionTypes.LOGIN_ATTEMPTED,
  }
}

export function attemptLogin(userInfo) {
  return function(dispatch) {
    console.log(userInfo)
    return api.attemptLogin(userInfo)
      .then( response => {
        //  dispatch(closedBlindSuccess(blind));
      })
      .catch( error => {
        //  dispatch(closedBlindFailed(error));
      });
  }
}