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

export function openedBlindFailed(error) {
  return {
    type: actionTypes.OPENED_BLIND_FAILED,
    error
  }
}

export function closedBlindSuccess(blind) {
  return {
    type: actionTypes.CLOSED_BLIND_SUCCESSFUL,
    blind
  }
}

export function closedBlindFailed(error) {
  return {
    type: actionTypes.CLOSED_BLIND_FAILED,
    error
  }
}

export function getBlindSuccessful(blind) {
  return {
    type: actionTypes.GET_BLIND_SUCCESSFUL,
    blind
  }
}

export function getBlindFailed(error) {
  return {
    type: actionTypes.GET_BLIND_FAILED,
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

export function getBlindById(id) {
  return function(dispatch) {
    return blindApi.getBlindById(id)
      .then( response => {
        const blind = response.data;
        dispatch(getBlindSuccessful(blind));
      })
      .catch( error => {
        dispatch(getBlindFailed(error));
      });
  }
}

export function openBlindWithId(id) {
  return function(dispatch) {
    return blindApi.openBlindWithId(id)
      .then( blind => {
        dispatch(openedBlindSuccess(blind));
      })
      .catch( error => {
        dispatch(openedBlindFailed(error));
      });
  }
}

export function closeBlindWithId(id) {
  return function(dispatch) {
    return blindApi.closeBlindWithId(id)
      .then( blind => {
        dispatch(closedBlindSuccess(blind));
      })
      .catch( error => {
        dispatch(closedBlindFailed(error));
      });
  }
}

