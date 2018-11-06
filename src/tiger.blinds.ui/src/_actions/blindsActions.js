import * as actionTypes from './actionTypes'
import BlindApi from '../api/blindApi';

const blindApi = new BlindApi();

export function receivedBlindsSuccessful(blinds) {
  return {
    type: actionTypes.RECEIVED_BLINDS_SUCCESSFUL,
    blinds
  }
}

export function receivedBlindsFailed(error) {
  return {
    type: actionTypes.RECEIVED_BLINDS_FAILED,
    error
  }
}

export function openedBlindSuccess(blind) {
  return {
    type: actionTypes.OPENED_BLIND_SUCCESSFUL,
    blind
  }
}

export function openBlindFailed(error) {
  return {
    type: actionTypes.OPENED_BLIND_FAILED,
    error
  }
}

export function getBlinds() {
  return function(dispatch) {
    return blindApi.getBlinds()
      .then( response => {
        const blinds = response.data;
        dispatch(receivedBlindsSuccessful(blinds));
      })
      .catch( error => {
        dispatch(receivedBlindsFailed(error));
      });
  }
}

export function openBlindWithId(id) {
  return function(dispatch) {
    return dispatch(openedBlindSuccess(id));
    // return blindApi.openBlindWithId(id)
    //   .then( _ => {
    //     dispatch(openedBlindSuccess(id));
    //   })
    //   .catch( error => {
    //     dispatch(openedBlindFailed(error));
    //   });
  }
}

