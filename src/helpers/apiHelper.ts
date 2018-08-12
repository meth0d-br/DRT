import * as CryptoJS from 'crypto-js';
import { randStr } from './lib';
import apiConstants from '../constants/apiConstants';

/**
 * API methods
 * @module API
 */

const getToken = props => {

  var ts = Math.floor(((new Date()).getTime()) / 1000);
  var nonce = randStr(18);
  var str = ts + "\n" + nonce + "\n" + (props.method || "GET") + "\n"
               + '/' + props.uri + "\n"
               + apiConstants.API_HOST + '\n443\n\n';

  var mac = CryptoJS.enc.Base64.stringify(
    CryptoJS.HmacSHA256(str, props.macSecret)
  );

  return 'MAC id="' + props.macId + '", ts="'
    + ts + '", nonce="' + nonce + '", mac="'
    + mac + '"';

};

const getEndpoint = (endpoint, query='') => {

  switch (endpoint) {
    case apiConstants.API_TOKEN:
      return apiConstants.API_HOST + endpoint + '/' + query;
    default:
      return apiConstants.API_HOST;
  }

}

const getRelativeEndpoint = (endpoint, query='') => {

  switch (endpoint) {
    case apiConstants.API_TOKEN:
      return endpoint + '/' + query;
    default:
      return '/';
  }

}

const apiHelper = {
  getEndpoint,
  getRelativeEndpoint,
  getToken
};

export default apiHelper;
