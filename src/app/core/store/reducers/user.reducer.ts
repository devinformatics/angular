

import { WnctyClient } from '../../_models/client';
import { AllUSERCRUD, UserActionTypes } from '../actions/user.actions';
import { USERPROFILE } from '../../_models/userprofile';
import { WnctyBenefits } from '../../_models/benefits';

export interface USERSTATE {
  error: string | null;
  userprofile: USERPROFILE | null;
  userinfo: USERPROFILE | null;
  client: WnctyClient | null;
  clientById: WnctyClient | null;
  Individualclient: WnctyClient | null;
 //benefits: WnctyBenefits | null;
}
const initialState: USERSTATE = {
  error: null,
  userprofile: null,
  userinfo: null,
  client: null,
  clientById: null,
  Individualclient:null
  //benefits:null
};
export function reducer(state: any = initialState, action: AllUSERCRUD): USERSTATE {
  switch (action.type) {
    case UserActionTypes.GETUSER_PROFILE_SUCCESS:
      return {
        ...state,
        userprofile: action.payload.profiles[0],
        userinfo: action.payload.user,
        error: null
      }
    case UserActionTypes.GETUSER_PROFILE_FAILURE: {
      return {
        ...state,
        userinfo:null,
        error: 'unable to fetch details'
      };
    }
    case UserActionTypes.GETUSER_CLIENT_SUCCESS:
      return {
        ...state,
        error: null,
        client: JSON.parse(JSON.stringify(action.payload)).response,
      };
    case UserActionTypes.GETUSER_CLIENT_FAILURE: {
      return {
        ...state,
        error: 'unable to fetch client list',
        client: null
      };
    };
    case UserActionTypes.GETUSER_CLIENT_BY_ID_SUCCESS: {
      return {
        ...state,
        error: 'unable to fetch client list',
        Individualclient: action.payload,
        clientById: action.payload.clientUUID
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

export const getUserInfo = (state: USERSTATE) => state.userinfo;

export const getUserProfile = (state: USERSTATE) => state.userprofile;

export const getClient = (state: USERSTATE) => state.client;

export const getClientById = (state: USERSTATE) => state.Individualclient;

export const getSelectedClientId = (state: USERSTATE) => state.clientById;

export const getError = (state: USERSTATE) => state.error;
