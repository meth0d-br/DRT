/**
 * Authentication service
 * All things for auth
 * @author Bad Rabbit Consulting
 */

import apiConstants from '../constants/apiConstants';

/**
 * Service methods
 * @module authService
 */
const authService = {
  login,
  logout
};

export default authService;

/**
 * Login/authenticate a registered user
 * @param  {string} username
 * @param  {string} password
 * @return {object}
 * @async
 */
function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authentication': 'Bearer DDaWnOEOeLFPLtyEG8rG',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password,
      grant_type: 'password'
    })
  };

  const endpoint = apiConstants.API_TOKEN;

  return fetch(endpoint, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      if (user && user.person.key) {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    });
}

/**
 * Logout an authenticated user
 * @return {boolean}
 */
function logout() {
  return localStorage.removeItem('user');
}
