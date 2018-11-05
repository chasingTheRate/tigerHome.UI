import BlindApi from './blindApi';

const blindApi = new BlindApi();

export function getBlinds() {
    return blindApi.getBlinds();
};