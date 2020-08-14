/** Edufront Application Data Classes
    Created: 2018_11_30
    Updated by: Manish
    Description: Classes for Authentication Reducer
**/

import { USER } from '../../_models/user';

import { AuthActionTypes, All } from '../actions/auth.actions';
import { WnctyClient } from '../../_models/client';

export interface State {
  authenticated: boolean;
  error: any | null;
  forgoterror: any | null;
  success: any | null;
  authToken: string | null;
  userinfodata: any | null,
  user: USER | null;
  client: WnctyClient | null;
  privacyPolicy: string | null;
  termsandcondition: string | null;
}

const initialState: State = {
  authenticated: false,
  user: null,
  success: null,
  authToken: null,
  userinfodata: null,
  error: null,
  forgoterror: null,
  client: null,
  privacyPolicy: null,
  termsandcondition: null,
};

export function reducer(state: any = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        authToken: JSON.parse(action.payload).response.token,
        userinfodata: JSON.parse(action.payload).response,
        user: {
          token: JSON.parse(action.payload).response.token,
          userinfo: JSON.parse(action.payload),
        },
        error: action.payload
      };
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        authenticated: false,
        userinfodata: null,
        authToken: null,
        error: JSON.parse(action.payload.error).errors,
      };
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        user: null,
        userinfodata: null,
        authToken: null,
        error: null

      };
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    case AuthActionTypes.LOGOUT_FAILURE: {
      return {
        ...state,
        authenticated: false,
        authToken: null,
        userinfodata: null,
        user: null,
        error: null
      };
    };
    case AuthActionTypes.FORGOT_FAILURE: {
      return {
        ...state,
        forgoterror: action.payload
      };
    }
    case AuthActionTypes.FORGOT_SUCCESS:
      return {
        ...state,
        success: action.payload
      };
    case AuthActionTypes.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        success: action.payload
      };
    }
    case AuthActionTypes.CHANGE_PASSWORD_FAILURE: {
      return {
        ...state,
        error: 'Something is going wrong. Either your token is invalid or expired.'
      };
    }
    case AuthActionTypes.PRIVACY_POLICY_SUCCESS:
      return {
        ...state,
        privacyPolicy: JSON.stringify(action.payload),
      };
    case AuthActionTypes.TERMS_AND_CONDITIONS_SUCCESS:
      return {
        ...state,
        termsandcondition: JSON.stringify(action.payload),
      };
    default:
      const data = JSON.parse(sessionStorage.getItem('appState'));
      if (data !== null && data.authenticated) {
        return data;
      } else {
        return state;
      }

  }
}

export const isAuthenticated = (state: State) => state.authenticated;

export const getAuthenticatedToken = (state: State) => state.authToken;

export const getUserDetailData = (state: State) => state.userinfodata;

export const getAuthenticatedUserClient = (state: State) => state.client;

export const getAuthenticationError = (state: State) => state.error;

export const getForgotError = (state: State) => state.forgoterror;

export const getForgotSuccess = (state: State) => state.success;

export const getChangePasswordError = (state: State) => state.error;

export const getChangePasswordSuccess = (state: State) => state.success;

export const getPrivacyPolicy = (state: State) => state.privacyPolicy;
export const getTermsAndCondition = (state: State) => state.termsandcondition;
