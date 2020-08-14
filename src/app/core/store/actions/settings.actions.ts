/** Edufront Application Data Classes
    Created: 2018_12_10
    Updated by: Ravindra
    Description: Classes for User Settings
**/
import { Action } from '@ngrx/store';

// import type function
import { type } from '../utils';
import { Settings } from '../../_models/settings';

export const SettingsActionTypes = {
  SETUSER_SETTING: type('[settings] SetUserSetting'),
  SETUSER_SETTING_FAILURE: type('[settings] SetUserSetting error'),
  SETUSER_SETTING_SUCCESS: type('[settings] SetUserSetting success'),
  CHECK_USER_EMAIL: type('[settings] Check User Email'),
  CHECK_USER_EMAIL_FAILURE: type('[settings] Check User Email error'),
  CHECK_USER_EMAIL_SUCCESS: type('[settings] Check User Email success'),
  SET_PLAN_YEAR: type('[settings] SetPlanYear'),
  SET_PLAN_YEAR_FAILURE: type('[settings] SetPlanYear error'),
  SET_PLAN_YEAR_SUCCESS: type('[settings] SetPlanYear success')
};



export class SetUserSetting implements Action {
  readonly type = SettingsActionTypes.SETUSER_SETTING;
  constructor(public payload: any) { }
}

export class SetUserSettingSuccess implements Action {
  readonly type = SettingsActionTypes.SETUSER_SETTING_SUCCESS;
  constructor(public payload: any) { }
}

export class SetUserSettingFailure implements Action {
  readonly type = SettingsActionTypes.SETUSER_SETTING_FAILURE;
  constructor(public payload: any) { }
}

export class CheckUserEmail implements Action {
  readonly type = SettingsActionTypes.CHECK_USER_EMAIL;
  constructor(public payload: any) { }
}

export class CheckUserEmailSuccess implements Action {
  readonly type = SettingsActionTypes.CHECK_USER_EMAIL_SUCCESS;
  constructor(public payload: any) { }
}

export class CheckUserEmailFailure implements Action {
  readonly type = SettingsActionTypes.CHECK_USER_EMAIL_FAILURE;
  constructor(public payload: any) { }
}

export class SetPlanYear implements Action {
  readonly type = SettingsActionTypes.SET_PLAN_YEAR;
  constructor(public payload: any) { }
}

export class SetPlanYearSuccess implements Action {
  readonly type = SettingsActionTypes.SET_PLAN_YEAR_SUCCESS;
  constructor(public payload: any) { }
}

export class SetPlanYearFailure implements Action {
  readonly type = SettingsActionTypes.SET_PLAN_YEAR_FAILURE;
  constructor(public payload: any) { }
}

export type AllSETTINGDATA =  SetUserSetting
  | SetUserSettingSuccess
  | SetUserSettingFailure
  | CheckUserEmail
  | CheckUserEmailFailure
  | CheckUserEmailSuccess
  | SetPlanYear
  | SetPlanYearSuccess
  | SetPlanYearFailure;
