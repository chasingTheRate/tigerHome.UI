import EventEmitter from 'events';
import config from '../../config';
import axios from 'axios';

const baseUrl = `${config.tigerBlindsApi}/api/v1`;

class BlindApi extends EventEmitter {
  constructor() {
    super();                    
  }

  attemptLogin(userInfo) {
    return axios.post(`${baseUrl}/login`, { 
      data: {
        userInfo,
      } 
    })
  }

  getBlinds() {
    return axios.get(`${baseUrl}/blinds`);
  }

  getBlindById(id) {
    return axios.get(`${baseUrl}/blinds/${id}`);
  }

  openBlindWithId(id) {
    return axios.post(`${baseUrl}/blinds/${id}/openBlind`);
  }

  closeBlindWithId(id) {
    return axios.post(`${baseUrl}/blinds/${id}/closeBlind`);
  }

  addBlind(data) {
    return axios.post(`${baseUrl}/blinds/addBlind`, { 
      data 
    })
  }

  removeBlind(id) {
    return axios.post(`${baseUrl}/blinds/removeBlind`, { 
      data: {
        blindid: id
      } 
    })
  }

  setPositionLimit(id, positionLimitOption, angle) {
    // console.log(`setPositionLimit positionLimitOption: ${ positionLimitOption }, angle: ${ angle }`);
    switch(positionLimitOption) {
      case 'open':
        return axios.post(`${baseUrl}/blinds/setOpenAngleLimit`, { 
          data: {
            blindId: id,
            angleLimitOpen: angle
          } 
        })
      case 'closed':
        return axios.post(`${baseUrl}/blinds/setClosedAngleLimit`, { 
          data: {
            blindId: id,
            angleLimitClosed: angle
          } 
        })
        break;
      default:
        break;
    }
  }
}

export default BlindApi