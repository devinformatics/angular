/** Edufront Application Data Classes
    Created: 2018_11_30
    Updated by: Ravindra
    Description: Classes for User Setting Reducer
**/

import { AllSETTINGDATA, SettingsActionTypes } from '../actions/settings.actions';
import { Settings } from '../../_models/settings';


export interface Settingstate {
  error: string | null;
  success: string | null;
  settinginfo: Settings | null;
  
}

const initialState: Settingstate = {
  error: null,
  success: null,
  settinginfo: null  
};
export function reducer(state: any = initialState, action: AllSETTINGDATA): Settingstate {
  switch (action.type) {
    
    case SettingsActionTypes.SETUSER_SETTING_SUCCESS:
      return {
        ...state,
        error: null,
        success: action.payload

      };
    case SettingsActionTypes.SETUSER_SETTING_FAILURE: {
      return {
        ...state,
        error: 'unable to update user setting',
        success: null
      };
    };

    case SettingsActionTypes.CHECK_USER_EMAIL_SUCCESS:
      return {
        ...state,
        error: null,
        settinginfo: {
          usersetting: action.payload,
        }

      };
    case SettingsActionTypes.CHECK_USER_EMAIL_FAILURE: {
      return {
        ...state,
        error: 'Email already exists',
        
      };
    };
    case SettingsActionTypes.SET_PLAN_YEAR_SUCCESS:
      return {
        ...state,
        error: null,
        success: action.payload

      };
    case SettingsActionTypes.SET_PLAN_YEAR_FAILURE: {
      return {
        ...state,
        error: 'unable to update user plan year',
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

export const getError = (state: Settingstate) => state.settinginfo;

export const getUpdateSettingError = (state: Settingstate) => state.error;

export const getUpdateSettingSuccess = (state: Settingstate) => state.success;
