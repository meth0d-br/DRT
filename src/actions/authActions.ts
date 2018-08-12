import authConstants from '../constants/authConstants';
import authService from '../services/authService';

const login = (username, password) => {

  const request = user => { return { type: authConstants.LOGIN_REQUEST, user } };
  const success = user => { return { type: authConstants.LOGIN_SUCCESS, user } };
  const failure = error => { return { type: authConstants.LOGIN_FAILURE, error } };

  return dispatch => {
    dispatch(request({ username }));

    authService.login(username, password)
      .then(
        user => {
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

}

const logout = () => {
  authService.logout();
  return { type: authConstants.LOGOUT };
}

const authActions = {
  login,
  logout
};

export default authActions;
