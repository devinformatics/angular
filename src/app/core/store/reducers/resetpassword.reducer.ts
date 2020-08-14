/** Edufront Application Data Classes
    Created: 2018_12_26
    Updated by: Ravindra
    Description: Classes for Reset Password Reducer
**/

import { AllRESETPASSWORDDATA, ResetPasswordActionTypes } from '../actions/resetpassword.actions';
import { RESET_PASSWORD } from '../../_models/resetpassword';

export interface CHANGEPASSWORDSTATE {
  success: any | null;
  error: any | null;
  resetpasswordinfo: RESET_PASSWORD | null;
}

const initialState: CHANGEPASSWORDSTATE = {
  success: null,
  error: null,
  resetpasswordinfo: null
};
export function reducer(state: any = initialState, action: AllRESETPASSWORDDATA): CHANGEPASSWORDSTATE {
  switch (action.type) {
    
    case ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        success: action.payload

      };
    case ResetPasswordActionTypes.RESET_PASSWORD_FAILURE: {
      return {
        ...state,
        error: 'Password not updated.',
        success: null
      };
    };

    case ResetPasswordActionTypes.CHECK_OLD_PASSWORD_SUCCESS:
      return {
        ...state,
        error: null,
        success: "Old password exists."

      };
    case ResetPasswordActionTypes.CHECK_OLD_PASSWORD_FAILURE: {
      return {
        ...state,
        error: 'Old Password does not exist.',
        success: null
      };
    };

    default:
      // const data = JSON.parse(sessionStorage.getItem('appState'));
      // if (data !== null && data.authenticated) {
      //   return data;
      // } else {
      return state;
    // }
  }
}

export const getError = (state: CHANGEPASSWORDSTATE) => state.error;

export const getResetPasswordError = (state: CHANGEPASSWORDSTATE) => state.error;

export const getResetPasswordSuccess = (state: CHANGEPASSWORDSTATE) => state.success;
