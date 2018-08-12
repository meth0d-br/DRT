/**
 * @file blog actions
 * @description Helper methods for blog stuff
 * @author tm
 * @copyright Inspec Digital, LLC
 */

import appConstants from '../constants/appConstants';
import appService from '../services/appService';

const request = (type) => { return { type: type }; }

const success = (type, data) => { return { type: type, data: data }};

const fail = error => { return { type: appConstants.ERROR, error: error }};

const clearMessaging = () => {

  return dispatch => {
    dispatch(success(appConstants.CLEAR_MESSAGING, null));
  };

}

const agesSetTabValue = tabValue => {

  return (dispatch) => {

      dispatch(success(appConstants.ADMIN_AGES_TAB_VALUE, tabValue));

  }

}

const muralSetSelected = selected => {

  return (dispatch, getState) => {

    dispatch(success(appConstants.ADMIN_MURAL_SELECTED, selected));

    const currentState = getState();

  };

}

const appActions = {
  agesSetTabValue,
  clearMessaging,
  muralSetSelected
};

export default appActions;
