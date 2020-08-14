
import { Action } from '@ngrx/store';

// import type function
import { type } from '../utils';
import { SIGNIN } from '../../_models/auth';
import { FORGOTPASSWORD } from '../../_models/auth';
import { CHANGE_PASSWORD } from '../../_models/changepassword';

export const AuthActionTypes = {
  LOGIN: type('[users] Authenticate'),
  LOGIN_FAILURE: type('[users] Authentication error'),
  LOGIN_SUCCESS: type('[users] Authentication success'),
  LOGOUT: type('[users] Logout'),
  LOGOUT_SUCCESS: type('[users] logout_success'),
  LOGOUT_FAILURE: type('[users] logout_error'),
  FORGOT_PASSWORD: type('[users] Forgot Password'),
  FORGOT_SUCCESS: type('[users] Forgot Success'),
  FORGOT_FAILURE: type('[users] Email error'),
  CHANGE_PASSWORD: type('[users] Change Password'),
  CHANGE_PASSWORD_SUCCESS: type('[users] Change Password Success'),
  CHANGE_PASSWORD_FAILURE: type('[users] Change Password Failure'),
  PRIVACY_POLICY: type("[users] Privacy Policy"),
  PRIVACY_POLICY_SUCCESS: type("[users] Privacy Policy Success"),
  TERMS_AND_CONDITIONS: type("[users] Terms and Conditions"),
  TERMS_AND_CONDITIONS_SUCCESS: type("[users] Terms and Conditions Success"),
};

export class LogIn implements Action {
  readonly type: string = AuthActionTypes.LOGIN;
  constructor(public payload: SIGNIN) { }
}



export class ChangePassword implements Action {
  readonly type: string = AuthActionTypes.CHANGE_PASSWORD;

  constructor(public payload: any) { }
}




export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export class ForgotPassword implements Action {
  readonly type: string = AuthActionTypes.FORGOT_PASSWORD;

  constructor(public payload: FORGOTPASSWORD) { }
}

export class ForgotSuccess implements Action {
  readonly type = AuthActionTypes.FORGOT_SUCCESS;
  constructor(public payload: any) { }
}

export class ForgotFailure implements Action {
  readonly type = AuthActionTypes.FORGOT_FAILURE;

  constructor(public payload: any) { }
}

export class ChangePasswordSuccess implements Action {
  readonly type = AuthActionTypes.CHANGE_PASSWORD_SUCCESS;

  constructor(public payload: any) { }
}

export class ChangePasswordFailure implements Action {
  readonly type = AuthActionTypes.CHANGE_PASSWORD_FAILURE;
  constructor(public payload: any) { }
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) { }
}


export class LogOut implements Action {
  readonly type: string = AuthActionTypes.LOGOUT;

  constructor(public payload: any) { }
}


export class LogOutSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor(public payload: any) { }
}

export class LogOutFailure implements Action {
  readonly type = AuthActionTypes.LOGOUT_FAILURE;
  constructor(public payload: any) { }
}
export class PrivacyPolicy implements Action {
  readonly type = AuthActionTypes.PRIVACY_POLICY;
  constructor(public payload: any) { }
}
export class PrivacyPolicySuccess implements Action {
  readonly type = AuthActionTypes.PRIVACY_POLICY_SUCCESS;
  constructor(public payload: any) { }
}
export class TermsAndUse implements Action {
  readonly type = AuthActionTypes.TERMS_AND_CONDITIONS;
  constructor(public payload: any) { }
}
export class TermsAndUseSuccess implements Action {
  readonly type = AuthActionTypes.TERMS_AND_CONDITIONS_SUCCESS;
  constructor(public payload: any) { }
}
export type All = LogIn | LogInSuccess | ForgotPassword | ForgotSuccess | ChangePassword | ChangePasswordSuccess | LogInFailure | ForgotFailure | LogOut | LogOutSuccess | LogOutFailure | PrivacyPolicy | PrivacyPolicySuccess | TermsAndUse | TermsAndUseSuccess;
