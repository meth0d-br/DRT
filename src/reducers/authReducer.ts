import authConstants from '../constants/authConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { authenticated: true, user } : { authenticated: false, user: {} };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return Object.assign({}, state, {
        authenticating: true,
        user: action.user
      });
    case authConstants.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        user: action.user
      });
    case authConstants.LOGIN_FAILURE:
      return Object.assign({}, state, {
        authenticated: false,
        error: action.error,
        message: 'Login failed. Please check your username and password.'
      });
    case authConstants.LOGOUT:
      return Object.assign({}, state, {
        authenticated: false,
        user: {}
      });
    default:
      return state
  }
}

export default authReducer;
