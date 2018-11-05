import { RECEIVED_BLINDS_SUCCESSFUL, RECEIVED_BLINDS_FAILED } from './actionTypes'
import BlindApi from '../api/blindApi';

const blindApi = new BlindApi();

export function receivedBlindsSuccessful(blinds) {
  return {
    type: RECEIVED_BLINDS_SUCCESSFUL,
    blinds
  }
}

export function receivedBlindsFailed(error) {
  return {
    type: RECEIVED_BLINDS_SUCCESSFUL,
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