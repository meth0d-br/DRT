/**
 * Authentication service
 * All things for auth
 * @author Bad Rabbit Consulting
 */

import apiConstants from '../constants/apiConstants';
import apiHelper from '../helpers/apiHelper';

const postState = (user = { mac_key: null, access_token: null}, state) => {

  const macProps: any = {
    method: 'POST',
    uri: apiConstants.API_TOKEN,
    macSecret: user.mac_key,
    macId: user.access_token
  };

  const requestOptions: any = {
    body: JSON.stringify(state),
    cache: 'no-cache',
    headers: {
      'Authorization': apiHelper.getToken(macProps),
      'Content-Type': 'application/json'
    },
    method: 'POST'
  };

  const endPoint = apiConstants.API_POST;

  return fetch(endPoint, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(state => {
      return state;
    });

}

const appService = {
  postState
};

export default appService;
