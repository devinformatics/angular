/** Edufront Application Data Classes
    Created: 2018_11_30
    Updated by: Manish
    Description: Classes for User Actions
**/

import { Action } from '@ngrx/store';

// import type function
import { type } from '../utils';
import { USERPROFILE } from '../../_models/userprofile';

export const UserActionTypes = {
  GETUSER_PROFILE: type('[usersinfo] GetUserProfile'),
  GETUSER_PROFILE_FAILURE: type('[usersinfo] GetUserProfile error'),
  GETUSER_PROFILE_SUCCESS: type('[usersinfo] GetUserProfile success'),
  GETUSER_CLIENT: type('[usersclient] GetUserClient'),
  GETUSER_CLIENT_FAILURE: type('[usersinfo] GetUserClient error'),
  GETUSER_CLIENT_SUCCESS: type('[usersinfo] GetUserClient success'),
  GETUSER_CLIENT_BY_ID: type('[usersclient] GetUserClientByID'),
  GETUSER_CLIENT_BY_ID_SUCCESS: type('[usersclient] GetUserClientByID Success'),
};

export class GetUserProfile implements Action {
  readonly type: string = UserActionTypes.GETUSER_PROFILE;
  constructor(public payload: any, public uProfileId: any) { }
}

export class GetUserClients implements Action {
  readonly type: string = UserActionTypes.GETUSER_CLIENT;
  constructor(public payload: any) { }
}

export class GetUserProfileSuccess implements Action {
  readonly type = UserActionTypes.GETUSER_PROFILE_SUCCESS;
  constructor(public payload: USERPROFILE) { }
}
export class GetUserClientsSuccess implements Action {
  readonly type = UserActionTypes.GETUSER_CLIENT_SUCCESS;
  constructor(public payload: any) { }
}


export class GetUserProfileFailure implements Action {
  readonly type = UserActionTypes.GETUSER_PROFILE_FAILURE;
  constructor(public payload: any) { }
}

export class GetUserClientsFailure implements Action {
  readonly type = UserActionTypes.GETUSER_CLIENT_FAILURE;
  constructor(public payload: any) { }
}
export class GetUserClientsById implements Action {
  readonly type = UserActionTypes.GETUSER_CLIENT_BY_ID;
  constructor(public payload: any) { }
}
export class GetUserClientsByIdSuccess implements Action {
  readonly type = UserActionTypes.GETUSER_CLIENT_BY_ID_SUCCESS;
  constructor(public payload: any) { }
}

export type AllUSERCRUD = GetUserProfile
  | GetUserClients
  | GetUserProfileSuccess
  | GetUserClientsSuccess
  | GetUserProfileFailure
  | GetUserClientsFailure
  | GetUserClientsById
  | GetUserClientsByIdSuccess;
