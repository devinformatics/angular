
import { Action } from '@ngrx/store';

// import type function
import { type } from '../utils';
import { RESET_PASSWORD } from '../../_models/resetpassword';

export const ResetPasswordActionTypes = {
  RESET_PASSWORD: type('[resetPassword] ResetPassword'),
  RESET_PASSWORD_FAILURE: type('[resetPassword] ResetPassword error'),
  RESET_PASSWORD_SUCCESS: type('[resetPassword] ResetPassword success'),
  CHECK_OLD_PASSWORD: type('[resetPassword] Check old Passowrd'),
  CHECK_OLD_PASSWORD_FAILURE: type('[resetPassword] Check old Passowrd error'),
  CHECK_OLD_PASSWORD_SUCCESS: type('[resetPassword] Check old Passowrd success')
};



export class ResetPassword implements Action {
  readonly type = ResetPasswordActionTypes.RESET_PASSWORD;
  constructor(public payload: any) { }
}

export class ResetPasswordSuccess implements Action {
  readonly type = ResetPasswordActionTypes.RESET_PASSWORD_SUCCESS;
  constructor(public payload: any) { }
}

export class ResetPasswordFailure implements Action {
  readonly type = ResetPasswordActionTypes.RESET_PASSWORD_FAILURE;
  constructor(public payload: any) { }
}

export class CheckOldPassword implements Action {
  readonly type = ResetPasswordActionTypes.CHECK_OLD_PASSWORD;
  constructor(public payload: any) { }
}

export class CheckOldPasswordSuccess implements Action {
  readonly type = ResetPasswordActionTypes.CHECK_OLD_PASSWORD_SUCCESS;
  constructor(public payload: any) { }
}

export class CheckOldPasswordFailure implements Action {
  readonly type = ResetPasswordActionTypes.CHECK_OLD_PASSWORD_FAILURE;
  constructor(public payload: any) { }
}


export type AllRESETPASSWORDDATA = ResetPassword | ResetPasswordSuccess | ResetPasswordFailure | CheckOldPassword | CheckOldPasswordSuccess | CheckOldPasswordFailure;
